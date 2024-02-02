import React from "react";
import Input from "../Input";
import UploadPicture from "./UploadPicture";

function TermRow({ count }) {
  return (
    <div className="flex mb-5">
      <div className="w-[40px] h-[40px] text-xl font-semibold text-center leading-10  bg-[#cc1313] rounded-[50%] text-[#fff]">
        {count}
      </div>
      <Input label="Enter Terms*" required />
      <Input label="Enter Defination*" required />
      <UploadPicture label="Select Image" className="hidden" />
    </div>
  );
}

export default TermRow;
