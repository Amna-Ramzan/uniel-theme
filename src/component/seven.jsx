import React from 'react'
import Img1 from '../images/girl.jpg'
import Img2 from '../images/boy.jpg'
import Img3 from '../images/men.jpg'
import Img4 from '../images/source.jpg'
import Card from './card'


export default function team() {
  return (
     <>
     <div id='team' className='bg-[rgb(219,65,64)] text-white h-[110vh]'>
        <h1 className='pt-[120px] text-[53px] ml-[180px] font-black '>Our Team</h1>
        <div className='flex ml-[10%] '>
              <Card  data={{src:Img2}}/>
              <Card  data={{src:Img1}}/>
              <Card  data={{src:Img4 ,h:"40vh"}} />
              <Card  data={{src:Img3}}/>
              <div className='flex pl-[20px] justify-evenly flex-col border-[2px] h-[52vh] mt-[70px] w-[15%] ml-[30px]'>
               <h1 className='text-2xl font-bold'>Join Us</h1>
               <p className='font-bold'>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit, sed do <br /> eiusmod tempor <br /> incididunt ipsum dolor.</p>
               <div className='bg-white h-[3px] w-[20px] mt-[60px] '></div>
               <p className='text-white font-bold ml-[2%] mt-] cursor-pointer hover:translate-x-7 duration-300'>LIVE SITE &nbsp;&nbsp; → </p>
              </div>



        </div>
       


     </div>
     </>
  )
}