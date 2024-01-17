import React from "react";

import { VscTools } from "react-icons/vsc";
import { PiLightbulbLight } from "react-icons/pi";
import { PiHandHeartThin } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import ENServicesSection from "../components/homelayout/enServicesSection";
import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

const ENAboutus = () => {


  return (
    <div>
    <ENHeader/>
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row w-11/12 gap-10 my-20">
        <div className="flex flex-col justify-center gap-10 items-center">
          <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">About Us</p>
          <p className="text-justify leading-relaxed text-sm lg:text-base xl:text-lg">
          Maf Machining & Engineering Company LLC was established in Ankara in the first quarter of 2021 by the founders of the Özenirler Hidrolik brand, 
          which is a registered trademark, with the vision of employment and based on commitment to global quality management in the field of machining. <br /> <br />
          It is aimed to reflect the approximately forty-five years of machining experience, customer-oriented working principle and product quality of the Özenirler Hidrolik brand, 
          which dates back to 1973, to Maf Machining and to take it even further. Our most important mission is to make it a brand that every individual wants to work for, 
          by prioritizing the quality of machinery and equipment, managing the system well and human values.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-5">
          <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
        </div>
      </div>

      <div className="w-full flex my-20 flex-row bg-whitesmoke /20 h-12 justify-around items-center">
        <a href="/"><img className="h-8 sm:h-10 cursor-pointer contrast-0 hover:contrast-100" src="/images/PNG-Format.png" alt="img" /></a> 
        <a href="https://www.ozenirler.com.tr/"><img className="h-8 sm:h-10 cursor-pointer contrast-0 hover:contrast-100" src="https://ozenirler.com.tr/wp-content/uploads/ozenirler-logo.png" alt="img" /></a> 
      </div>

      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-9/12 mb-20">
        <h1 className="align-middle p-10 font-extralight text-center text-4xl sm:text-5xl lg:h-[480px] lg:text-left lg:w-1/3 lg:text-4xl xl:text-5xl 2xl:text-6xl">
          <br /> <br />
          Quality Policy
        </h1>
        <div className="grid grid-cols-2  my-8 gap-8 lg:w-2/3">
          <div className="text-center flex flex-col justify-center items-center ">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <VscTools />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-full sm:w-8/12 md:w-7/12 lg:w-6/12 text-center">As soon as possible with the lowest wastage and cost</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <PiLightbulbLight />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12">A clean, orderly and safe working environment</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <PiHandHeartThin />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12">Mutual love, respect, continuous development and education</p>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <BiSupport />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-full sm:w-8/12 md:w-6/12 lg:w-5/12">The trust we provide with our modern management approach</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start w-11/12 px-2 sm:px-8 lg:w-full lg:px-10 2xl:px-20">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between mb-20">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Our Services</p>
          </div>
          <div>
            <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex flex-row items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
              <a href="/en/services">
                <div className="mr-3 sm:mr-10">All Services</div>
              </a>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <ENServicesSection />
      </div>
    </div>
    <ENFooter/>
    </div>
  );
};

export default ENAboutus;
