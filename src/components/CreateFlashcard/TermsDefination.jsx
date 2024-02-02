import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import UploadPicture from "./UploadPicture";
import TermRow from "./TermRow";

function TermsDefination() {
  const [component, setComponent] = useState([]);
  let [count, setCount] = useState(1);

  function handleAddComponent() {
    setCount(++count);
    setComponent([...component, <TermRow count={count} />]);
  }
  return (
    <div className="flex  flex-col bg-white rounded py-8 px-4">
      <TermRow count={1} />
      {component}
      <div className="">
        <Button
          className="mt-5"
          bgColor="transparent"
          textColor="text-[#4834d4]"
          onClick={handleAddComponent}
        >
          <span className="font-bold text-xl">+</span> Add More
        </Button>
      </div>
    </div>
  );
}

export default TermsDefination;
