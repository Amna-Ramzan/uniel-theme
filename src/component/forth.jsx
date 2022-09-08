import React from 'react'
// import Pic3 from '../images/presentation.svg'
export default function Forth(probs) {
  return (
  
    <div  style={{background:probs.data.color,color:probs.data.back}} id='about' className='md:w-[18%] w-[45%] sm:w-[30%] h-[53vh]  sm:h-[49vh] xl:mr-[0px]  mr-[3.25%] border border-black '>
        <img src={probs.data.src} className='w-[60%] ml-[15%] mt-[8vh]' alt="" />
        <h1 className='font-bold mt-[13vh] ml-[8%]'>━</h1>
        <p className='font-bold tracking-widest mt-[2vh] ml-[8%] text-[16px]'>{probs.data.p1}</p>
    </div>
  
    
  )
}
