import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const ENFooter = () => {
  const links = [
    { name: "About Us", link: "/en/mafmakina" },
    { name: "Gallery", link: "/en/gallery" },
    { name: "Certificates", link: "/en/certificates" },
    { name: "Machine Parkour", link: "/en/machineparkour" },
    { name: "Contact", link: "/en/contact" },
  ];
  const sublinks = [
    { name: "Cnc Machining", link: "/en/services/cnc-machining" },
    { name: "Laser Plasma Cutting", link: "/en/services/laser-plasma-cutting" },
    { name: "Welding Manufacturing", link: "/en/services/welding-manufacturing" },
    { name: "Paint and Surface Processes", link: "/en/services/paint-surface" },
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
                <strong>No:</strong> +90 312 354 9595-96 <br />
                <strong>Email:</strong> info@maf.gen.tr
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
                <p className="font-medium text-gray-900">Menü</p>

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
                <p className="font-medium text-gray-900">Our Services</p>

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
                      PDP{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Cookie Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Quality Policy{" "}
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

export default ENFooter;
