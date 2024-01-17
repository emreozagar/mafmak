import React, { useState } from "react";
import { Link } from "react-router-dom";

import ESNavLinks from "./esNavlinks";
import ESIdiom from "./esIdiom";
import { TbMenuDeep } from "react-icons/tb";
import { GoX } from "react-icons/go";

const ESHeader = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex sticky top-0 z-50">
      <div className="flex justify-between px-10 lg:px-0 lg:justify-around font-bold items-center w-full text-[#333333] bg-white">
        <div className="p-5 flex md:w-auto justify-between">
          <Link to="/">
            <img src="/images/PNG-Format.png" alt="logo" className="cursor-pointer h-8 w-20 sm:h-7 sm:w-16 lg:h-8 lg:w-20 xl:h-10 xl:w-24" />
          </Link>
        </div>
        <ul className="lg:flex hidden uppercase items-center gap-11 font-sans ">
          <ESNavLinks setOpen={setOpen} />
        </ul>
        <div className="md:block hidden">
          <ESIdiom />
        </div>
        <ul
          className={`
            lg:hidden bg-white absolute w-full h-full bottom-0 pl-4 flex items-center justify-between duration-500 ${open ? "left-0" : "left-[-1000%]"}
            `}
        >
          <ESNavLinks isMobile={open} setOpen={setOpen} />
        </ul>
        <div className="p-10 z-20 block lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? <TbMenuDeep size={24} /> : <GoX size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default ESHeader;
