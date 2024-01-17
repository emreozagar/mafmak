import ESFooter from "../components/layout/esFooter";
import ESHeader from "../components/layout/esHeader";

const ESNotFound = () => {
  return (
    <div>
      <ESHeader/>
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-2xl">No Encontrado</p>
    </div>
    <ESFooter/>
    </div>
  );
};

export default ESNotFound;
