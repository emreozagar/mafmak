import React from "react";
import { Link } from "react-router-dom";

const ESNavLinks = ({ isMobile = false, setOpen }) => {
  const links = [
    { name: "¿Quienes Somos?", link: "/es/mafmakina" },
    {
      name: "Nuestros Servicios",
      submenu: true,
      link: "/servicios",
      sublinks: [
        { name: "Mecanizado Cnc", link: "/es/servicios/mecanizado-cnc" },
        { name: "Corte por Láser & Plasma", link: "/es/servicios/corte-laser-plasma" },
        { name: "Soldadura", link: "/es/servicios/soldadura" },
        { name: "Procesos de Pintura y Superficies", link: "/es/servicios/pintura-superficie" },
      ],
    },
    { name: "Galéria", link: "/es/galeria" },
    { name: "Certificados", link: "/es/certificados" },
    { name: "Parkour de Maquina", link: "/es/parkour-maquinas" },
    { name: "Contacto", link: "/es/contacto" },
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

export default ESNavLinks;
