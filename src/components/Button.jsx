import React from "react";
/* Custom Button */
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
      className={`${className} ${bgColor} ${textColor}  font-semibold`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
