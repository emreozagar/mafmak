import React from "react";
import ESCertificateCard from "../homelayout/esCertificateCard";

export default function ESLazerisleme() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Corte Por Láser",
      description: "2000×6000 30 mm'ye kadar lazer kesim kabiliyeti.",
      link: "corte-laser-plasma/corte-laser",
    },
    {
      img: "/images/5axis3.jpg",
      title: "Corte Por Plasma",
      description:
        "3000x12000 Plazma ve oksijen kesim ile 200 mm’ye kadar kesim kabiliyeti.",
      link: "corte-laser-plasma/corte-plasma",
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

