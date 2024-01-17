import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function Fancybox(props) {
  const coveerRef = useRef(null);

  useEffect(() => {
    const coveer = coveerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(coveer, delegate, options);

    return () => {
      NativeFancybox.unbind(coveer);
      NativeFancybox.close();
    };
  });

  return <div ref={coveerRef}>{props.children}</div>;
}

const Gallery = () => {
  const imgClass = "w-72 h-72  sm:w-[30vw] sm:h-[25vw]";
  return (
    <div>
    <Header/>  
    <div className="w-11/12 px-6 py-12 mx-auto">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0001.jpg">
            <img src="/gallery/WA0001.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0003.jpg">
            <img src="/gallery/WA0003.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0004.jpg">
            <img src="/gallery/WA0004.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0007.jpg">
            <img src="/gallery/WA0007.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0008.jpg">
            <img src="/gallery/WA0008.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0009.jpg">
            <img src="/gallery/WA0009.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0010.jpg">
            <img src="/gallery/WA0010.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0011.jpg">
            <img src="/gallery/WA0011.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0013.jpg">
            <img src="/gallery/WA0013.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0015jpg">
            <img src="/gallery/WA0015.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0016.jpg">
            <img src="/gallery/WA0016.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0018.jpg">
            <img src="/gallery/WA0018.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0019.jpg">
            <img src="/gallery/WA0019.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0020.jpg">
            <img src="/gallery/WA0020.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0022.jpg">
            <img src="/gallery/WA0022.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0023.jpg">
            <img src="/gallery/WA0023.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0025.jpg">
            <img src="/gallery/WA0025.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0028.jpg">
            <img src="/gallery/WA0028.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0029.jpg">
            <img src="/gallery/WA0029.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0030.jpg">
            <img src="/gallery/WA0030.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0031.jpg">
            <img src="/gallery/WA0031.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0032.jpg">
            <img src="/gallery/WA0032.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0033.jpg">
            <img src="/gallery/WA0033.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0034.jpg">
            <img src="/gallery/WA0034.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0035.jpg">
            <img src="/gallery/WA0035.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0038.jpg">
            <img src="/gallery/WA0038.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0039.jpg">
            <img src="/gallery/WA0039.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0042.jpg">
            <img src="/gallery/WA0042.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0045.jpg">
            <img src="/gallery/WA0045.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0046.jpg">
            <img src="/gallery/WA0046.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0047.jpg">
            <img src="/gallery/WA0047.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0049.jpg">
            <img src="/gallery/WA0049.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0050.jpg">
            <img src="/gallery/WA0050.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0052.jpg">
            <img src="/gallery/WA0052.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0054.jpg">
            <img src="/gallery/WA0054.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0056.jpg">
            <img src="/gallery/WA0056.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0057.jpg">
            <img src="/gallery/WA0057.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0058.jpg">
            <img src="/gallery/WA0058.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0060.jpg">
            <img src="/gallery/WA0060.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
          <a data-fancybox="gallery" className="flex items-center justify-center" href="/gallery/WA0061.jpg">
            <img src="/gallery/WA0061.jpg" alt="img" className={`${imgClass} object-cover`} />
          </a>
        
        </div>
      </Fancybox>
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
