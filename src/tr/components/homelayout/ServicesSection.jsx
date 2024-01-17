import React, { useRef, useState } from "react";

import HomeServices from "./homeservices";

export default function ServicesSection() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "CNC İşleme",
      description:
        "CNC işleme, önceden programlanmış bilgisayar yazılımının fabrika aletlerinin ve makinelerinin hareketini belirlediği bir üretim sürecidir. Süreç, öğütücülerden torna tezgahlarına, frezelerden CNC yönlendiricilere kadar bir dizi karmaşık makineyi kontrol etmek için kullanılabilir. CNC işleme ile üç boyutlu kesme görevleri tek bir komut istemiyle gerçekleştirilebilir.",
      link: "hizmetlerimiz/cnc-isleme",
    },
    {
      img: "/images/5axis3.jpg",
      title: "Lazer ve Plazma Kesim",
      description:
        "Lazer kesim; Demir, bimetal, alüminyum, Paslanmaz ve metal malzemeleri kesmek için tercih edilen  ve genellikle endüstriyel üretim için kullanılan ve aynı zamanda okullar, kobiler ve hobi uzmanları tarafından kullanılmaya başlanan bir teknolojidir. Lazer ile kesme işlemi, çoğunlukla optik aracılığıyla yüksek güç üreten bir lazerin çıkışını yönlendirerek gerçekleşir.",
      link: "hizmetlerimiz/lazer-plazma-kesim",
    },

    {
      img: "/images/5axis4.jpg",
      title: "Kaynaklı İmalat",
      description:
        "Kaynaklı İmalat, Projelerin niteliğine göre yüksek mukavemet gerektiren, cıvatayla birleştirmenin mümkün olmadığı veya uygun olmadığı, standart dışındaki ölçülerde çizilen projelerde, malzeme fire maliyeti ve maliyetin düşürülmesinden gibi sebeplerden dolayı tercih edilen imalat yöntemidir.",
      link: "hizmetlerimiz/kaynakli-imalat",
    },

    {
      img: "/images/flame.jpg",
      title: "Boya ve Yüzey İşlemleri",
      description:
        "Her türlü yüzey işlemleriniz için taşlama, kumlama, kaplama, yaş ve toz boya hizmeti konusunda müşterilerimizin beklentilerini karşılamaktayız.",
      link: "/hizmetlerimiz/boya-ve-yuzey-islemleri",
    },
  ];

  return (
    <>
      <div className="z-10 mb-20 gap-5 items-center justify-center max-sm:flex max-sm:flex-col max-lg:grid sm:grid-cols-2 md:items-center md:justify-center lg:flex lg:justify-center lg:items-end xl:w-full 2xl:gap-[4vw]">
        {serviceItems.map((sci, i) => (
          <HomeServices key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
