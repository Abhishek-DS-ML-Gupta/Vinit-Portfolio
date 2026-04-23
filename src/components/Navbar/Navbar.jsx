import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import AnimateBtn from "../Buttons/AnimateBtn";
import { CurvedMenu } from "./CurvedMenu";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsActive(!isActive)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-10 p-1 flex items-center justify-end gap-2 bg-[#f4efe7] rounded-4xl z-[150] cursor-pointer group transition-all duration-500 shadow-lg"
      >
        <div>
          <div className="pl-4 text-[#2a2725]">
            <AnimateBtn btnName={isActive ? "Close" : "Menu"} />
          </div>
        </div>
        <div className="bg-[#2a2725] rounded-full p-2">
          {isActive ? (
            <IoMdClose className="text-[#b1a696] transition-transform duration-500 group-hover:rotate-[180deg]" />
          ) : (
            <IoMdMenu className="text-[#b1a696] transition-transform duration-500 group-hover:rotate-[360deg]" />
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <CurvedMenu setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
