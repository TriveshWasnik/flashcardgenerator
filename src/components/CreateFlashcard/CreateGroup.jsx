import React, { useState } from "react";
import Input from "../Input";
import UploadPicture from "./UploadPicture";

function CreateGroup() {
  return (
    <div className="flex flex-col bg-white rounded py-8 px-4">
      <div className="w-full flex ">
        <Input label="Create Group*" required />
        <UploadPicture label="Upload Image" />
      </div>
      <div className="w-full py-2">
        <Input label="Add Description" isLongInput={true} />
      </div>
    </div>
  );
}

export default CreateGroup;
