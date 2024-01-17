import React, { useRef, useState } from "react";
import CertificateCard from "../homelayout/CertificateCard";

export default function Lazerisleme() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Cnc Lazer Kesim",
      description: "2000×6000 30 mm'ye kadar lazer kesim kabiliyeti.",
      link: "lazer-plazma-kesim/cnc-lazer-kesim",
    },
    {
      img: "/images/5axis3.jpg",
      title: "Cnc Plazma Kesim",
      description:
        "3000x12000 Plazma ve oksijen kesim ile 200 mm’ye kadar kesim kabiliyeti.",
      link: "lazer-plazma-kesim/cnc-plazma-kesim",
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
