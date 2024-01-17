import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 gap-10 lg:gap-0">
      <div className="flex flex-col justify-center gap-10 items-center">
        <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">Hakkımızda</p>
        <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">
          Maf Makina Mühendislik Limited Şirketi, tescilli bir marka olan Özenirler Hidrolik markasının kurucuları tarafından, istihdam vizyonu ile, talaşlı imalat alanında global kalite yönetimlerine
          bağlılığı esas alarak Ankara’da 2021 yılının ilk çeyreğinde kurulmuştur. <br /> <br />
          Kuruluşu 1973 yılına dayanan Özenirler Hidrolik markasının, yaklaşık kırk beş yıllık talaşlı imalat tecrübelerini, müşteri odaklı çalışma prensibini ve ürün kalitesini, Maf Makina'ya
          yansıtmanın yanında geliştirerek daha da ileriye götürmek amaçlanmıştır. Makine ve teçhizat kalitesini, sistemi iyi yönetmek ve insani değerleri ön planda tutarak, her bireyin çalışmak
          istediği bir marka haline getirmek yüklendiğimiz en önemli misyondur.
        </p>
        <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md cursor-pointer w-32 px-10 py-5 flex items-center h-9 sm:h-11 xl:h-13">
          <a href="/mafmakina">
          Detay
          </a>
          </div>
      </div>

      <div className="flex flex-col items-center lg:items-end gap-5">
        <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
      </div>
    </div>
  );
};

export default About;
