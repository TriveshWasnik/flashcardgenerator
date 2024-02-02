import React, { forwardRef, useId } from "react";
import { TbFileUpload } from "react-icons/tb";
function Input(
  { label, type = "text", isLongInput = false, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`mb-2 pl-4 font-semibold  ${
            type === "file"
              ? "flex justify-center items-center py-2 px-4 text-[#4834d4] border rounded border-[#bbb] mt-8 h-10 w-[180px]"
              : "text-[#777]"
          }`}
        >
          {type === "file" ? (
            <TbFileUpload
              className={`inline-block text-center align-middle mr-3 ${className}`}
            />
          ) : (
            ""
          )}
          {label}
        </label>
      )}
      {isLongInput ? (
        <textarea
          id={id}
          className={`resize-none ml-4 max-w-[800px]  h-28 pl-2 py-2 outline-none border border-[#bbb] rounded ${className}`}
          ref={ref}
          {...props}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={`ml-4 mr-6 max-w-[400px] pl-2 py-1 h-10 border rounded border-[#bbb] outline-none ${className}`}
          ref={ref}
          {...props}
        />
      )}
    </div>
  );
}

export default forwardRef(Input);
