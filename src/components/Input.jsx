import { ErrorMessage, Field } from "formik";
import React, { forwardRef, useId } from "react";
import { TbFileUpload } from "react-icons/tb";

/* Custom Input Component */
function Input(
  {
    label,
    type = "text",
    name = "",
    isLongInput = false,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="flex flex-col w-full">
      {/* Code : File Upload Button */}
      {label && (
        <label
          htmlFor={id}
          className={`mb-2 pl-4 font-semibold  ${
            type === "file"
              ? "flex justify-center items-center py-2 px-4 text-[#4834d4] border rounded border-[#bbb] mt-2 md:mt-8 ml-4 md:ml-0 h-10 w-[180px]"
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
        /* TextArea Input */
        <Field
          as="textarea"
          name={name}
          id={id}
          className={`resize-none ml-4 max-w-[800px]  h-28 pl-2 py-2 outline-none border border-[#bbb] rounded ${className}`}
          ref={ref}
          {...props}
        ></Field>
      ) : (
        /* Input Text Box */
        <Field
          id={id}
          type={type}
          name={name}
          className={`ml-4 mr-6  pl-2 py-1 h-10 border rounded border-[#bbb] outline-none ${className}`}
          ref={ref}
          {...props}
        />
      )}
      <ErrorMessage
        name={name}
        component="p"
        className=" text-red-500 font-bold text-[14px] pl-5"
      />
    </div>
  );
}

export default forwardRef(Input);
