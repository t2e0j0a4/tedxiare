import React from 'react'

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Speaker = (props) => {

    const {name,role,linkedin,twitter,image} = props;

    return (
        <div className='w-[180px] sm:w-[250px] h-[280px] speakerWidth sm:h-[350px] relative mx-auto'>
            <div className="w-[100%] flex relative justify-center items-center">
                <img src={image} alt={name} className='w-[100%] speakerImg h-[280px] sm:h-[350px] object-cover object-top'/>
                <div className="absolute top-[12px] sm:top-0 right-[-14px] sm:right-0 flex flex-col gap-y-3 sm:mr-4 sm:mt-4">
                    <a href={linkedin} target="_blank" rel="noreferrer" className='bg-[#EB0028] sm:bg-[#0B0B0B] hover:bg-[#0A66C2] p-[6px] flex justify-center items-center text-[#ffffff] rounded-[50%]'><FaLinkedinIn fontSize='16px'/></a>
                    <a href={twitter} target="_blank" rel="noreferrer" className='bg-[#EB0028] sm:bg-[#0B0B0B] hover:text-[#1DA1F2] hover:bg-[#0B0B0B] hover:sm:bg-[#0B0B0B] p-[6px] flex justify-center items-center text-[#ffffff] rounded-[50%]'><FaTwitter fontSize='16px'/></a>
                </div>
            </div>
            <div className="w-[100%] z-[100] absolute bottom-0 h-auto  bg-[#0B0B0B] bg-opacity-80 flex flex-col items-center justify-center">
                <span className='w-[100%] text-[22px] font-[500] leading-[26px] py-2 text-[#ffffff] hover:bg-[#EB0028] hover:bg-opacity-60 cursor-default font-[Poppins] tracking-wider text-center'>{name}</span>
                <span className=' text-[12px] sm:text-[16px] bg-[#0B0B0B] w-[100%] pt-1 font-[700] leading-[24px] text-[#EB0028] font-[Poppins] cursor-default tracking-wider text-opacity-[0.8] text-center bg-opacity-90'>{role}</span>
            </div>
        </div>
    )
}

export default Speaker