import React, { useState } from "react";
import FlashCardItem1 from "../components/FlashCardItem/FlashCardItem1";
import FlashCardItem2 from "../components/FlashCardItem/FlashCardItem2";
import Button from "../components/Button";

function MyFlashcard() {
  /* Fetch the all flashcards from Local Storage */
  const items = JSON.parse(localStorage.getItem("flashcards"));

  /* show 6 flashcard on Page */
  const [length, setLength] = useState(6);
  return (
    <div className="max-w-7xl mx-auto my-20">
      {!items ? (
        <p className="text-center text-[24px] font-bold ">No Cards Found</p>
      ) : (
        <>
          <div className="flex flex-wrap bg-transparent ">
            {
              /* Show maximum 6 Flashcard on Page */
              items?.map((item, idx) =>
                idx < length ? (
                  idx < 3 ? (
                    <FlashCardItem1
                      key={idx}
                      groupTitle={item?.group?.title}
                      groupImageUrl={item?.group?.image}
                      groupDescription={item?.group?.description}
                      totalTerms={item?.terms?.length}
                    />
                  ) : (
                    <FlashCardItem2
                      key={idx}
                      groupTitle={item?.group?.title}
                      groupImageUrl={item?.group?.image}
                      groupDescription={item?.group?.description}
                      totalTerms={item?.terms?.length}
                    />
                  )
                ) : (
                  ""
                )
              )
            }
          </div>
        </>
      )}
      {/* Click on See All Button all Flashcards are shown */}
      <Button
        className={`mt-8 mr-[20px] ml-auto ${
          length === items?.length || length > items?.length
            ? "hidden"
            : "block"
        }`}
        bgColor="bg-transparent"
        textColor="text-[#cc1313]"
        onClick={() => setLength(items?.length)}
      >
        {!items || length > 6 ? "" : "See All"}
      </Button>
    </div>
  );
}

export default MyFlashcard;
