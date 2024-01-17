import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import video from "../../../Assets/images/video.mp4";
import { CgScrollV } from "react-icons/cg";

// Import Swiper styles

export default function ENSlider() {
  return (
    <>
      <Swiper className="w-full overflow-hidden flex flex-row items-center justify-center">
        <SwiperSlide className="object-cover w-full h-screen">
          <video autoPlay loop muted className="w-full h-full object-cover" src={video}></video>
          {/* Overlay */}
          <div className="absolute w-full h-full top-0 z-10 flex items-center justify-center">
            {/* <div className="bg-white w-1/4 flex items-center justify-center flex-col p-10 rounded-md">
              <p className="text-9xl">Maf Makina</p>
              <p className="w-3/4 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus magni repudiandae velit quia impedit eaque numquam id illum omnis nemo, non corporis quaerat veniam
                inventore sunt dignissimos molestiae. Assumenda! Praesentium fugit ipsam accusantium molestiae delectus ad esse consectetur quaerat numquam enim placeat rem, temporibus amet, non eos
                asperiores aut sit expedita dolorum excepturi natus doloribus obcaecati. Et, voluptates consequuntur?
              </p>
            </div> */}
            <div className="absolute bottom-20 animate-bounce m-auto w-full text-center flex justify-center">
              <CgScrollV color="white" size={100} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
