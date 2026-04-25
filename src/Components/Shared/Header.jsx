import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


const Header = () => {
    return (
        <div>
            <Image src={logo} alt='logo'className='mx-auto pt-8'/>
            <p className='text-center text-xl text-gray-500 pt-2 pb-1'>Journalism Without Fear or Favour</p>
            <p className='text-center text-gray-600 text-xl'>{format(new Date(),"EEEE, MMM dd, yyyy")}</p>
            
        </div>
    );
};

export default Header;