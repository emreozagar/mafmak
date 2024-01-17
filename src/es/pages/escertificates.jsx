import React from "react";
import ESCertificatesSection from "../components/homelayout/esCertificatesSection";
import ESHeader from "../components/layout/esHeader";
import ESFooter from "../components/layout/esFooter";

const ESCertificates = () => {
  return (
    <div>
    <ESHeader/>
    <div className="flex w-full items-center justify-center my-20">
      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Certificados</p>
          </div>
        </div>
        {/* <CertificatesSection /> */}
      </div>
    </div>
    <ESFooter/>
    </div>
  )
};

export default ESCertificates;
