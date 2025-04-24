import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiX } from "react-icons/fi";
import clsx from "clsx";

const ImageUploadField = ({
  value = [],
  onChange,
  maxFiles = 5,
  maxSize = 5242880,
}) => {
  const [files, setFiles] = useState(Array.isArray(value) ? value : []);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Convert files to objects with preview URLs
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      // Update state with new files
      const updatedFiles = [...files, ...newFiles].slice(0, maxFiles);
      setFiles(updatedFiles);

      // Call onChange to update form value
      if (onChange) {
        onChange(updatedFiles);
      }
    },
    [files, maxFiles, onChange],
  );

  const removeFile = (index) => {
    const updatedFiles = [...files];
    // Release object URL to avoid memory leaks
    if (updatedFiles[index]?.preview) {
      URL.revokeObjectURL(updatedFiles[index].preview);
    }
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);

    // Call onChange to update form value
    if (onChange) {
      onChange(updatedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    maxSize,
    maxFiles: maxFiles - files.length, // Adjust max files based on already uploaded files
  });

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (file.preview) URL.revokeObjectURL(file.preview);
      });
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className={clsx(
          "rounded-lg border-2 border-dashed p-6 transition-colors",
          isDragActive
            ? "border-blue-400 bg-blue-50"
            : "border-gray-300 hover:border-gray-400",
          files.length >= maxFiles && "cursor-not-allowed opacity-50",
        )}
        {...(files.length >= maxFiles ? {} : getRootProps())}
      >
        <input {...getInputProps()} disabled={files.length >= maxFiles} />

        <div className="flex flex-col items-center justify-center text-center">
          <FiUpload className="mb-2 text-2xl" />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <>
              <p className="font-medium">Click or drag image to upload</p>
              <p className="mt-1 text-sm text-gray-500">
                PNG, JPG, GIF up to {maxSize / (1024 * 1024)}MB
              </p>
            </>
          )}
        </div>
      </div>

      {files.length > 0 && (
        <div className="flex flex-wrap gap-2 p-2 mt-4 border border-blue-100 rounded-lg bg-blue-50">
          {files.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={file.preview || URL.createObjectURL(file)}
                alt={`preview ${index}`}
                className="object-cover w-24 h-24 border border-gray-200 rounded-md"
              />
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute p-1 bg-white rounded-full shadow-md -top-2 -right-2 hover:bg-red-100"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}
      <p className="mt-1 text-xs text-gray-500">
        {files.length} of {maxFiles} files
      </p>
    </div>
  );
};

export default ImageUploadField;
