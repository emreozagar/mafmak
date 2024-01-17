import React, { useRef, useState } from "react";
import CertificateCard from "../homelayout/CertificateCard";

export default function BoyaYuzey() {
  const serviceItems = [
    {
      img: "/images/fiveacis.jpg",
      title: "Boya ve Yüzey İşlemleri",
      description: "Her türlü yüzey işlemleriniz için taşlama, kumlama, kaplama, yaş ve toz boya hizmeti konusunda müşterilerimizin beklentilerini karşılamaktayız.",
      link: "boya-ve-yuzey-islemleri/boya-ve-yuzey-islemleri",
    },
  ];

  return (
    <>
      <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4">
        {serviceItems.map((sci, i) => (
          <CertificateCard key={i} sci={sci} />
        ))}
      </div>
    </>
  );
}
