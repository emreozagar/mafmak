import React from "react";

import CertificateCard from "../components/homelayout/CertificateCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Catalog() {
  const serviceItems = [
    {
      img: "/machines/cmx-70-u.webp",
      title: "DMG Mori CMX 70 U",
      description:
        "Daha fazla verimlilik ve üretkenlik için güçlü ve esnek 5 taraflı işleme çözümünüz.",
    },
    {
      img: "/machines/dmu-50.webp",
      title: "DMG Mori DMU 50",
      description:
        "Daha fazla verimlilik ve üretkenlik için güçlü ve esnek 5 taraflı işleme çözümünüz.",
    },

    {
      img: "/machines/dnm6700.webp",
      title: "Doosan DNM 6700",
      description:
        "Yüksek hız, yüksek sertlik ve evrensel uygulamalara uygunluk.",
    },

    {
      img: "/machines/dnm-5700.webp",
      title: "Doosan DNM 5700",
      description:
        "Yüksek hız, yüksek sertlik ve evrensel uygulamalara uygunluk",

    },
    {
      img: "/machines/m1.png",
      title: "DMG Mori M1",
      description:
        "Yeni 3 eksenli dikey freze makinesi.",

    },
    {
      img: "/machines/LYNX-2100LY.webp",
      title: "Doosan Lynx 2100LY",
      description:
        "Lynx 2100LY serisi ek Y ekseniyle yalnızca tek bir kurulum kullanarak karmaşık işlemenin tamamlanmasını sağlar.",

    },
    {
      img: "/machines/goodway200.jpg",
      title: "Goodway GS-260MS",
      description:
        "Yüksek hız, yüksek sertlik ve evrensel uygulamalara uygunluk.",

    },
    {
      img: "/machines/dea.jpg",
      title: "DEA Global S CMM",
      description:
        "GLOBAL S koordinat ölçüm cihazı (CMM) üretim hacmi, hassasiyet, çok amaçlılık ve üretim bölümü yetenekleri için konfigürasyonlarla iş akışınıza göre özelleştirilmiş ölçüm verimliliği sunar.",

    },
  ];

  return (
    <>
    <div>
    <Header/>
      <div className="flex flex-col lg:flex-row w-11/12 gap-10 my-20">
        <div className="flex flex-col justify-center items-center w-1/2 mx-20">
          <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">Makinelerimiz</p>
          <p className="text-justify leading-relaxed text-sm lg:text-base xl:text-lg">
          MAF Makina'da tüm müşterilerimiz için mümkün olan en iyi sonuçları elde etmek amacıyla tüm çalışmalarımızda en ileri teknolojiye sahip ve avangart makineleri kullanıyoruz.
          <br/> <br/>
          Müşterilerimize sunduğumuz alüminyum, çelik, plastik ve çok çeşitli malzemeleri işlememize olanak tanıyan 5 eksen teknolojisine ve sektördeki en gelişmiş çok alanlı torna tezgahlarına sahibiz.
          <br/> <br/>
          Bunu başarmak için yalnızca en yenilikçi makinelerle ve en seçkin işleme merkezleriyle çalışıyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-5 w-1/2">
          <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
        </div>
      </div>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4 m-20">
        {serviceItems.map((sci, i) => (
          <CertificateCard key={i} sci={sci} />
          ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
