import React from "react";
import ESCertificateCard from "../homelayout/esCertificateCard";

export default function ESBoyaYuzey() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Procesos de Pintura y Superficies",
      description: "Cumplimos con las expectativas de nuestros clientes en cuanto a servicios de esmerilado, arenado, recubrimiento, recubrimiento húmedo y en polvo para todo tipo de tratamientos superficiales.",
      link: "pintura-superficie/pintura-superficie",
    },
  ];

  return (
    <>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4">
        {serviceItems.map((sci, i) => (
          <ESCertificateCard key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
