import React from "react";
import ENCertificateCard from "../homelayout/enCertificateCard";

export default function ENKaynaklimalat() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Welding Manufacturing",
      description: "We provide welding services with gas welding machines of various amperes.",
      link: "welding-manufacturing/welding-manufacturing",
    },
  ];

  return (
    <>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4">
        {serviceItems.map((sci, i) => (
          <ENCertificateCard key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
