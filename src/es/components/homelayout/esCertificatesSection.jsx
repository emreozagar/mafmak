import React from "react";

import ESCertificateCard from "./esCertificateCard";

export default function ESCertificatesSection() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Sertifika 1",
      description:
        "Maf Makine Mühendislik Limited Şirketi, tescilli bir marka olan Özenirler Hidrolik markasının kurucuları tarafından, istihdam vizyonu ile, talaşlı imalat alanında global kalite yönetimlerine bağlılığı esas alarak Ankara’da 2021 yılının ilk çeyreğinde kurulmuştur.",
      link: "/cncisleme",
    },
    {
      img: "/images/5axis3.jpg",
      title: "Sertifika 2",
      description:
        "Daha düşük fire ile, daha düşük maliyetle, Mümkün olan en kısa sürede, sağlam ve sürekli gelişen bir kalite sistemi ile, temiz, düzenli ve güvenilir bir çalışma ortamında, karşılıklı sevgi, saygı, sürekli gelişme ve eğitim temelleri üzerine oturmuş kurum kültürün ve hizmete sahip gayretli çalışanlarıyla gerçekleştirmek ve modern işletmecilik anlayışımızla sağladığımız güveni her geçen gün artan bir seyirle sürdürebilmektir.",
      link: "/lazerplazmakesim",
    },

    {
      img: "/images/5axis4.jpg",
      title: "Sertifika 3",
      description:
        "Kuruluşu 1973 yılına dayanan Özenirler Hidrolik markasının, yaklaşık kırk beş yıllık talaşlı imalat tecrübelerini, müşteri odaklı çalışma prensibini ve ürün kalitesini, Maf Makinaya yansıtmanın yanında geliştirerek daha da ileriye götürmek amaçlanmıştır. Makine ve teçhizat kalitesini, sistemi iyi yönetmek ve insani değerleri ön planda tutarak, her bireyin çalışmak istediği bir marka haline getirmek yüklendiğimiz en önemli misyondur.",
      link: "/kaynaklimalat",
    },

    {
      img: "/images/flame.jpg",
      title: "Sertifika 4",
      description:
        "Kuruluşu 1973 yılına dayanan Özenirler Hidrolik markasının, yaklaşık kırk beş yıllık talaşlı imalat tecrübelerini, müşteri odaklı çalışma prensibini ve ürün kalitesini, Maf Makinaya yansıtmanın yanında geliştirerek daha da ileriye götürmek amaçlanmıştır. Makine ve teçhizat kalitesini, sistemi iyi yönetmek ve insani değerleri ön planda tutarak, her bireyin çalışmak istediği bir marka haline getirmek yüklendiğimiz en önemli misyondur.",
      link: "/boyayuzey",
    },
  ];

  return (
    <>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4">
        {serviceItems.map((sci, i) => (
          <ESCertificateCard key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
