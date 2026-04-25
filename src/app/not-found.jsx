import Link from "next/link";


const NotFound = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center h-[80vh] gap-4">
          <h2 className="md:text-4xl text-3xl font-bold text-purple-500 ">This page is not found</h2> 
          <Link href={"/"}>
          <button className="btn bg-purple-500 text-white">Back to Home</button>
          </Link> 
          
        </div>
    );
};

export default NotFound;