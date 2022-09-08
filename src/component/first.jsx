import React from 'react'
// import Aos from "aos"
// import "aos/dist/aos.css";
import Img1 from "../images/social.svg"
export default function First() {
  return (
    <>
      <div id='home' className='flex w-[100%] flex-col lg:flex-row' >
        <div className='w-[100%] lg:w-[48%] h-[95vh] flex justify-end  '>
          <img src={Img1} className='lg:w-[75%] w-[100%] h-[74%] mt-[11%] ' />

        </div>
        <div className='lg:w-[52%] w-[100] md:h-[95vh] h-[50vh] '>
          <h1 className='md:ml-[8%] ml-[4%] text-[50px] font-bold md:w-[45%] w-[100%] md:mt-[20vh] mt-[-2vh]'>We Design & Build Creative Brands</h1>
          <p className='md:ml-[8%] ml-[4%] text-[25px] md:w-[55%] w-[100%]'>Duis aute irure dolor reprehenderit voluptate velit esse dolore nulla pariatur</p>
          <button className='md:ml-[8%] ml-[4%] w-[22%] h-[7vh] border border-white  font-bold bg-[#d72b2bd6] text-white hover:bg-[#d72b2bfa] mt-[6vh]'>LEARN MORE</button>
        </div>
      </div>
    </>
  )
}
