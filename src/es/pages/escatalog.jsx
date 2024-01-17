import React from "react";

import ESCertificateCard from "../components/homelayout/esCertificateCard";
import ESHeader from "../components/layout/esHeader";
import ESFooter from "../components/layout/esFooter";

export default function ESCatalog() {
  const serviceItems = [
    {
      img: "/machines/cmx-70-u.webp",
      title: "DMG Mori CMX 70 U",
      description:
        "Su solución de mecanizado de 5 caras potente y flexible para mayor eficiencia y productividad.",
    },
    {
      img: "/machines/dmu-50.webp",
      title: "DMG Mori DMU 50",
      description:
        "Fresadora universal CNC con mesa giratoria basculante.",
    },

    {
      img: "/machines/dnm6700.webp",
      title: "Doosan DNM 6700",
      description:
        "Alta velocidad, alta rigidez e idoneidad para aplicaciones universales.",
    },

    {
      img: "/machines/dnm-5700.webp",
      title: "Doosan DNM 5700",
      description:
        "Alta velocidad, alta rigidez e idoneidad para aplicaciones universales.",

    },
    {
      img: "/machines/m1.png",
      title: "DMG Mori M1",
      description:
        "Nueva fresadora vertical de 3 ejes.",

    },
    {
      img: "/machines/LYNX-2100LY.webp",
      title: "Doosan Lynx 2100LY",
      description:
        "La serie Lynx 2100LY es un nuevo modelo con eje Y adicional en la serie Lynx 2100 y permite completar mecanizados complejos utilizando una sola configuración.",

    },
    {
      img: "/machines/goodway200.jpg",
      title: "Goodway GS-260MS",
      description:
        "Alta velocidad, alta rigidez e idoneidad para aplicaciones universales.",

    },
    {
      img: "/machines/dea.jpg",
      title: "DEA Global S CMM",
      description:
        "La máquina de medición por coordenadas (MMC) GLOBAL S ofrece eficiencia de medición personalizada basada en configuraciones adaptadas a su flujo de trabajo, volumen de producción, precisión, versatilidad y capacidades del departamento de producción.",
    },
  ];

  return (
    <>
    <div>
    <ESHeader/>
      <div className="flex flex-col lg:flex-row w-11/12 gap-10 my-20">
        <div className="flex flex-col justify-center items-center w-1/2 mx-20">
          <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">Nuestras Máquinas</p>
          <p className="text-justify leading-relaxed text-sm lg:text-base xl:text-lg">
          En Mecanizados MAF utilizamos para todos nuestros trabajos la maquinaria más puntera y vanguardista para conseguir así los mejores resultados posibles para todos nuestros clientes.
          <br/> <br/>
          Disponemos de la tecnología 5 ejes y de los tornos multi área más avanzados del sector que nos permiten el mecanizado de aluminio, acero, plástico y una gran variedad de materiales que ponemos a disposición de nuestro cliente.
          <br/> <br/>
          Para ello trabajamos solo con la maquinaria más innovadora y los centros de mecanizado más destacados.
          </p>
        </div> 

        <div className="flex flex-col items-center lg:items-end gap-5 w-1/2">
          <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
        </div>
      </div>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4 m-20">
        {serviceItems.map((sci, i) => (
          <ESCertificateCard key={i} sci={sci} />
          ))}
      </div>
    </div>
    <ESFooter/>
    </>
  );
}
