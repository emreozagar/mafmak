import React from "react";
import ESCertificateCard from "../homelayout/esCertificateCard";

export default function ESCncisleme() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Fresado CNC",
      description: "3-4-5 eksen frezeleme kabiliyeti",
      link: "/mecanizado-cnc/fresado-cnc",
    },

    {
      img: "/images/5axis4.jpg",
      title: "Torneado CNC",
      description: "Ø1 mm çaptan Ø2100×Z1700 mm çapa kadar 3 ve 2 eksen CNC tornalama kabiliyeti",
      link: "/mecanizado-cnc/torneado-cnc",
    },

    {
      img: "/images/flame.jpg",
      title: "Rectificado CNC",
      description: "Geleneksel yüzey taşlama.",
      link: "/mecanizado-cnc/rectificado-cnc",
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
