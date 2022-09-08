import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Pic from '../images/slider1.jpg'
import Pic2 from '../images/slider2.jpg'

export default function Sec() {
  return (
    <div id='project' className='md:h-[110vh]  h-[160vh] w-[100%]  bg-[#D8413F]'>
      {/* <> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:h-[95vh]"  >
        <SwiperSlide className='flex-col md:flex-row md:mt-[17vh] mt-[10vh]'>
          <div className='md:w-[50%] w-[100%] h-[100%] border bg-black-300'>
            <img src={Pic} alt="" />
          </div>
          <div className='md:w-[50%] w-[100%] md:h-[100%]  bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh] '>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Coloca Branding</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] mb-[5vh] md:mb[0vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>
        </SwiperSlide>
        {/* -------------------- */}
        <SwiperSlide className='flex-col md:flex-row md:mt-[17vh] mt-[10vh]' >
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic2} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Banking App</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>
        </SwiperSlide>
        {/* ---------------- */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Coloca Branding</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>
        </SwiperSlide>
        {/* -------------------- */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic2} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Banking App</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>
        </SwiperSlide>
        {/* --------------------- */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Coloca Branding</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>

        </SwiperSlide>
        {/* -------------- */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic2} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Banking App</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>

        </SwiperSlide>
        {/* --------------- */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Coloca Branding</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>

        </SwiperSlide>
        {/* ------------------------ */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic2} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Banking App</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
          </div>
        </SwiperSlide>
        {/* ----------------- */}
        <SwiperSlide>
          <div className='w-[50%] h-[100%] border bg-black-300'>
            <img src={Pic} alt="" />
          </div>
          <div className='w-[50%] h-[100%] bg-[#E74752] text-left'>
            <p className='font-bold text-white ml-[13%] mt-[16vh]'>FEATURED PROJECT</p>
            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Coloca Branding</p>
            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500 '>LIVE SITE &nbsp;&nbsp; → </p>
          </div>
        </SwiperSlide>
        {/* --------------- */}
      </Swiper>
      {/* </> */}
    </div>
  )
}
