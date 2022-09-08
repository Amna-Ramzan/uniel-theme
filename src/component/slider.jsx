import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Pic from '../images/slider1.jpg'
import Pic2 from '../images/slider2.jpg'
import { Pagination, Navigation } from "swiper";


export default function Slider() {
    return (
        <div id='project' className='sm:h-[110vh]  h-[160vh] w-[100%]  bg-[#D8413F] flex items-center'>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper sm:h-[80vh] h-[150vh] "
                >

                    <SwiperSlide className='flex-col sm:flex-row border-[0px] mt-[0vh]'>
                        <div className='sm:w-[50%] w-[100%] h-[100%]  bg-black-300'>
                            <img src={Pic} alt="" />
                        </div>
                        <div className='sm:w-[50%] w-[100%] sm:h-[100%]  bg-[#E74752] text-left'>
                            <p className='font-bold text-white ml-[13%] mt-[16vh] sm:mt-[2vh] lg:mt-[16vh]    '>FEATURED PROJECT</p>
                            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Coloca Branding</p>
                            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p className='font-bold text-white ml-[13%] mt-[3vh] lg:mt-[3vh] sm:mt-[1vh]'>__</p>
                            <p className='text-white font-bold ml-[13%] mt-[1vh] mb-[5vh] md:mb[0vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
                        </div>

                    </SwiperSlide>
                    {/* -------------------- */}
                    <SwiperSlide className='flex-col sm:flex-row  mt-[0vh]' >
                        <div className='sm:w-[50%] w-[100%] h-[100%]  bg-black-300'>
                            <img src={Pic2} alt="" />
                        </div>
                        <div className='sm:w-[50%] w-[100%] h-[100%] bg-[#E74752] text-left'>
                            <p className='font-bold text-white ml-[13%] mt-[16vh] sm:mt-[2vh] lg:mt-[16vh]'>FEATURED PROJECT</p>
                            <p className='text-[50px] font-black text-white ml-[13%] mt-[5vh]'>Banking App</p>
                            <p className='w-[75%] text-left text-[15px] ml-[13%] text-white mt-[2vh] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p className='font-bold text-white ml-[13%] mt-[3vh]'>__</p>
                            <p className='text-white font-bold ml-[13%] mt-[1vh] cursor-pointer hover:translate-x-7 duration-500'>LIVE SITE &nbsp;&nbsp; → </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    )
}
