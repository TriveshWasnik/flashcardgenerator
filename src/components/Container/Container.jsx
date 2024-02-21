import React from "react";
/* Parent Container: insert all childrens i.e html element inside it */
function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;
