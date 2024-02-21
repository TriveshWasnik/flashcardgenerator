import React from "react";
import Input from "../Input";
import UploadPicture from "./UploadPicture";

function CreateGroup({ setFieldValue }) {
  return (
    <div className="flex flex-col bg-white rounded py-8 px-4">
      <div className="w-full flex flex-col md:flex-row">
        <Input label="Create Group*" name="group.title" />

        <UploadPicture
          label="Upload Image"
          name="group.image"
          setFieldValue={setFieldValue}
          editDelete="No"
        />
      </div>
      <div className="w-full py-2">
        <Input
          label="Add Description*"
          isLongInput={true}
          name="group.description"
        />
      </div>
    </div>
  );
}

export default CreateGroup;
