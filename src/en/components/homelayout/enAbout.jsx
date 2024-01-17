import React from "react";

const enAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 gap-10 lg:gap-0">
      <div className="flex flex-col justify-center gap-10 items-center">
        <p className="text-4xl sm:text-5xl xl:text-6xl mb-10">About us</p>
        <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">
          Maf Machining & Engineering Company LLC was established in Ankara in the first quarter of 2021 by the founders of the Özenirler Hidrolik brand, 
          which is a registered trademark, with the vision of employment and based on commitment to global quality management in the field of machining. <br /> <br />
          It is aimed to reflect the approximately forty-five years of machining experience, customer-oriented working principle and product quality of the Özenirler Hidrolik brand, 
          which dates back to 1973, to Maf Machining and to take it even further. Our most important mission is to make it a brand that every individual wants to work for, 
          by prioritizing the quality of machinery and equipment, managing the system well and human values.
        </p>
        <div className="bg-zinc-800 text-white hover:text-black hover:bg-primary transition-all rounded-md cursor-pointer w-32 px-10 py-5 flex items-center h-9 sm:h-11 xl:h-13">
          <a href="/en/mafmakina">
          Details
          </a>
          </div>
      </div>

      <div className="flex flex-col items-center lg:items-end gap-5">
        <img src="/images/axis.jpg" alt="img" className="flex-1 object-cover md:w-full lg:w-10/12 xl:w-11/12 " />
      </div>
    </div>
  );
};

export default enAbout;
