import React from 'react'
import Pic5 from '../images/construction.jpg'
export default function Five() {
    return (
        <div id='about' className='w-[100%] lg:h-[105vh] h-[160vh]  bg-[#DB4140] flex justify-center items-center'>
            <div className='lg:w-[76%] w-[100%] lg:h-[73vh] h-[146vh]  flex-col  flex items-center xl:flex-row'>
                <div className='lg:w-[50%] w-[95%]  h-[100%] '>
                    <p className='font-bold text-[15px] tracking-widest text-white'>THE STORY SO FAR</p>
                    <h1 className='text-[50px] font-bold text-white mt-[5vh]'>About Us</h1>
                    <p className='text-[16px] w-[82%] text-white'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.<br />
                    </p>
                    <p className='text-[16px] w-[82%] text-white mt-[3vh]'>Duis aute irure dolor in quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    <p className='text-[16px] w-[82%] text-white mt-[3vh]' >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <p className='font-bold text-white mt-[8vh]'>━</p>
                    <p className='text-white font-bold  mt-[1vh] cursor-pointer hover:translate-x-5 duration-500'>CONTACT &nbsp;&nbsp; → </p>
                </div>
                <div className='lg:w-[50%] w-[95%] mt-[5vh] lg:mt-[0px] h-[100%] overflow-hidden'>
                    <img src={Pic5} className='' alt="" />
                </div>
            </div>
        </div>
    )
}
