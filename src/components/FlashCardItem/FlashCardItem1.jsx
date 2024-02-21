import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function FlashCardItem1({
  groupTitle,
  groupImageUrl,
  groupDescription,
  totalTerms,
}) {
  const navigate = useNavigate();
  /* Get all flashcard information from localStorage */
  const flashcards = JSON.parse(localStorage.getItem("flashcards"));

  return (
    <div className="flex flex-col items-center text-center bg-white mx-3 px-8 py-10 mb-[60px] md:mb-5 relative w-auto md:w-[400px]">
      {/* Show the information of Flashcard: image, title, description and also with Term Information  */}
      <div className="absolute top-[-10%] left-[50% - 40px] bg-[#edf8f8] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[50%] ">
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
      <div className="py-5 font-bold text-[18px] md:text-[22px]">
        {groupTitle}
      </div>
      <div>
        {groupDescription && groupDescription.length > 120
          ? groupDescription.slice(0, 120) + "..."
          : groupDescription}
      </div>
      <div className="mt-5">{totalTerms} Cards</div>
      {/* Click the button to Navigate Flashcard Detailed Page */}
      <Button
        className="px-4 py-2 mt-5 rounded w-[160px] border-2  border-[#cc1313]"
        bgColor="bg-transparent"
        textColor="text-[#cc1313]"
        onClick={() => {
          const res = flashcards.filter((comtitle) => {
            return comtitle?.group?.title === groupTitle;
          });
          navigate(`/flash-card-detail/${res[0].group?.title}`);
        }}
      >
        View Cards
      </Button>
    </div>
  );
}

export default FlashCardItem1;
