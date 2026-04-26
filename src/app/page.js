import BreakingNews from "@/Components/Shared/BreakingNews";
import Header from "@/Components/Shared/Header";
import Navbar from "@/Components/Shared/Navbar";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Header/>
      <BreakingNews/>
      <Navbar/>
      Home
      
    </div>
  );
}
