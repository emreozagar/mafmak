import React from "react";
import ENCertificatesSection from "../components/homelayout/enCertificatesSection";
import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

const ENCertificates = () => {
  return (
    <div>
    <ENHeader/>
    <div className="flex w-full items-center justify-center my-20">
      <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-primary text-xs xl:text-sm">MAF MAKİNA</p>
            <p className="mb-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Certificates</p>
          </div>
        </div>
        {/* <CertificatesSection /> */}
      </div>
    </div>
    <ENFooter/>
    </div>
  )
};

export default ENCertificates;
