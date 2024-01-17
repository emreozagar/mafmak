import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const links = [
    { name: "Hakkımızda", link: "/mafmakina" },
    { name: "Galeri", link: "/galeri" },
    { name: "Sertifikalar", link: "/sertifikalar" },
    { name: "Katalog", link: "/makine-parkuru" },
    { name: "İletişim", link: "/iletisim" },
  ];
  const sublinks = [
    { name: "Cnc İşleme", link: "/hizmetlerimiz/cnc-isleme" },
    { name: "Lazer ve Plazma Kesim", link: "/hizmetlerimiz/lazer-plazma-kesim" },
    { name: "Kaynaklı İmalat", link: "/hizmetlerimiz/kaynakli-imalat" },
    { name: "Boya ve Yüzey İşlemleri", link: "/hizmetlerimiz/boya-ve-yuzey-islemleri" },
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
                <strong>Eposta:</strong> info@maf.gen.tr
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
                <p className="font-medium text-gray-900">Hizmetlerimiz</p>

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
                      KVKK{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Çerez Politikamız{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Kalite Politikamız{" "}
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

export default Footer;
