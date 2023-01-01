
import React from 'react'

// Assets Imports
import BG from "../Assets/S.mp4";
import BG2 from "../Assets/TEDX m.mp4"
import BG3 from "../Assets/Comp 2_3.mp4"
import TedTheme from "../Assets/TedTheme.svg";
import Mic from "../Assets/SchedulesMic.svg";

// Components & Data Imports
// import Schedule from '../Components/Schedule';
import Speaker from '../Components/Speaker';
import FAQ from '../Components/FAQ';
// import Schedule from "../Components/Schedule";
import speakers from '../Speakers';
import questions from "../FAQ";
// import schedule from "../Schedule.js";

// Random Key ID
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    React.useEffect(()=>{
        document.title = "Tedx IARE | Home";
    },[])

  return (
    <div id='Home-TOP' className="w-[100%] h-[100%]">
        
        {/* BG VIDEO */}
        <section className="relative w-[100%] h-[100vh]">
            <video src={BG} autoPlay  muted className="absolute top-0 h-[100%] w-[100%] object-cover hidden lg:block"/>
            <video src={BG2} autoPlay  muted className="absolute top-0 h-[100%] w-[100%] object-cover md:block lg:hidden sm:hidden"/>
            <video src={BG3} autoPlay  muted className="absolute top-0 h-[100%] w-[100%] object-cover block md:hidden lg:hidden"/>
        </section>

        {/* ABOUT TED */}
        <section className=" w-[94%] sm:w-[90%] mx-auto h-[100%] bg-[#ffffff] mt-6 pt-4 flex flex-col items-center justify-center gap-y-8 sm:gap-y-10 font-[Poppins]">
            <div className="flex flex-col items-center justify-center gap-y-1 text-center">
                <h1 className='text-[36px] text-center tracking-wider sm:text-[48px] font-[600] leading-[72px] text-[#0B0B0B]'>ABOUT <span className='text-[#EB0028]'>TED</span></h1>
                <span className='bg-[#EB0028] text-[20px] sm:text-[22px] font-[600] leading-[32px] text-[#ffffff] px-[24px] py-[2px]'>Ideas worth spreading</span>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-4">
                <p className='font-[Poppins] font-[500] text-[18px] sm:text-[20px] text-[#0B0B0B] leading-[32px] sm:leading-[36px] fontSizing'>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.</p>
                <p className="font-[Poppins] font-[500] text-[18px] sm:text-[20px] text-[#0B0B0B] leading-[28px] sm:leading-[32px] fontSizing">The annual TED Conference takes place each spring in Vancouver, British Columbia. TED’s media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities. Follow TED on Twitter <a href="https://twitter.com/TEDTalks" className='text-[#EB0028] hover:underline font-[600]'>https://twitter.com/TEDTalks</a> or on Facebook at <a href='https://www.facebook.com/TED' className='text-[#EB0028] hover:underline font-[600]'>https://www.facebook.com/TED</a></p>
            </div>
        </section>

        {/* THEME */}
        <section className='font-[Poppins] w-[100%] mx-auto h-[100%] mt-10 py-8 themeBG'>
            <div className="w-[100%] flex justify-center items-center text-center mb-6">
                <h1 className='text-[36px] sm:text-[48px] text-center font-[600] leading-[72px] text-[#EB0028]'>T<span className='text-[#ffffff] tracking-wider'>HEME</span></h1>
            </div>
            <div className="w-[100%] h-[100%] flex flex-col lg:flex-row items-center justify-center px-3 tedThemePadding lg:px-10">
                <div className="tedThemeBG w-[98%] sm:w-[94%] md:w-[70%] lg:w-[50%] flex justify-center items-center">
                    <img src={TedTheme} alt="TedTheme" className='w-[80%]'/>
                </div>
                <div className="w-[100%] lg:w-[50%] flex flex-col items-start justify-center gap-y-4 font-[Poppins] font-[500] text-[18px] sm:text-[20px] text-[#0B0B0B] leading-[28px] sm:leading-[32px] fontSizing">
                    <p className=' text-[#ffffff]'>What is it that defines who or what a person becomes during the time they have here on earth? Is it that nature that, despite all of our trials and tribulations, triumphs? Or is it that the pomp and circumstance of life prevails no matter what. Our actions define us, and our environment is a byproduct of culture. One could say the difference between identical genetics is that of upbringing and nurture. One could say that an individual is a battleground on which nature and nurture fight for dominance.</p>
                    <p className="text-[#ffffff]">At TEDx IARE, let's explore nature vs. nurture, put them in harmony and overcome our own limitations.</p>
                </div>
            </div>
        </section>

        {/* SPEAKERS */}
        <section className='w-[100%] h-[100%] bg-[#0B0B0B] py-8 gap-y-6 sm:gap-y-8'>
            <div className="w-[100%] flex justify-center items-center text-center mb-6">
                <h1 className='text-[36px] sm:text-[48px] text-center font-[600] leading-[72px] text-[#EB0028]'>S<span className='text-[#ffffff] tracking-wider'>PEAKERS</span></h1>
            </div>
            <div className=" w-[94%] sm:w-[90%] mx-auto grid ">
                {
                    speakers.map((speaker)=>{
                        return (
                            <Speaker key={uuidv4()} {...speaker}/>
                        )
                    })
                }
            </div>
        </section>

        {/* EVENTS SCHEDULES - WATCH BY MODEL */}
        <section className="w-[100%] h-[100%] bg-[#ffffff]">
            <div className="w-[100%] h-[100%] flex flex-col items-start md:items-center justify-center md:flex-row py-6 md:py-4 gap-y-4">
                <div className="w-[94%] sm:w-[80%] md:w-[50%] py-6 flex justify-center items-center bg-[#EB0028] rounded-br-[6rem]">
                    <p className='text-[24px] md:text-[30px] w-[90%] md:w-[80%] mx-auto md:leading-[36px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[56px] text-[#ffffff] font-[600] font-[Poppins] tracking-wider'>Watch out this space for the schedule!</p>
                </div>
                <div className="w-[94%] md:w-[50%] h-[320px] scheduleImg sm:h-[450px] md:h-[330px] lg:h-[400px] xl:h-[400px] 2xl:h-[470px] flex justify-center items-center relative z-[0]">
                    <img src={Mic} alt="Mic" className=' w-[80%] sm:w-[70%] absolute top-[10px] sm:top-[80px] md:top-[80px] lg:top-[20px] xl:top-[20px] 2xl:top-[0px] z-[0]' />
                </div>
            </div>
        </section>

        {/* EVENTS SCHEDULE - TIMETABLE */}
        {/* <section className='w-[100%] h-[100%] bg-[#ffffff] my-4'>
            <div className="w-[100%] flex justify-center items-center text-center mb-6">
                <h1 className='text-[32px] sm:text-[48px] text-center font-[600] leading-[48px] md:leading-[72px] text-[#0B0B0B]'>SCHEDULED <span className='text-[#EB0028] tracking-wider'>TALKS</span></h1>
            </div>
            <div className="timetableOuter w-[90%] h-[100%] mx-auto my-2 overflow-x-scroll">
                <div className="timetableWrapper w-[2400px] h-[400px] flex flex-row items-start justify-start sm:px-[4rem] bg-red-800">
                    {
                        schedule.map((scheduled)=>{
                            return (
                                <Schedule key={uuidv4()} {...scheduled}/>
                            )
                        })
                    }
                </div>
            </div>
        </section> */}

        {/* FAQ */}
        <section className="w-[100%] h-[100%] relative z-[10] bg-[#0B0B0B] py-8 gap-y-6 sm:gap-y-8 px-6">
            <div className="w-[100%] flex justify-center items-center text-center mb-6">
                <h1 className='text-[32px] sm:text-[48px] text-center font-[600] leading-[48px] md:leading-[72px] text-[#ffffff]'>FREQUENTLY ASKED <span className='text-[#EB0028] tracking-wider'>QUESTIONS</span></h1>
            </div>
            <div className="flex flex-col gap-y-4 items-center justify-center w-[100%]">
                {
                    questions.map((question)=>{
                        return (
                            <FAQ key={uuidv4()} {...question}/>
                        )
                    })
                }
            </div>
        </section>

    </div>
  );
}

export default Home


// grid-cols-2 grid-rows-4 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:grid-rows-3 xl:grid-rows-2 mt-8 gridSystem