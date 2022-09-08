import React from 'react'
import Client from './client'
import L1 from '../images/logo-1.svg'
import L2 from '../images/logo-2.svg'
import L3 from '../images/logo-3.svg'
import L4 from '../images/logo-4.svg'
import L5 from '../images/logo-5.svg'
import L6 from '../images/logo-6.svg'





export default function Eightclients() {
  return (
    <div className='w-[100%] md:h-[120vh] sm:h-[180vh] h-[370vh] border flex justify-center items-center'>
      <div className='md:w-[75%] sm:w-[92%] w-[98%] md:h-[75vh] sm:h-[160vh] h-[370vh] md:flex-row flex  justify-between md:justify-start flex-wrap  '>
        <div className=' md:w-[22%] md:h-[250px] sm:w-[48%] w-[100%] h-[350px] sm:h-[280px] mr-[3%] '>
          <p className='font-bold text-[15px] tracking-widest mt-[]'>SELECTED</p>
          <p className='font-bold text-[50px] mt-[4vh]'>Clients</p>
          <p className='font-bold text-[25px] text-[#DB4140] mt-[4vh]'>─</p>
          <p className='text-[#DB4140] font-bold text-[18px]  mt-[2vh] mb-[5vh] md:mb[0vh] cursor-pointer hover:translate-x-7 duration-500'>CONTACT &nbsp;&nbsp; → </p>
        </div>
        <Client data={{margin:'0px',src:L1,bg:'#DB4140',color:'white'}} />
        <Client data={{src:L2}} />
        <Client data={{src:L3}} />
        <Client data={{src:L4,margin:'0px'}}/>
        <Client data={{src:L5}} />
        
        <Client data={{src:L6}} />
      </div>
    </div>
  )
}
