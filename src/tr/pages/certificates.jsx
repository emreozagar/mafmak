import React from "react";
import CertificatesSection from "../components/homelayout/CertificatesSection";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Certificates = () => {
  return (
    <div>
    <Header/>
    <div className="flex w-full items-center justify-center my-20">
      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Sertifikalarımız</p>
          </div>
        </div>
        {/* <CertificatesSection /> */}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Certificates;
