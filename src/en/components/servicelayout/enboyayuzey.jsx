import React from "react";
import ENCertificateCard from "../homelayout/enCertificateCard";

export default function ENBoyaYuzey() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Paint and Surface Processes",
      description: "We meet our customers' expectations in terms of grinding, sandblasting, coating, wet and powder coating services for all kinds of surface treatments.",
      link: "point-surface-processes/paint-surface-processes",
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
