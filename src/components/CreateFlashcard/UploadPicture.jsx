import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function UploadPicture({
  label = "",
  className = "",
  name = "",
  setFieldValue,
  remove,
  index,
  values,
  editDelete = "Yes",
}) {
  const [img, setImg] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        //const imagePath = reader.result;
        // console.log("Image Path", imagePath);
        //console.log("File:", file);
        setImg(reader.result);
        setFieldValue(name, reader.result);
        //localStorage.setItem(name, JSON.stringify(imgFile));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleEdit(index, img = "") {
    const updatedTerm = {
      termTitle: values.terms[index].termTitle,
      termDefinition: values.terms[index].termDefinition,
      termImage: img,
    };

    const updatedTerms = [...values.terms];
    updatedTerms[index] = updatedTerm;
    setFieldValue("terms", updatedTerms);
    console.log(updatedTerms);
  }

  return !img ? (
    <Input
      type="file"
      label={label}
      name={name}
      accept="image/png, image/jpg, image/jpeg, image/gif"
      hidden
      onChange={handleImageChange}
      className={className}
    />
  ) : (
    img && (
      <>
        <div className="flex w-full">
          <div className="w-[180px] p-1 ml-4 md:ml-0 mt-2 md:mt-0 border rounded border-[#bbb] relative">
            <img src={img} alt="Uploaded" className="w-[100%]" />
          </div>
          {editDelete === "No" ? (
            ""
          ) : (
            <div className="flex flex-col px-4">
              <Button
                className="mt-5"
                bgColor="transparent"
                textColor="text-[#cc1313]"
                onClick={() => remove(index)}
              >
                <FaTrash />
              </Button>

              <Button
                className="mt-5"
                bgColor="transparent"
                textColor="text-[#4834d4]"
                onClick={() => handleEdit(index, img)}
              >
                <FaEdit />
              </Button>
            </div>
          )}
        </div>
      </>
    )
  );
}

export default UploadPicture;
