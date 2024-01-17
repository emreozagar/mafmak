import React from "react";
import { Link } from "react-router-dom";

import Homegallery from "../components/homelayout/homegallery.jsx";
import HomeCatalog from "../components/homelayout/homecatalog.jsx";
import Slider from "./components/slider.jsx";
import ServicesSection from "../components/homelayout/ServicesSection.jsx";
import { IoIosArrowForward } from "react-icons/io";
import CertificatesSection from "../components/homelayout/CertificatesSection.jsx";

import About from "../components/homelayout/About";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const Homepage = () => {

  return (
    <div>
      <Header/>
    <div className="flex items-center justify-center flex-col h-full bg-whitesmoke gap-32">
      <Slider /> {/*✅*/}
      <About />
      <Homegallery />
      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Sertifikalarımız</p>
          </div>
        </div>
        {/* <CertificatesSection /> */}
      </div>
      <HomeCatalog />
      <div className="flex flex-col justify-start w-11/12 px-2 sm:px-8 lg:w-full lg:px-10 2xl:px-20">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between mb-20">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Hizmetlerimiz</p>
          </div>
          <div>
            <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
              <span className="mr-3 sm:mr-10">
                <a href="/hizmetlerimiz">
                Tüm Hizmetlerimiz
                </a>
                </span>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <ServicesSection />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Homepage;
