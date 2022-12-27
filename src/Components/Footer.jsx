import React from 'react'
import { Link } from 'react-router-dom';

import logo from "../Assets/logo.svg";

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-[100%] h-[100%] foooterBG py-6 font-[Poppins]">
      <div className="w-[90%] mx-auto h-[1px] bg-[#7E7E7E]"></div>

      <div className="w-[96%] mx-auto flex flex-row flex-wrap lg:flex-nowrap items-start justify-around py-8 gap-y-6">

        <div className="flex flex-col w-[90%] lg:w-[auto] items-start justify-center gap-y-5">
          <div className="logo flex flex-col items-start justify-center my-0">
              <img src={logo} alt="TedxIARE" className='w-[120px] my-0'/>
              <span className='text-[16px] font-[600] text-[#EB0028] my-0'>x<span className='text-[#ffffff]'> = independently organized event</span> </span>
          </div>
          <div className="flex flex-row gap-x-4">
            <a href="/" target="_blank" rel="noreferrer" className='bg-[#EB0028] p-[6px] flex justify-center items-center text-[#0B0B0B] rounded-[50%]'><FaLinkedinIn fontSize='16px'/></a>
            <a href="/" target="_blank" rel="noreferrer" className='bg-[#EB0028] p-[6px] flex justify-center items-center text-[#0B0B0B] rounded-[50%]'><MdOutlineMail fontSize='16px'/></a>
            <a href="/" target="_blank" rel="noreferrer" className='bg-[#EB0028] p-[6px] flex justify-center items-center text-[#0B0B0B] rounded-[50%]'><FaTwitter fontSize='16px'/></a>
          </div>
        </div>

        <div className="text-[18px] font-[500] leading-[24px] tracking-wider text-[#FFFFFF] font-[Poppins] w-[90%] lg:w-[40%]">
          <p>TEDx IARE is a student organized TED event, with a noble intent of spreading wisdom through words.</p>
        </div>

        <div className="flex flex-row w-[90%] justify-start lg:w-[auto] gap-x-6 items-start lg:justify-center">
          <ul className='flex flex-col items-start justify-center gap-y-2'>
            <li className='text-[#EB0028] font-[700] font-[Poppins] text-[16px] cursor-pointer'><Link to="/about#iaresitemap">Site map</Link></li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px]'><Link to="/">Home</Link></li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px]'><Link to="/about">About</Link></li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px]'><Link to="/register">Register</Link></li>
          </ul>
          <ul className='flex flex-col items-start justify-center gap-y-2'>
            <li className='text-[#EB0028] font-[700] font-[Poppins] text-[16px]'>Get in touch</li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px]'>tedxiare@gmail.com</li>
            <li className='text-[#ffffff] font-[500] font-[Poppins] text-[16px]'>IARE,Hyderabad</li>
          </ul>
          <ul className=''></ul>
        </div>

      </div>

    </div>
  );
}

export default Footer