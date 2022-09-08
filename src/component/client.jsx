import React from 'react'


export default function Client(props) {
  return (
    <div className=' md:w-[22%] md:h-[250px] sm:h-[280px] h-[380px] sm:w-[48%] w-[100%] md:ml-[3%] bg-[#F8F8FA] ' 
    style={{marginLeft:props.data.margin,backgroundColor:props.data.bg}}
    >
        <img src={props.data.src} className='w-[80%] ml-[10%] mt-[5vh]' alt="" />
        <p className='font-bold text-[25px] text-[#DB4140] mt-[vh] ml-[50%]' style={{color:props.data.color}}>─</p>
        <p className='sm:ml-[43%] ml-[47%] font-bold' style={{color:props.data.color}}>DEFAULT</p>
        
    </div>
  )
}
