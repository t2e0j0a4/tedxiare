import React, { useState } from 'react'
import TedText from "../Assets/ted-text.svg"
import member from "../Assets/member.svg"
import pastevent from "../Assets/past-event.svg"
import desktop from "../Assets/desktop-image.svg"
import mobile from "../Assets/Frame20.svg"
// import theam from "../assets/themeimage.svg"
import prev from "../Assets/prev.svg"
import next from "../Assets/next.svg"
import linkedin from "../Assets/linkedin.svg"
import aboutbg from "../Assets/about-bg.svg"
import theam from "../Assets/theamlogo.svg"
import theam2 from "../Assets/theam-logo.svg"
import "../index.css"
import "./about.css"
import Navbar from '../Components/Navbar'
import { useEffect } from 'react'
function About() {
  const domains = ["Core", "Content", "Design", "CR/PR", "Digital Marketing", "Logistics", "Marketing", "Web"]
  const [active, setActive] = useState(0)
  const increament = () => setActive(active + 1)
  const decreament = () => setActive(active - 1)
  const checkActive = (e) => {
    setActive(e)
  }
  const prevButton = () => {
    if (active > 0) {
      decreament()
    }


  }
  const nextButton = () => {
    if (active < domains.length - 1) {
      increament()

    }
  }
  const Member = (props) => {
    return (
      <>
        <div className>
          <div>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={props.photo} alt="team member photo" />




          </div>
          <div className='mt-2'>
            <div className="flex md:space-x-1">

              <h4 className='member-name text-md text-[#000000] font-semibold tracking-wider md:text-xl'>{props.name}</h4>
              <a href={props.linkedin}>
                <img className='w-5 md:w-8 sm:w-6' src={linkedin} alt="" />
              </a>
            </div>
            <h5 className='member-role text-xs text-[#EB0028] tracking-wider font-semibold md:text-xs'>{props.role}</h5>
          </div>

        </div>
      </>
    )
  }
  useEffect(() => {
    console.log(active)
  }, [active])

  return (
    <>
      {/* <Navbar /> */}

      <img className='desktop-image hidden md:block' src={desktop} alt="" />
      <img className='mobile-image block md:hidden' src={mobile} alt="" />

      <div className='container mx-auto mt-9 mb-3'>
        {/* <section className='space-x-2 sm:mx-2 space-y-3 mb-10'>
          <span className='ml-2 text-2xl text-black  font-bold tracking-wide md:text-3xl'>What is<span className='text-2xl text-[#dc2626] font-bold md:text-3xl'> TED?</span></span>
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. Follow TED on Twitter <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a> or on Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a> 
          </p>
          <br />
          <span className='ml-2 text-2xl text-black font-bold tracking-wide md:text-3xl'>What is<span className='text-2xl text-[#dc2626] font-bold md:text-3xl'> TEDx?</span></span>
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
          </p> 
          <img className='w-24 md:w-40' src={TedText} alt="TedX" />
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>Organised by curious individuals from the local community, TEDxAmsterdam features live speakers who seek to spark deep conversations and connections. TEDxAmsterdam is organised independently under license from TED.
          </p>
        </section> */}
        <section>
          <div className='flex flex-col items-center my-4'>

            <h3 className='text-3xl sm:text-5xl font-semibold tracking-wide'>ABOUT <span className='text-[#EB0028]'>TEDX</span></h3>
            <div>
              <span className=' text-sm sm:text-lg px-2  text-[#fff] bg-[#EB0028] tracking-widest'>x = independently organized event</span>

            </div>
          </div>
          <p className='mx-2 text-xl text-[#000000] tracking-wider leading-8 about-desc sm:mx-4'>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
          </p>
        </section>
      </div>
      <section className='bg-[#0B0B0B] pt-10 pb-14 sponser-section'>
        <div>
          <h3 className='text-2xl sm:text-4xl font-semibold mb-4 tracking-wide text-[#FFF] text-center'>OUR ESTEEMED <span className='text-[#EB0028]'>SPONSERS</span></h3>
          <div className='scroll-track ml-2 md:ml-9 flex gap-x-6 sm:ml-16 overflow-x-scroll justify-start overflow-y-hidden sponsers-scroll'>
            <img className='sp' src={member} />
            <img src={member} />
            <img src={member} />
            <img src={member} />
            <img src={member} />
            <img src={member} />
          </div>
        </div>

      </section>
      <section className='home_theme_section w-100 pt-8'>
        {/* <img className='absolute z-0 h-50%' src={aboutbg} alt="" /> */}
        <div className='container flex sm:items-center flex-col w-100 z-10'>
          <h6 className='home_theme_heading text-center font-bold text-[#EB0028] tracking-widest text-4xl'>T<span className='text-[#fff]'>HEME</span></h6>
          {/* <img className='sm:w-7/12 pt-4' src={theam} alt="" /> */}
          <div className='hidden flex -space-x-4 w-4/5 sm:block pt-5'>

            <img className='w-full' src={theam} />

          </div>
          <div className='sm:hidden mt-4 text-center '>


            <span className='text-3xl px-1 text-[#fff] bg-[#EB0028] tracking-widest'>NATURE <span className='text-[#000000]'>VS </span>NURTURE</span>

            <img src={theam2} />

          </div>

          <p className=' home_theme_desc font-medium tracking-wider w-full text-[#fff] font-Gilroy  sm:text-center leading-8 mt-2 lg:mt-10 lg:pb-20 lg:text-2xl sm:mt-5 sm:pb-8 text-center'>How do you affect the world around you and how does the world around affect you? Our actions, behaviour, and decisions can have an impact on the people and environment around us. Whether it's choices we make in our personal lives or as a part of a larger community, we all have the power to shape the world in our small ways.
            <br />
            At the same time, the world around us also has a significant impact on us as individuals. The culture, politics, art, and society we live around impacts us in more ways than we realise. One could say that an individual is a battleground on which nature and nurture fight for dominance.
            <br />
            <br />
            Join us at Tedx IARE to listen to perspectives from different walks of life
          </p>

        </div>
      </section>
      <section className='px-3 lg:mx-9'>
        <h2 className=' text-2xl  sm:text-5xl text-center mt-7 font-bold tracking-wider'>MEET OUR <span className='text-[#EB0028]'>TEAM</span></h2>
        <div>
          <div className='flex justify-start gap-y-3 team-flex md:justify-center mt-3 overflow-scroll'>
            {
              domains.map((e, index) => {
                return <>
                  <h6 onClick={() => checkActive(index)} className={active === index ? "active tracking-wider text-xs md:text-xl" : "category tracking-wider text-xs md:text-xl"}>{e}</h6>

                </>
              })
            }
          </div>
          <div className='flex justify-between mt-3 md:hidden'>
            <button><img src={prev} onClick={prevButton} /></button>
            <button><img src={next} onClick={nextButton} /></button>

          </div>
        </div>

        <div style={{ display: active === 0 ? "" : "none" }} className=''>
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />

            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />




          </div>

        </div>
        <div style={{ display: active === 1 ? "" : "none" }} >
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>
        </div>
        <div style={{ display: active === 2 ? "" : "none" }} >
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>

        </div>
        <div style={{ display: active === 3 ? "" : "none" }}>
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>

        </div>
        <div style={{ display: active === 4 ? "" : "none" }}>
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>

        </div>
        <div style={{ display: active === 5 ? "" : "none" }}>
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>

        </div>
        <div style={{ display: active === 6 ? "" : "none" }} >
          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>

        </div>
        <div style={{ display: active === 7 ? "" : "none" }}>

          <div className='flex md:ml-5 md:gap-y-5 xl:gap-y-6 space-x-3 mt-3' >
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

          </div>

          <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />

            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />




          </div>

        </div>
      </section>
      <div className='container mx-auto mt-7'>
        <section className='my-14 flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold sm:text-5xl text-center pb-3'>MEET US <span className='text-[#dc2626]'>HERE</span></h2>
          <iframe className='w-11/12 map mt-5 sm:w-10/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.059126454807!2d78.41553661408612!3d17.599926987951605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecfe1af26dd%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1669179277990!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </>
  )
}

export default About