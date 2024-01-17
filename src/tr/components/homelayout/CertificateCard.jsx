import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CertificateCard = ({ sci }) => {
  return (
    <div className="relative items-start transition-transform duration-300 justify-center w-full rounded-xl">
      <img className="w-full object-cover rounded-t-xl h-[30vw] lg:h-[22.5vw]" src={sci.img} alt="img" />
      <div className="flex h-20 justify-between items-center px-5 bg-white rounded-b-xl">
        <div className="py-5 w-full text-lg sm:text-xl"> {sci.title} </div>
        <Link to={sci.link}>
          <button className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md flex items-center justify-center w-[40px] h-[30px] sm:w-[50px] sm:h-[40px] lg:w-[40px] lg:h-[30px] xl:w-[50px] xl:h-[40px] 2xl:w-[60px] 2xl:h-[50px]">
            <IoIosArrowForward />
          </button>
        </Link>
      </div>
      <div className="p-5 w-full h-fit text-lg sm:text-xl bg-gray-200 rounded-b-xl"> {sci.description} </div>
    </div>
  );
};

export default CertificateCard;
