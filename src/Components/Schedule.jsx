import React from "react";

const Schedule = (props) => {

    const {session , time } = props;

  return (
    <div className="eachSchedule w-[380px] h-[100%] my-auto flex flex-col items-start justify-start py-[3rem] gap-y-10">
      <div className="bg-[#EB0028] py-3 px-2 flex flex-row w-[100%] justify-around items-center border-r-2 border-[#ffffff]">
        <span className="font-[Poppins] text-[#ffffff] text-[20px] sm:text-[22px] leading-[26px] tracking-wider">
          {time}
        </span>
      </div>
      <div className="flex w-[100%] flex-row items-center justify-end">
        <div className=" w-[34px] sm:w-[30px] h-[30px] bg-[#EB0028] rounded-[50%] shadow-md border-[4px] border-gray-50"></div>
        <div className="w-[380px] h-[2px] bg-[#0B0B0B]"></div>
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <span className="session font-[Poppins] text-center w-[80%] text-[20px] sm:text-[22px] font-[600] leading-[28px] tracking-wider ">
          {session}
        </span>
      </div>
    </div>
  );
};

export default Schedule;
