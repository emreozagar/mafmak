import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HomeServices = ({ sci }) => {
  return (
    <div className="relative items-start transition-transform duration-300 justify-center border rounded-xl hover:-translate-y-10 w-72 sm:w-64 md:w-[20rem] lg:w-72 xl:w-80 2xl:w-96 ">
      <Link to={sci.link}>
      <div className="">
        <img className="w-96 h-56 object-cover rounded-t-xl" src={sci.img} alt="img" />
        <div className="flex-col bg-white rounded-b-xl h-[550px] px-5 sm:px-8 sm:h-[450px] md:h-[350px] lg:h-[475px] xl:h-[550px]">
          <div className="py-5 text-2xl sm:text-lg md:text-lg xl:text-xl text-center"> {sci.title} </div>
          <div className="pb-4 justify-center w-full leading-6 sm:leading-5 sm:text-xs md:text-xs md:leading-5 lg:leading-normal xl:text-sm 2xl:text-base text-justify"> {sci.description} </div>
          <button className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md flex items-center justify-center absolute bottom-5 right-10 w-12 h-12 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default HomeServices;
