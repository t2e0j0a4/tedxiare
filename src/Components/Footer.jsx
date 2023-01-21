import React from 'react'
import { Link } from 'react-router-dom';

import logo from "../Assets/tedxmainlogoedit.png";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {

  const moveToTop = () => {
    window.scrollTo({top : 0 , behavior : 'smooth'});
  }

  return (
    <div className="w-[100%] h-[100%] foooterBG py-6 font-[Poppins]">
      <div className=" w-[96%] sm:w-[90%] mx-auto h-[1px] bg-[#7E7E7E]"></div>

      <div className="w-[96%] mx-auto flex flex-row flex-wrap lg:flex-nowrap items-start justify-around py-8 gap-y-6">

        <div className="flex flex-col w-[98%] sm:w-[90%] lg:w-[auto] items-start justify-center gap-y-5">
          <div className="logo flex flex-col items-start justify-center my-0">
            <img src={logo} className="w-[120px]" alt="TedxIARE" />
            <span className='mt-0 text-[12px] font-[600] text-[#EB0028]'>x<span className='text-[#ffffff]'> = independently organized event</span> </span>
          </div>
          <div className="flex flex-row gap-x-4">
            <a href="https://www.instagram.com/tedx_iare/" target="_blank" rel="noreferrer" className='bg-[#EB0028] p-[6px] flex justify-center items-center text-[#0B0B0B] rounded-[50%]'><FaInstagram fontSize='20px' /></a>
            <a href="mailto:tedxiare2022@gmail.com?subject=Queries" target="_blank" rel="noreferrer" className='bg-[#EB0028] p-[6px] flex justify-center items-center text-[#0B0B0B] rounded-[50%]'><MdOutlineMail fontSize='20px' /></a>
          </div>
        </div>

        <div className="text-[16px] font-[500] leading-[24px] tracking-wider text-[#FFFFFF] font-[Poppins] w-[98%] sm:w-[90%] lg:w-[40%]">
          <p>TEDxIARE is an event organised by students at the Institute of Aeronautical Engineering that features an array of engaging speakers geared towards sparking positive transformation.</p>
        </div>

        <div className="flex flex-row w-[98%] sm:w-[90%] justify-start lg:w-[auto] gap-x-3 sm:gap-x-6 items-start lg:justify-center">
          <ul className='flex flex-col items-start justify-center gap-y-2 w-[100%]'>
            <li className='text-[#EB0028] font-[700] font-[Poppins] text-[16px] cursor-default sm:cursor-pointer'><Link to="/about#iaresitemap">Site map</Link></li>
            <li onClick={()=>{moveToTop()}} className='text-[#ffffff] cursor-default sm:cursor-pointer font-[500] font-[Poppins] text-[16px]'><Link to='/'>Home</Link></li>
            <li onClick={()=>{moveToTop()}} className='text-[#ffffff] cursor-default sm:cursor-pointer font-[500] font-[Poppins] text-[16px]'><Link to='/about'>About</Link></li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px] cursor-default sm:cursor-pointer'><a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/1arFlz1XgGeEpTj1ykSjIoagUoSCW0ExX_Nvoz6FNhuY/viewform?edit_requested=true">Register</a></li>
          </ul>
          <ul className='flex flex-col items-start justify-center gap-y-2 w-[100%]'>
            <li className='text-[#EB0028] font-[700] font-[Poppins] text-[16px]'>Get in touch</li>
            <li className='text-[#ffffff] break-all font-[500] font-[Poppins] text-[16px]'>tedxiare2022@gmail.com</li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px]'>IARE,Hyderabad</li>
          </ul>
          <ul className=''></ul>
        </div>

      </div>

    </div>
  );
}

export default Footer