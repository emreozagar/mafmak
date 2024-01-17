import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { getServicesDetail } from "../esservices";
import ESNotFound from "./esnotfound";
import ESHeader from "../components/layout/esHeader";
import ESFooter from "../components/layout/esFooter";


const ESServicesDetail = () => {
  const { hizmet, hizmetDetay } = useParams();
  const [servicesDetail, setServicesDetail] = useState(null);

  useEffect(() => {
    const data = getServicesDetail(hizmet, hizmetDetay);
    setServicesDetail(data);
  }, []);

  return (
    <>
      {servicesDetail ? (
        <div>
          <ESHeader/>
        <div className="flex items-center justify-center flex-col h-full bg-whitesmoke gap-32 py-52">
          <div className="flex flex-col lg:flex-row w-11/12 gap-10 lg:gap-0">
            <div className="flex flex-col  gap-10">
              <p className="text-4xl sm:text-5xl text-justify xl:text-6xl mb-10">{servicesDetail[0].title}</p>
              <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">{servicesDetail[0].content}</p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-5">
              <img src={servicesDetail[0].img} alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
            </div>
          </div>

       </div>
       <ESFooter/>
        </div>
      ) : (
        <ESNotFound />
      )}
    </>
  );
};

export default ESServicesDetail;
