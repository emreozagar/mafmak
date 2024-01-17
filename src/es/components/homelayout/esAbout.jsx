import React from "react";

const ESAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 gap-10 lg:gap-0">
      <div className="flex flex-col justify-center gap-10 items-center">
        <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">¿Quiénes Somos?</p>
        <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">
        Maf Makina Mühendislik Limited Şirketi fue fundada en Ankara en el primer trimestre de 2021 por los fundadores de la marca Özenirler Hidrolik, que es una marca registrada, con la visión del empleo y basada en el compromiso con la gestión de calidad global en el campo del mecanizado. <br /><br />
        Su objetivo es reflejar los aproximadamente cuarenta y cinco años de experiencia en mecanizado, el principio de trabajo orientado al cliente y la calidad del producto de la marca Özenirler Hidrolik, que se remonta a 1973, a Maf Makina y llevarlo aún más lejos. 
        Nuestra misión más importante es convertirla en una marca en la que todo individuo quiera trabajar, priorizando la calidad de maquinaria y equipos, la buena gestión del sistema y los valores humanos.
        </p>
        <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md cursor-pointer w-32 px-10 py-5 flex items-center h-9 sm:h-11 xl:h-13">
          <a href="/en/mafmakina">
          Detalles
          </a>
          </div>
      </div>

      <div className="flex flex-col items-center lg:items-end gap-5">
        <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
      </div>
    </div>
  );
};

export default ESAbout;
