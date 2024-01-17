import React from "react";

import { VscTools } from "react-icons/vsc";
import { PiLightbulbLight } from "react-icons/pi";
import { PiHandHeartThin } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import ESServicesSection from "../components/homelayout/esServicesSection";
import ESHeader from "../components/layout/esHeader";
import ESFooter from "../components/layout/esFooter";


const ESAboutus = () => {


  return (
    <div>
      <ESHeader/>
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row w-11/12 gap-10 my-20">
        <div className="flex flex-col justify-center gap-10 items-center">
          <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">About Us</p>
          <p className="text-justify leading-relaxed text-sm lg:text-base xl:text-lg">
          Maf Makina Mühendislik Limited Şirketi fue fundada en Ankara en el primer trimestre de 2021 por los fundadores de la marca Özenirler Hidrolik, que es una marca registrada, con la visión del empleo y basada en el compromiso con la gestión de calidad global en el campo del mecanizado. <br /><br />
          Su objetivo es reflejar los aproximadamente cuarenta y cinco años de experiencia en mecanizado, el principio de trabajo orientado al cliente y la calidad del producto de la marca Özenirler Hidrolik, que se remonta a 1973, a Maf Makina y llevarlo aún más lejos. 
          Nuestra misión más importante es convertirla en una marca en la que todo individuo quiera trabajar, priorizando la calidad de maquinaria y equipos, la buena gestión del sistema y los valores humanos.
       </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-5">
          <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
        </div>
      </div>

      <div className="w-full flex my-20 flex-row bg-whitesmoke /20 h-12 justify-around items-center">
      <a href="/es/"><img className="h-8 sm:h-10 cursor-pointer contrast-0 hover:contrast-100" src="/images/PNG-Format.png" alt="img" /></a> 
      <a href="https://www.ozenirler.com.tr/"><img className="h-8 sm:h-10 cursor-pointer contrast-0 hover:contrast-100" src="https://ozenirler.com.tr/wp-content/uploads/ozenirler-logo.png" alt="img" /></a> 
      </div>

      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-9/12 mb-20">
        <h1 className="align-middle p-10 font-extralight text-center text-4xl sm:text-5xl lg:h-[480px] lg:text-left lg:w-1/3 lg:text-4xl xl:text-5xl 2xl:text-6xl">
          <br /> <br />
          Política de Calidad
        </h1>
        <div className="grid grid-cols-2  my-8 gap-8 lg:w-2/3">
          <div className="text-center flex flex-col justify-center items-center ">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <VscTools />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-full sm:w-8/12 md:w-7/12 lg:w-6/12 text-center">Lo antes posible con el menor desperdicio y costo</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <PiLightbulbLight />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12">Un ambiente de trabajo limpio, ordenado y seguro</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <PiHandHeartThin />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12">Amor mutuo, respeto, desarrollo continuo y educación</p>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-[#04a5a5] ">
              <BiSupport />
            </div>
            <p className="text-sm sm:text-base lg:text-sm xl:text-base w-full sm:w-8/12 md:w-6/12 lg:w-5/12">La confianza que brindamos con nuestro moderno enfoque de gestión</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start w-11/12 px-2 sm:px-8 lg:w-full lg:px-10 2xl:px-20">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between mb-20">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Nuestros Servicios</p>
          </div>
          <div>
            <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary flex flex-row items-center transition-all rounded-md cursor-pointer w-full px-3 py-5 h-7 text-sm mt-3 sm:px-5 sm:text-xs sm:h-9 md:text-sm md:h-10 lg:text-base lg:h-12 lg:px-6">
              <a href="/en/services">
                <div className="mr-3 sm:mr-10">Todos los servicios</div>
              </a>
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

export default ESAboutus;
