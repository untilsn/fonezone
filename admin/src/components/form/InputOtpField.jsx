import OtpInput from "react-otp-input";

const InputOtpField = ({ value, onChange }) => {
  return (
    <div className="mb-1">
      <OtpInput
        value={value}
        onChange={onChange}
        containerStyle="flex justify-center w-full gap-3"
        numInputs={6}
        inputStyle={{
          width: "3.2rem",
          height: "3.2rem",
          borderRadius: "0.5rem",
          backgroundColor: "#f8fafc",
          color: "#1e293b",
          fontSize: "1.2rem",
          fontWeight: "600",
          textAlign: "center",
          border: "1px solid #e2e8f0",
          outline: "none",
          transition: "all 0.2s ease",
        }}
        focusStyle={{
          border: "2px solid #6366f1",
          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)",
          backgroundColor: "#ffffff",
        }}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default InputOtpField;
