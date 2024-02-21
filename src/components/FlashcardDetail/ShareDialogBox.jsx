import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";
import { MdClose, MdOutlineShare } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function ShareDialogBox() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const link = "https://triveshwasnik.github.io/myportfolio/";
  const refLink = useRef(null);

  /* Copy To Data from Link Input Box, highlighted the data when click on clipboard icon button and pasted/opened in another window in browser */
  function handleCopyToClipboard() {
    (async function () {
      try {
        await window.navigator.clipboard.writeText(link);
        refLink.current.select();
      } catch (error) {
        console.log("Unable to copy text to clipboard", error);
      }
    })();
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[40%] sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start sm:justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-bold leading-6 text-[#111]"
                    >
                      Share
                    </Dialog.Title>

                    <Button
                      bgColor="bg-transparent"
                      textColor="text-[#333]"
                      className="font-bold text-[20px] absolute top-2 right-2"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      <MdClose />
                    </Button>
                  </div>
                  <div className="my-3 flex justify-between items-center gap-3 ">
                    <div className="flex  text-[16px] border border-dotted rounded-md border-[#777] py-1 px-2 w-full">
                      <label className="text-[#777] font-semibold ">
                        Link:
                      </label>
                      <input
                        type="text"
                        className="w-full text-[#111] text-[14px] font-bold ml-3 outline-none"
                        ref={refLink}
                        value={link}
                        readOnly
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#777]"
                        className="font-bold  text-[20px]"
                        onClick={() => {
                          handleCopyToClipboard();
                        }}
                      >
                        <HiOutlineClipboardDocumentCheck />
                      </Button>
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#777]"
                        className="font-bold  text-[20px]"
                      >
                        <MdOutlineShare />
                      </Button>
                    </div>
                  </div>
                  <div className="py-5 flex flex-row gap-2  sm:flex sm:items-start sm:justify-between">
                    <div className="flex items-center p-2 rounded-xl bg-[#eee]">
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#3b5998]"
                        className="font-bold text-[24px]"
                      >
                        <FaFacebookSquare />
                      </Button>
                    </div>
                    <div className="flex items-center p-2 rounded-xl bg-[#eee]">
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#0E76A8]"
                        className="font-bold  text-[24px]"
                      >
                        <FaLinkedin />
                      </Button>
                    </div>
                    <div className="flex items-center p-2 rounded-xl bg-[#eee]">
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#25d366]"
                        className="font-bold  text-[24px]"
                      >
                        <FaWhatsappSquare />
                      </Button>
                    </div>
                    <div className="flex items-center p-2 rounded-xl bg-[#eee]">
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#1DA1F2]"
                        className="font-bold  text-[24px]"
                      >
                        <FaTwitter />
                      </Button>
                    </div>
                    <div className="flex items-center p-2 rounded-xl bg-[#eee]">
                      <Button
                        bgColor="bg-transparent"
                        textColor="text-[#777]"
                        className="font-bold  text-[24px]"
                      >
                        <FaEnvelope />
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
