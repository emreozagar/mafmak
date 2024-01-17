import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const ESFooter = () => {
  const links = [
    { name: "¿Quiénes Somos?", link: "/es/mafmakina" },
    { name: "Galería", link: "/es/galeria" },
    { name: "Certificados", link: "/es/certificados" },
    { name: "Parkour de Máquinas", link: "/es/parkour-maquinas" },
    { name: "Contacto", link: "/es/contacto" },
  ];
  const sublinks = [
    { name: "Mecanizado CNC", link: "/es/servicios/mecanizado-cnc" },
    { name: "Corte por Láser & Arco Plasma", link: "/es/servicios/corte-laser-plasma" },
    { name: "Soldadura", link: "/es/servicios/soldadura" },
    { name: "Procesos de Pintura y Superficies", link: "/es/servicios/pintura-superficie" },
  ];

  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img className="h-12 pb-2" src="/images/PNG-Format.png" alt="img" />

              <p className="mt-4 max-w-xs text-gray-500">
                100. Yıl Bulvarı 1230 Sk. No:18
                Yenimahalle/ANKARA <br /> <br />
                <strong>Número de Teléfono:</strong> +90 312 354 9595-96 <br />
                <strong>Correo Electrónico:</strong> info@maf.gen.tr
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <Link to="https://www.linkedin.com/company/mafmakina/" className="text-gray-700 transition hover:opacity-75">
                    {" "}
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Menú</p>

                <ul className="mt-6 space-y-4 text-sm">
                  {links.map((link, index) => (
                    <div>
                      <Link to={link.link} className="text-gray-700 transition hover:opacity-75">
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Nuestros Servicios</p>

                <ul className="mt-6 space-y-4 text-sm">
                  {sublinks.map((link, index) => (
                    <div>
                      <Link to={link.link} className="text-gray-700 transition hover:opacity-75">
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">&nbsp;</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Política de Privacidad{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Política de Cookies{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Política de Calidad{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500">&copy; 2022. MAF Makina Mühendislik. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
};

export default ESFooter;
