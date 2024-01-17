import React from "react";

import ESHomeServices from "./eshomeservices";

export default function ESServicesSection() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Mecanizado CNC",
      description:
        "El mecanizado CNC es un proceso de fabricación sustractivo que suele utilizar controles informáticos y máquinas herramienta para eliminar capas de material de una pieza en bruto (o pieza de trabajo) y producir una pieza personalizada.",
      link: "servicios/mecanizado-cnc",
    },
    {
      img: "/images/5axis3.jpg",
      title: "Corte por Láser & Plasma",
      description:
        "El corte con láser es una técnica que, a través de la energía térmica, es empleada para separar piezas de chapa metálica.La tecnología láser permite procesar multitud de materiales plásticos, textiles, orgánicos o metálicos.",
      link: "servicios/corte-laser-plasma",
    },

    {
      img: "/images/5axis4.jpg",
      title: "Soldadura",
      description:
        "La soldadura es un proceso de fabricación en el cual se unen dos materiales distintos, normalmente metales. Esto se logra a través de la coalescencia de varios metales en un cuerpo único, de tal manera que las piezas son soldadas derritiendo los metales y agregando un material de relleno derretido, el cual posee un punto de fusión menor al de la pieza a soldar.",
      link: "servicios/soldadura",
    },

    {
      img: "/images/flame.jpg",
      title: "Procesos de Pintura y Superficies",
      description:
        "Cumplimos con las expectativas de nuestros clientes en cuanto a servicios de esmerilado, arenado, recubrimiento, recubrimiento húmedo y en polvo para todo tipo de tratamientos superficiales.",
      link: "servicios/pintura-superficie",
    },
  ];

  return (
    <>
      <div className="z-10 mb-20 gap-5 items-center justify-center max-sm:flex max-sm:flex-col max-lg:grid sm:grid-cols-2 md:items-center md:justify-center lg:flex lg:justify-center lg:items-end xl:w-full 2xl:gap-[4vw]">
        {serviceItems.map((sci, i) => (
          <ESHomeServices key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
