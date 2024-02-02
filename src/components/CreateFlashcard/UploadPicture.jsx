import React, { useState } from "react";
import Input from "../Input";

function UploadPicture({ label = "", className = "" }) {
  const [img, setImg] = useState(null);
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return !img ? (
    <Input
      type="file"
      label={label}
      accept="image/png, image/jpg, image/jpeg, image/gif"
      hidden
      onChange={handleImageChange}
      className={className}
    />
  ) : (
    img && (
      <div className="w-[160px] p-1 border rounded border-[#bbb]">
        <img src={img} alt="Uploaded" className="w-[100%]" />
      </div>
    )
  );
}

export default UploadPicture;
