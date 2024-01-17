import React from "react";
import ESCertificateCard from "../homelayout/esCertificateCard";

export default function ENKaynaklimalat() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Soldadura",
      description: "Brindamos servicios de soldadura con máquinas soldadoras a gas de varios amperios.",
      link: "soldadura/soldadura",
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
