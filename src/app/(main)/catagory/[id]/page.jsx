import AddsSection from "@/Components/HomePage/AddsSection";
import AllCatagories from "@/Components/HomePage/AllCatagories";
import AllNews from "@/Components/HomePage/AllNews";


const NewsCatagoryPage = async({params}) => {

    const {id} = await params;
    console.log(id);
    

    return ( 
        <div className="grid grid-cols-12 gap-4 container mx-auto md:mt-12 mt-6">
      
      <div className="col-span-2">
        <AllCatagories activeId={id} />
      </div>
      
      <div  className=" col-span-8">
        <AllNews id={id}/>
      </div>
      <div className="col-span-2 ">
        <AddsSection/>
      </div>
    </div>
    );
};

export default NewsCatagoryPage;