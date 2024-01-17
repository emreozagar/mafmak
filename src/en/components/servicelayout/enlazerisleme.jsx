import React from "react";
import ENCertificateCard from "../homelayout/enCertificateCard";

export default function ENLazerisleme() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Cnc Laser Cutting",
      description: "2000×6000 30 mm'ye kadar lazer kesim kabiliyeti.",
      link: "laser-plasma-cutting/cnc-laser-cutting",
    },
    {
      img: "/images/5axis3.jpg",
      title: "Cnc Plasma Cutting",
      description:
        "3000x12000 Plazma ve oksijen kesim ile 200 mm’ye kadar kesim kabiliyeti.",
      link: "laser-plasma-cutting/cnc-plasma-cutting",
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

