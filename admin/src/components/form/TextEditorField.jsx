import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import { editorActions } from "../../constants/buttonMenuBar";
import clsx from "clsx";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-1 mb-1">
      {editorActions.map(({ name, icon: Icon, command, isActive }, i) => {
        const active = isActive ? isActive(editor) : false;
        return (
          <button
            key={name || i}
            type="button"
            onClick={() => command(editor)}
            className={clsx(
              "hover:text-primary rounded p-2 text-gray-600 transition-all hover:bg-gray-200",
              active ? "text-primary bg-gray-200" : "",
            )}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

const TextEditorField = ({ initialValue = "", onChange }) => {
  const [content, setContent] = useState(initialValue);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Underline,
      Placeholder.configure({
        placeholder: "Nhập nội dung tại đây...", // hoặc truyền từ prop
        emptyEditorClass: "is-editor-empty", // để style riêng nếu muốn
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      if (onChange) {
        onChange(html);
      }
    },
  });

  useEffect(() => {
    // Update content when initialValue changes (e.g. when editing an existing product)
    if (editor && initialValue !== content) {
      editor.commands.setContent(initialValue);
      setContent(initialValue);
    }
  }, [initialValue, editor]);

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <MenuBar editor={editor} />
      <EditorContent
        placeholder="hoke"
        editor={editor}
        className="h-full min-h-[300px] rounded border border-gray-300 p-2"
      />
    </div>
  );
};

export default TextEditorField;
