import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavLinks from "./Navlinks";
import Idiom from "./Idiom";
import { CgMenuOreos } from "react-icons/cg";

// import {AiOutlineDown} from 'react-icons/ai'

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex sticky top-2 justify-around z-50">
      <div className="flex justify-around font-bold items-center rounded-md w-9/12 text-[#333333] bg-gradient-to-r from-[#8E9192] to-[#333333]">
        <div className="p-5 flex md:w-auto justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <CgMenuOreos />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center font-sans bg-red-50">
          <li>
            <Link to="/" className="py-6 px-3 inline-block transition duration-0 hover:duration-150 hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-[#04a5a5]">
              {t("homepage")}
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Idiom />
        </div>
        {/* mobile nav */}
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 pl-4 duration-500 ${open ? "left-0" : "left-[-200%]"}`}>
          <NavLinks />
          {/* <Idiom /> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
