import React, { useRef, useState } from "react";
import CertificateCard from "../homelayout/CertificateCard";

export default function Kaynaklimalat() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Kaynaklı İmalat",
      description: "Üretimimizde muhtelif amperlerde gazaltı kaynak makinaları ile kaynak hizmeti vermekteyiz.",
      link: "kaynakli-imalat/kaynakli-imalat",
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
