import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./tr/pages/home";
import Aboutus from "./tr/pages/aboutus";
import Services from "./tr/pages/services";
import Gallery from "./tr/pages/gallery";
import Certificates from "./tr/pages/certificates";
import Catalog from "./tr/pages/catalog";
import Contact from "./tr/pages/contact";
import Cncisleme from "./tr/components/servicelayout/cncisleme";
import Lazerisleme from "./tr/components/servicelayout/lazerisleme";
import Kaynaklimalat from "./tr/components/servicelayout/kaynaklimalat";
import BoyaYuzey from "./tr/components/servicelayout/boyayuzey";
// import Header from "./tr/components/layout/Header";
// import Footer from "./tr/components/layout/Footer";
import ServicesPage from "./tr/pages/servicespage";
import ServicesDetail from "./tr/pages/servicesdetail";
import NotFound from "./tr/pages/notfound";

import ENAboutus from "./en/pages/enaboutus"
import ENHomepage from "./en/pages/enhome";
import ENServicesPage from "./en/pages/enservicespage";
import ENServicesDetail from "./en/pages/enservicesdetail";
import ENGallery from "./en/pages/engallery";
import ENCertificates from "./en/pages/encertificates";
import ENServices from "./en/pages/enservices";
import ENContact from "./en/pages/encontact";
import ENLazerisleme from "./en/components/servicelayout/enlazerisleme";
import ENCncisleme from "./en/components/servicelayout/encncisleme";
import ENKaynaklimalat from "./en/components/servicelayout/enkaynaklimalat";
import ENBoyaYuzey from "./en/components/servicelayout/enboyayuzey";
import ENCatalog from "./en/pages/encatalog";
import ENNotFound from "./en/pages/ennotfound";

import ESAboutus from "./es/pages/esaboutus"
import ESHomepage from "./es/pages/eshome";
import ESServicesPage from "./es/pages/esservicespage";
import ESServicesDetail from "./es/pages/esservicesdetail";
import ESGallery from "./es/pages/esgallery";
import ESCertificates from "./es/pages/escertificates";
import ESServices from "./es/pages/esservices";
import ESContact from "./es/pages/escontact";
import ESLazerisleme from "./es/components/servicelayout/eslazerisleme";
import ESCncisleme from "./es/components/servicelayout/escncisleme";
import ESKaynaklimalat from "./es/components/servicelayout/eskaynaklimalat";
import ESBoyaYuzey from "./es/components/servicelayout/esboyayuzey";
import ESCatalog from "./es/pages/escatalog";
import ESNotFound from "./es/pages/esnotfound";



function App() {

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-whitesmoke flex flex-col">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mafmakina" element={<Aboutus />} />
        <Route path="/mafmakina/:hizmetlerimiz/:hizmet" element={<ServicesPage />} />
        <Route path="/mafmakina/:hizmetlerimiz/:hizmet/:hizmetDetay" element={<ServicesDetail />} />
        <Route path="/hizmetlerimiz" element={<Services />} /> {/*x.com/hizmetlerimiz*/}
        <Route path="/hizmetlerimiz/:hizmet" element={<ServicesPage />} /> {/*x.com/hizmetlerimiz/cnc-isleme*/}
        <Route path="/hizmetlerimiz/:hizmet/:hizmetDetay" element={<ServicesDetail />} /> {/*x.com/hizmetlerimiz/cnc-isleme/cnc-frezleme*/}
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/sertifikalar" element={<Certificates />} />
        <Route path="/makine-parkuru" element={<Catalog />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/cncisleme" element={<Cncisleme />} />
        <Route path="/lazerplazmakesim" element={<Lazerisleme />} />
        <Route path="/kaynaklimalat" element={<Kaynaklimalat />} />
        <Route path="/boyayuzey" element={<BoyaYuzey />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/en" element={<ENHomepage/> } />
        <Route path="/en/*" element={<ENNotFound/> } />
        <Route path="/en/mafmakina" element={<ENAboutus/> } />
        <Route path="/en/mafmakina/services" element={<ENServices/> } />
        <Route path="/en/mafmakina/:services/:hizmet" element={<ENServicesPage/> } />
        <Route path="/en/mafmakina/:services/:hizmet/hizmetDetay" element={<ENServicesDetail/> } />
        <Route path="/en/services" element={<ENServices/> } />
        <Route path="/en/services/:hizmet" element={<ENServicesPage/> } />
        <Route path="/en/:services/:hizmet/:hizmetDetay" element={<ENServicesDetail/> } />
        <Route path="/en/gallery" element={<ENGallery/> } />
        <Route path="/en/certificates" element={<ENCertificates/> } />
        <Route path="/en/machine-parkour" element={<ENCatalog/> } />
        <Route path="/en/contact" element={<ENContact/> } />
        <Route path="/en/cncmachining" element={<ENCncisleme/> } />
        <Route path="/en/laserplasmacutting" element={<ENLazerisleme/> } />
        <Route path="/en/weldingmanufacturing" element={<ENKaynaklimalat/> } />
        <Route path="/en/paintsurfaceprocesses" element={<ENBoyaYuzey/> } />
        <Route path="/es" element={<ESHomepage/> } />
        <Route path="/es/mafmakina" element={<ESAboutus/> } />
        <Route path="/es/mafmakina/servicios" element={<ESServices/> } />
        <Route path="/es/mafmakina/:servicios/:hizmet" element={<ESServicesPage/> } />
        <Route path="/es/mafmakina/:servicios/:hizmet/:hizmetDetay" element={<ESServicesDetail/> } />
        <Route path="/es/servicios" element={<ESServices/> } />
        <Route path="/es/servicios/:hizmet" element={<ESServicesPage/> } />
        <Route path="/es/:servicios/:hizmet/:hizmetDetay" element={<ESServicesDetail/> } />
        <Route path="/es/galeria" element={<ESGallery/> } />
        <Route path="/es/certificados" element={<ESCertificates/> } />
        <Route path="/es/parkour-maquinas" element={<ESCatalog/> } />
        <Route path="/es/contacto" element={<ESContact/> } />
        <Route path="/es/mecanizadocnc" element={<ESCncisleme/> } />
        <Route path="/es/cortelaserplasma" element={<ESLazerisleme/> } />
        <Route path="/es/soldadura" element={<ESKaynaklimalat/> } />
        <Route path="/es/pinturasuperficie" element={<ESBoyaYuzey/> } />
        
      </Routes>
    </div>
  );
}

export default App;
