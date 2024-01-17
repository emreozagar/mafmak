import React from "react";

import ESHomegallery from "../components/homelayout/eshomegallery.jsx";
import ESHomeCatalog from "../components/homelayout/eshomecatalog.jsx";
import ESSlider from "./components/slider.jsx";
import ESServicesSection from "../components/homelayout/esServicesSection.jsx";
import { IoIosArrowForward } from "react-icons/io";
import ESCertificatesSection from "../components/homelayout/esCertificatesSection.jsx";

import ESAbout from "../components/homelayout/esAbout";
import ESHeader from "../components/layout/esHeader.jsx";
import ESFooter from "../components/layout/esFooter.jsx";

const ESHomepage = () => {

  return (
    <div>
      <ESHeader/>
    <div className="flex items-center justify-center flex-col h-full bg-whitesmoke gap-32">
      <ESSlider /> {/*✅*/}
      <ESAbout />
      <ESHomegallery />
      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Certificados</p>
          </div>
        </div>
        {/* <CertificatesSection /> */}
      </div>
      <ESHomeCatalog />
      <div className="flex flex-col justify-start w-11/12 px-2 sm:px-8 lg:w-full lg:px-10 2xl:px-20">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between mb-20">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Servicios</p>
          </div>
          <div>
            <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
              <div className="mr-3 sm:mr-10">
                <a href="/en/services">
                Todos los Servicios
                </a>
                </div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <ESServicesSection />
      </div>
    </div>
    <ESFooter/>
    </div>
  );
};

export default ESHomepage;
