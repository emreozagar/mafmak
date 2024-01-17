import React from "react";

import ENCertificateCard from "../components/homelayout/enCertificateCard";
import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

export default function ENCatalog() {
  const serviceItems = [
    {
      img: "/machines/cmx-70-u.webp",
      title: "DMG Mori CMX 70 U",
      description:
        "Powerful and flexible 5-sided machining solution – on with direct measuring system in standard.",
    },
    {
      img: "/machines/dmu-50.webp",
      title: "DMG Mori DMU 50",
      description:
        "5-axis CNC Universal Milling Machine with swivel rotary table.",
    },

    {
      img: "/machines/dnm6700.webp",
      title: "Doosan DNM 6700",
      description:
        "High speed, high rigidity and suitability for universal applications.",
    },

    {
      img: "/machines/dnm-5700.webp",
      title: "Doosan DNM 5700",
      description:
        "High speed, high rigidity and suitability for universal applications.",

    },
    {
      img: "/machines/m1.png",
      title: "DMG Mori M1",
      description:
        "New 3-axis vertical milling machine.",

    },
    {
      img: "/machines/LYNX-2100LY.webp",
      title: "Doosan Lynx 2100LY",
      description:
        "Lynx 2100LY series is a new model with additional Y axis on the Lynx 2100 series and enables to complete complex machining using only one setup.",

    },
    {
      img: "/machines/goodway200.jpg",
      title: "Goodway GS-260MS",
      description:
        "High speed, high rigidity and suitability for universal applications.",

    },
    {
      img: "/machines/dea.jpg",
      title: "DEA Global S CMM",
      description:
        "The GLOBAL S Coordinate Measuring Machine (CMM) offers customized measurement efficiency based on configurations tailored to your workflow, production volume, precision, versatility, and production department capabilities.",

    },
  ];

  return (
    <>
    <div>
    <ENHeader/>
      <div className="flex flex-col lg:flex-row w-11/12 gap-10 my-20">
        <div className="flex flex-col justify-center items-center w-1/2 mx-20">
          <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">Our Machines</p>
          <p className="text-justify leading-relaxed text-sm lg:text-base xl:text-lg">
          At MAF Machining we use the most cutting-edge and avant-garde machinery for all our work to achieve the best possible results for all our clients.
          <br/> <br/> 
          We have 5-axis technology and the most advanced multi-area lathes in the sector that allow us to machine aluminum , steel, plastic and a wide variety of materials that we make available to our clients.
          <br/> <br/>
          To achieve this, we work only with the most innovative machinery and the most outstanding machining centers.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-5 w-1/2">
          <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
        </div>
      </div>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4 m-20">
        {serviceItems.map((sci, i) => (
          <ENCertificateCard key={i} sci={sci} />
          ))}
      </div>
    </div>
    <ENFooter/>
    </>
  );
}
