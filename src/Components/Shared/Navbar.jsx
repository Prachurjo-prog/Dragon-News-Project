'use client'

import Image from "next/image";
import Link from "next/link";
import user from "@/assets/user.png"
import { usePathname } from "next/navigation";



const Navbar = ({href}) => {
    const pathname = usePathname();
const isActive = href === pathname;

    return (
        <div className="flex items-center container justify-between mx-auto mt-4">
            <div></div>
            <div className="flex gap-4 text-gray-500 font-semibold">
            <Link href={"/"}><button className="hover:cursor-pointer ">Home</button></Link>
            <Link href={"/about-us"}><button className="hover:cursor-pointer ">About</button></Link>
            <Link href={"/career-path"}><button className= "hover:cursor-pointer">Career</button></Link>  
            </div>
            <div className="flex items-center gap-2">
                <Image src={user} alt="user"/>
               <Link href={"/login"}><button className="btn bg-black text-white">Login</button></Link>
            </div>
            
            
        </div>
    );
};

export default Navbar;