import React from "react";

import ENBoyaYuzey from "../components/servicelayout/enboyayuzey";
import ENCncisleme from "../components/servicelayout/encncisleme";
import ENKaynaklimalat from "../components/servicelayout/enkaynaklimalat";
import ENLazerisleme from "../components/servicelayout/enlazerisleme";
import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ENServices = () => {
  return (
    <div>
    <ENHeader/>
    <div className="flex items-center justify-center flex-col h-full bg-whitesmoke gap-32 py-52">
      <div className="flex flex-col lg:flex-row w-11/12 gap-10 lg:gap-0">
        <div className="flex flex-col  gap-10">
          <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">Our Services</p>
          <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis modi perferendis asperiores rem dolor minima deleniti maxime aspernatur maiores nihil velit, quam veritatis doloribus
            obcaecati? Facilis, hic. Assumenda, incidunt non? At iste cumque debitis qui nostrum. Ex illum nisi quis quibusdam, obcaecati vel rem omnis magni sapiente minus itaque. Hic pariatur beatae
            officiis est harum architecto eum aut labore et!
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-5">
          <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
        </div>
      </div>

      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MACHINING</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">CNC Machining</p>
          </div>
          <div>
            <Link to={"cnc-machining"}>
              <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
                <span className="mr-3 sm:mr-10">View All</span>
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
        </div>
        <ENCncisleme />
      </div>

      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MACHINING</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Laser and Plasma Cutting</p>
          </div>
          <div>
            <Link to={"laser-plasma-cutting"}>
              <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
                <span className="mr-3 sm:mr-10">View All</span>
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
        </div>
        <ENLazerisleme />
      </div>

      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MACHINING</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Welding Manufacturing</p>
          </div>
          <div>
            <Link to={"welding-manufacturing"}>
              <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
                <span className="mr-3 sm:mr-10">View All</span>
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
        </div>
        <ENKaynaklimalat />
      </div>

      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MACHINING</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Paint and Surface Processes</p>
          </div>
          <div>
            <Link to={"paint-surface-processes"}>
              <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
                <span className="mr-3 sm:mr-10">View All</span>
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
        </div>
        <ENBoyaYuzey />
      </div>
    </div>
    <ENFooter/>
    </div>
  );
};

export default ENServices;
