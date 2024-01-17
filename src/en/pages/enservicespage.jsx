import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { getServices, services } from "../enservices";
import ENNotFound from "./ennotfound";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

const ENServicesPage = () => {
  const { hizmet } = useParams();
  const [servicesData, setServicesData] = useState({});

  useEffect(() => {
    setServicesData(getServices(hizmet)[0]);
  }, [hizmet]);

  return (
    <>
      {servicesData.title ? (
        <div>
        <ENHeader/>
        <div className="flex items-center justify-center flex-col h-full bg-whitesmoke gap-32 py-52">
          <div className="flex flex-col lg:flex-row w-11/12 gap-10 lg:gap-0">
            <div className="flex flex-col  gap-10">
              <p className="text-4xl text-justify sm:text-5xl xl:text-6xl mb-10">{servicesData.title}</p>
              <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">{servicesData.content}</p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-5">
              <img src={servicesData.img} alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
            </div>
          </div>

          <div className="flex flex-col justify-start w-11/12 md:px-10 lg:px-0">
            <div className="grid gap-5 grid-cols-2 lg:gap-10 lg:grid-cols-4">
              {servicesData.detail.map((sci, i) => (
                <div className="relative items-start transition-transform duration-300 justify-center w-full rounded-xl">
                  <img className="w-full object-cover rounded-t-xl h-[30vw] lg:h-[22.5vw]" src={sci.img} alt="img" />
                  <div className="flex h-20 text-justify justify-between items-center px-5 bg-white rounded-b-xl">
                    <div className="py-5 w-full text-lg sm:text-xl"> {sci.title} </div>
                    <Link to={"" + sci.link + ""}>
                      <button className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md flex items-center justify-center w-[40px] h-[30px] sm:w-[50px] sm:h-[40px] lg:w-[40px] lg:h-[30px] xl:w-[50px] xl:h-[40px] 2xl:w-[60px] 2xl:h-[50px]">
                        <IoIosArrowForward />
                      </button>
                    </Link>
                  </div>
                  <div className="p-5 w-full text-justify h-fit text-lg sm:text-xl bg-gray-200 rounded-b-xl"> {sci.description} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ENFooter/>
      </div>
      ) : (
        <ENNotFound />
      )}
    </>
  );
};

export default ENServicesPage;
