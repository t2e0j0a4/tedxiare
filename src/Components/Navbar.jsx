import React , {useState} from 'react'

// Link for Routing
import { Link , useLocation } from 'react-router-dom'

// Assets Imports
import logo from "../Assets/logo.svg"
import menu from "../Assets/menu.svg"
import close from "../Assets/menu-2.svg"

const Navbar = () => {

    const [menuToggle , setMenuToggle] = useState(false);

    const location = useLocation();

    const {pathname} = location;

    return (
        <nav className=' w-[100%] h-[77px] bg-[#000000] flex flex-row items-center justify-between px-6 sm:px-20 font-[Poppins]'>
            <div className="logo flex flex-col items-start justify-center">
                <img src={logo} alt="TedxIARE"/>
                <span className='text-[12px] font-[600] text-[#EB0028]'>x<span className='text-[#ffffff]'> = independently organized event</span> </span>
            </div>
            <ul className={`flex flex-row items-center md:items-center justify-end gap-x-8 absolute w-[100%] md:w-auto navBG h-[77px] md:h-auto ${menuToggle ? 'top-[77px] z-10' : 'top-0 -z-10'} left-0 pr-12 sm:pr-16 md:z-[1] md:pr-0 md:static transition-all`}>
                <li className=''><Link onClick={()=>{setMenuToggle(false)}} to="/" className={`hover:text-[#ffffff] font-[600] text-[16px] font-[Poppins] border-b-2 border-transparent hover:border-b-2 ${pathname === '/' ? 'text-[#ffffff] border-[#EC1015]' : 'text-[#EC1015] border-transparent'}`}>Home</Link></li>
                <li className=''><Link onClick={()=>{setMenuToggle(false)}} to="/about" className={`hover:text-[#ffffff] font-[600] text-[16px] font-[Poppins] border-b-2 border-transparent hover:border-b-2 ${pathname === '/about' ? 'text-[#ffffff] border-[#EC1015]' : 'text-[#EC1015] border-transparent'}`}>About Us</Link></li>
                <li className=''><Link onClick={()=>{setMenuToggle(false)}} to="/register" className='w-[92px] h-[32px] bg-[#EB0028] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#EB0028] text-[16px] font-[600] px-[10px] py-[3px]'>Register</Link></li>
            </ul>
            <div className="flex justify-center items-center cursor-pointer md:hidden" onClick={()=>{setMenuToggle(!menuToggle)}}>
                {menuToggle ? <img src={close} alt="close" /> : <img src={menu} alt="menu" /> }
            </div>
        </nav>
    )
}

export default Navbar