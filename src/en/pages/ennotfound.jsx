import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";

const ENNotFound = () => {
  return (
    <div>
    <ENHeader/>
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-2xl">Not Found</p>
    </div>
    <ENFooter/>
    </div>
  );
};

export default ENNotFound;
