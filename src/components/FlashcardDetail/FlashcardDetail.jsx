import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button";
import { FiDownload, FiPrinter } from "react-icons/fi";
import { LiaArrowLeftSolid, LiaShareSolid } from "react-icons/lia";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useReactToPrint } from "react-to-print";
import ShareDialogBox from "./ShareDialogBox";

function FlashcardDetail() {
  const { title } = useParams();

  const items = JSON.parse(localStorage.getItem("flashcards"));
  let res = items?.filter((item) => item?.group?.title === title)[0];

  const [term, setTerm] = useState({ id: 1, ...res.terms[0] });
  const { termDefinition, termImage } = term;
  let { id } = term;
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const pdfRef = useRef();

  /* handle the print Page */
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });

  /* Toggle the share dialog box when clicking Share Button */
  const [showShareDialog, setShowShareDialog] = useState(false);
  function shareDialogBox() {
    setShowShareDialog((prev) => !prev);
  }
  console.log(res?.terms?.length);
  return (
    <div className="flex flex-col px-4">
      <div className="flex gap-5 ">
        <div className="mt-2">
          {/* Navigate to list of all flashcard Page */}
          <Button
            className="text-[22px]"
            bgColor="bg-transparent"
            textColor="text-[#000]"
            onClick={() => navigate(`/my-flashcard`)}
          >
            <LiaArrowLeftSolid />
          </Button>
        </div>
        <div>
          {/* Display the title and Discription of Flashcard */}
          <div className="font-bold text-[22px]">{res?.group?.title}</div>
          <div className="mt-3 text-[#555]">{res?.group?.description}</div>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-between gap-5 mt-10">
        <div className="bg-white w-full md:w-1/5 py-3 px-5">
          <p className="text-[#777] font-bold mb-4 px-5 pb-2 border-b-2 border-[#777]">
            Flashcards
          </p>

          {
            /* set and Highlight the active term in Red text color */
            res?.terms?.map((trm, idx) => (
              <p
                className={`py-[8px] font-bold cursor-pointer ${
                  active && idx + 1 === id ? "text-[#cc1313]" : ""
                } `}
                key={idx}
                onClick={() => {
                  setTerm({ id: ++idx, ...trm });
                  setActive(true);
                }}
              >
                {trm?.termTitle}
              </p>
            ))
          }
        </div>
        <div className=" w-full md:w-3/5">
          {/* Current Flashcard all Term Detail Information show when clicking term */}
          <div className="bg-white p-5 md:p-10 flex flex-col md:flex-row gap-8 w-full">
            {!termImage ? (
              ""
            ) : (
              <img
                className="w-full md:w-[55%] h-[300px]"
                src={termImage}
                alt=""
              />
            )}
            <p className="w-full md:w-[45%] text-[#555]">
              {termDefinition && termDefinition.length > 400
                ? termDefinition.slice(0, 390) + "..."
                : termDefinition}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-1 md:flex-col w-full md:w-1/5">
          <>
            {/* To Open Share Dialog Box when click Share Button */}
            <Button
              className="flex items-center gap-2 px-4 py-2 mt-0 rounded w-full md:w-[160px] "
              bgColor="bg-white"
              textColor="text-[#777]"
              setShowShareDialog={setShowShareDialog}
              showShareDialog={showShareDialog}
              onClick={() => {
                shareDialogBox();
              }}
            >
              <LiaShareSolid />
              Share
            </Button>
            {showShareDialog && <ShareDialogBox />}
          </>

          {/* Click Print Button, To Opened the Print Dialog Box with Current Flashcard Content */}
          <Button
            className="flex items-center  gap-2 px-4 py-2 mt-0 md:mt-5 rounded w-full md:w-[160px]  "
            bgColor="bg-white"
            textColor="text-[#777]"
            onClick={handlePrint}
          >
            <FiPrinter />
            Print
          </Button>
          <div style={{ display: "none" }}>
            <PDFFile ref={pdfRef} res={res} printpdf={true} />
          </div>

          {/* Downloaded PDF File when you click on Download Button */}
          <PDFDownloadLink
            document={<PDFFile res={res} />}
            fileName={`Flashcard_${res.group.title}`}
          >
            <Button
              className="flex items-center  gap-2 px-4 py-2 mt-0 md:mt-5 rounded w-full md:w-[160px]  "
              bgColor="bg-white"
              textColor="text-[#777]"
            >
              <FiDownload />
              Download
            </Button>
          </PDFDownloadLink>
        </div>
      </div>
      {/* Next or Previous flashcard terms show when clicking right or left Arrow Icon */}
      <div>
        <p className="flex justify-center items-center py-10 gap-10">
          <SlArrowLeft
            className="cursor-pointer"
            onClick={() => {
              id = id <= 1 ? id : (id -= 1);
              setTerm({
                id: id,
                ...res?.terms[--id],
              });
            }}
          />
          {id}/{res.terms.length}
          <SlArrowRight
            className="cursor-pointer"
            onClick={() => {
              id = id >= res?.terms?.length ? id : (id += 1);
              setTerm({
                id: id,
                ...res?.terms[--id],
              });
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default FlashcardDetail;
