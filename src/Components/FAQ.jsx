import React , {useState} from 'react'

import {IoIosArrowUp} from "react-icons/io"

const FAQ = (props) => {

    const {question,answer} = props;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="question-box w-[98%] md:w-[80%] bg-[#ffffff] border-b-[6px] rounded-[8px] border-[#EB0028] py-3 cursor-pointer" onClick={() => {
          setShowInfo(!showInfo);
        }}>
          <div className="question-section flex items-center justify-between px-8 my-2 gap-x-7">
            <span className=" w-[100%] text-[16px] sm:text-[18px] md:text-[22px] font-[700] leading-[26px] font-[Poppins] cursor-pointer select-none text-[#0B0B0B]" onClick={() => {
                setShowInfo(!showInfo);
              }}>
              {question}
            </span>
            <span className="cursor-pointer p-1 duration-500 transition-all" onClick={() => {
                setShowInfo(!showInfo);
              }}>
              {
                <IoIosArrowUp fontSize='22px' className={`hover:scale-110 text-[#EB0028] transition-all duration-300 ${showInfo ? 'rotate-0' : '-rotate-180'} `} />
              }
            </span>
          </div>
        {showInfo && (
          <div className="answer-section duration-500 transition-all px-8 py-2">
            <p className="select-none text-[14px] sm:text-[16px] md:text-[18px] font-[500] leading-[26px] font-[Poppins]  text-[#0B0B0B]">
              {answer}
            </p>
          </div>
        )}
      </div>
    )
}

export default FAQ