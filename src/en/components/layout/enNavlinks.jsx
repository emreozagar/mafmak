import React from "react";
import { Link } from "react-router-dom";

const ENNavLinks = ({ isMobile = false, setOpen }) => {
  const links = [
    { name: "About Us", link: "/en/mafmakina" },
    {
      name: "Our Services",
      submenu: true,
      link: "/en/services",
      sublinks: [
        { name: "Cnc Machining", link: "/en/services/cnc-machining" },
        { name: "Laser and Plasma Cutting", link: "/en/services/laser-plasma-cutting" },
        { name: "Welding Manufacturing", link: "/en/services/welding-manufacturing" },
        { name: "Paint and Surface Processes", link: "/en/services/paint-surface-processes" },
      ],
    },
    { name: "Gallery", link: "/en/gallery" },
    { name: "Certificates", link: "/en/certificates" },
    { name: "Machine Parkour", link: "/en/machine-parkour" },
    { name: "Contact", link: "/en/contact" },
  ];
  return (
    <div className={`flex lg:gap-2 xl:gap-10 ${isMobile ? "flex-col justify-center items-center bg-white w-full absolute top-0 right-0 h-screen gap-16" : ""}`}>
      {links.map((link, index) => (
        <div
          className="px-3 group text-left transition duration-0 hover:duration-150 hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-[#04a5a5] text-2xl md:cursor-pointer lg:text-sm xl:text-base"
          onClick={() => setOpen(!isMobile)}
        >
          <Link to={link.link} className="my-7">
            {link.name}
          </Link>
          {link.submenu && (
            <div className="pt-6 absolute top-12 hidden group-hover:md:block hover:md:block">
<div className="bg-[#fff] gap-10 rounded-b-md border mt-2">
                {link.sublinks.map((mysublinks) => (
                  <div className="p-3 rounded-md hover:text-[#04a5a5]">
                    <Link to={mysublinks.link} className="text-md font-medium hover:text-primary">
                      {mysublinks.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ENNavLinks;
