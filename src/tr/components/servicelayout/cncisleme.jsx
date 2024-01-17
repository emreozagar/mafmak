import React, { useRef, useState } from "react";
import CertificateCard from "../homelayout/CertificateCard";

export default function Cncisleme() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "CNC Frezeleme",
      description: "3-4-5 eksen frezeleme kabiliyeti",
      link: "cnc-isleme/cnc-frezeleme",
    },

    {
      img: "/images/5axis4.jpg",
      title: "CNC Tornalama",
      description: "Ø1 mm çaptan Ø2100×Z1700 mm çapa kadar 3 ve 2 eksen CNC tornalama kabiliyeti",
      link: "cnc-isleme/cnc-tornalama",
    },

    {
      img: "/images/flame.jpg",
      title: "Taşlama",
      description: "Geleneksel yüzey taşlama.",
      link: "cnc-isleme/taslama",
    },
  ];

  return (
    <>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4">
        {serviceItems.map((sci, i) => (
          <CertificateCard key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
