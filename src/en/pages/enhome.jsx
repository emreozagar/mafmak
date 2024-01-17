import React from "react";

import ENHomegallery from "../components/homelayout/enhomegallery.jsx";
import ENHomeCatalog from "../components/homelayout/enhomecatalog.jsx";
import ENSlider from "./components/slider.jsx";
import ENServicesSection from "../components/homelayout/enServicesSection.jsx";
import { IoIosArrowForward } from "react-icons/io";
import ENCertificatesSection from "../components/homelayout/enCertificatesSection.jsx";
import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

import ENAbout from "../components/homelayout/enAbout";

const ENHomepage = () => {

  return (
    <div>
    <ENHeader/>
    <div className="flex items-center justify-center flex-col h-full bg-whitesmoke gap-32">
      <ENSlider /> {/*✅*/}
      <ENAbout />
      <ENHomegallery />
      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MACHINING</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Certificates</p>
          </div>
        </div>
        {/* <CertificatesSection /> */}
      </div>
      <ENHomeCatalog />
      <div className="flex flex-col justify-start w-11/12 px-2 sm:px-8 lg:w-full lg:px-10 2xl:px-20">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between mb-20">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MACHINING</p>
            <p className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Services</p>
          </div>
          <div>
            <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
              <div className="mr-3 sm:mr-10">
                <a href="/en/services">
                All Services
                </a>
                </div>
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

export default ENHomepage;
