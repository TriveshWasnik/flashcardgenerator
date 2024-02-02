import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-[#cc1313]",
  textColor = "text-[#ffffff]",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded w-[160px]  ${bgColor} ${textColor} ${className} font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
