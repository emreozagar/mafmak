import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ESHomecard = ({ hci }) => {
  return (
    <div className="relative items-start transition-transform duration-300 justify-center border rounded-xl hover:-translate-y-10 w-80 sm:w-96 md:w-60 lg:w-80 xl:w-96 xl:m-2">
      <div className="">
        <img className="rounded-t-xl" src={hci.image} alt="img" />
        <div className="flex-col px-8 bg-white rounded-b-xl h-[450px]">
          <div className="py-5 text-xl md:text-lg xl:text-xl"> {hci.title} </div>
          <div className="pb-4 justify-center w-full text-sm leading-6 sm:text-base md:text-xs md:leading-5 lg:leading-normal lg:text-sm xl:text-base"> {hci.description} </div>
          <button className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md flex items-center justify-center absolute bottom-5 right-10 w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESHomecard;
