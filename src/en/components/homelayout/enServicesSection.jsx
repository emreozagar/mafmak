import React from "react";

import ENHomeServices from "./enhomeservices";

export default function enServicesSection() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "CNC Machining",
      description:
        "CNC machining definition is that it is a subtractive manufacturing process that typically employs computerized controls and machine tools to remove layers of material from a stock piece—known as the blank or workpiece—and produces a custom-designed part.",
      link: "services/cnc-machining",
    },
    {
      img: "/images/5axis3.jpg",
      title: "CNC Laser & CNC Plasma Cutting",
      description:
        "Laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. Laser cutting works by directing the output of a high-power laser most commonly through optics.",
      link: "services/laser-plasma-cutting",
    },

    {
      img: "/images/5axis4.jpg",
      title: "Welding Manufacturing",
      description:
        "Welding is a process used to join two or more materials by melting and welding them together. Welding can be used to join metals as well as materials such as plastics, glass and ceramics.Welded production enables the production of high strength and durable parts.",
      link: "services/welding-manufacturing",
    },

    {
      img: "/images/flame.jpg",
      title: "Paint and Surface Processes",
      description:
        "We meet our customers' expectations in terms of grinding, sandblasting, coating, wet and powder coating services for all kinds of surface treatments.",
      link: "services/paint-surface-processes",
    },
  ];

  return (
    <>
      <div className="z-10 mb-20 gap-5 items-center justify-center max-sm:flex max-sm:flex-col max-lg:grid sm:grid-cols-2 md:items-center md:justify-center lg:flex lg:justify-center lg:items-end xl:w-full 2xl:gap-[4vw]">
        {serviceItems.map((sci, i) => (
          <ENHomeServices key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
