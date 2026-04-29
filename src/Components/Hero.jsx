import AddsSection from "./HomePage/AddsSection";
import AllCatagories from "./HomePage/AllCatagories";
import AllNews from "./HomePage/AllNews";

const Hero = async () => {
  
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto md:mt-12 mt-6">
      <div className="col-span-2">
        <AllCatagories/>
      </div>

      <div className=" col-span-8">
        <AllNews />
      </div>
      <div className="md:col-span-2 ">
        <AddsSection />
      </div>
    </div>
  );
};

export default Hero;
