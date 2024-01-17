import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  return (
    <div>
     <Header/> 
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-2xl">Sayfa Bulunamadı</p>
    </div>
    <Footer/>
    </div>
  );
};

export default NotFound;
