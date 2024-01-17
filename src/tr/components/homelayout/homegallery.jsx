import React from "react";
import { Link } from "react-router-dom";

const Homegallery = () => {
  return (
    <div className="flex items-center justify-center w-full relative">
      <div style={{ backgroundImage: `url('/images/flame.jpg')` }} className="flex h-[300px] sm:h-[400px] lg:h-[500px] bg-cover w-full items-center justify-center transition-all duration-300 bg-center cursor-pointer">
        <Link to="/galeri" className="text-white z-10 text-4xl lg:text-5xl xl:text-6xl">
          Galeri
        </Link>
        {/* Bg Overlay */}
        <div className="bg-black w-full h-full opacity-80 absolute"></div>
      </div>
    </div>
  );
};

export default Homegallery;
