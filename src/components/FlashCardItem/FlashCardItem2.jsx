import React from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function FlashCardItem2({
  groupTitle = "",
  groupImageUrl = "",
  groupDescription = "",
  totalTerms = "",
}) {
  const navigate = useNavigate();
  /* Get all flashcard information from localStorage */
  const flashcards = JSON.parse(localStorage.getItem("flashcards"));
  return (
    <div className="flex flex-col bg-white px-8 py-10 mx-3 mb-5 w-auto md:w-[400px]">
      {/* Show the information of Flashcard: image, title, description and also with Term Information  */}
      <div className="flex items-center">
        <div className="bg-[#edf8f8] w-[60px] md:w-[80px] md:h-[80px] h-[60px] rounded-[50%]">
          <img
            src={
              groupImageUrl
                ? groupImageUrl
                : "https://cdn.pixabay.com/photo/2020/04/19/08/17/watercolor-5062356_640.jpg"
            }
            alt=""
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[50%]"
          />
        </div>
        <div className="flex flex-col pl-5">
          <div className="font-bold text-[22px]">{groupTitle}</div>
          <div className="">{totalTerms} Cards</div>
        </div>
      </div>
      <div className="mt-5">
        {groupDescription && groupDescription.length > 120
          ? groupDescription.slice(0, 120) + "..."
          : groupDescription}
      </div>

      {/* Click the button to Navigate Flashcard Detailed Page */}
      <Button
        className="inline-flex items-center py-2 mt-5 rounded w-[160px] "
        bgColor="bg-transparent"
        textColor="text-[#cc1313]"
        onClick={() => {
          const res = flashcards.filter((comtitle) => {
            return comtitle?.group?.title === groupTitle;
          });
          navigate(`/flash-card-detail/${res[0].group?.title}`);
        }}
      >
        View Cards <FaArrowRight className="ml-5" />
      </Button>
    </div>
  );
}

export default FlashCardItem2;
