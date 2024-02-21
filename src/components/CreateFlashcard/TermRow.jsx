import React from "react";
import Input from "../Input";
import UploadPicture from "./UploadPicture";

function TermRow({ setFieldValue, index, remove, values }) {
  let count = index + 1;
  return (
    <div className="flex mb-5">
      <div className="min-w-[40px] h-[40px] text-[16px] md:text-xl font-semibold text-center leading-10  bg-[#cc1313] rounded-[50%] text-[#fff]">
        {count}
      </div>
      <div className="flex w-full gap-2 flex-col md:flex-row">
        <Input
          label="Enter Terms*"
          name={`terms.${index}.termTitle`}
          className="md:mr-0"
        />
        <Input
          label="Enter Defination*"
          name={`terms.${index}.termDefinition`}
        />
        <UploadPicture
          label="Select Image"
          name={`terms.${index}.termImage`}
          className="hidden"
          setFieldValue={setFieldValue}
          remove={remove}
          index={index}
          values={values}
          editDelete="Yes"
        />
      </div>
    </div>
  );
}

export default TermRow;
