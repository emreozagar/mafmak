import React from "react";
import ENCertificateCard from "../homelayout/enCertificateCard";

export default function ENCncisleme() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "CNC Milling",
      description: "3-4-5 eksen frezeleme kabiliyeti",
      link: "/cnc-machining/cnc-milling",
    },

    {
      img: "/images/5axis4.jpg",
      title: "CNC Turning",
      description: "Ø1 mm çaptan Ø2100×Z1700 mm çapa kadar 3 ve 2 eksen CNC tornalama kabiliyeti",
      link: "/cnc-machining/cnc-turning",
    },

    {
      img: "/images/flame.jpg",
      title: "CNC Grinding",
      description: "Geleneksel yüzey taşlama.",
      link: "/cnc-machining/cnc-grinding",
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
