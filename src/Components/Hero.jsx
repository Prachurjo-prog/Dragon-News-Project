

import AllCatagories from "./HomePage/AllCatagories";

const Hero = async () => {
  

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto md:mt-12 mt-6">
      
      <AllCatagories/>
      <div className="bg-amber-300 col-span-8">All News</div>
      <div className="bg-green-300 col-span-2">All Adds</div>
    </div>
  );
};

export default Hero;
