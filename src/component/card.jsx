import React from 'react'

export default function card(props) {
    return (
        <>
            <div className='flex flex-col border-[px] h-[52vh] mt-[70px] lg:w-[15%] w-[50%] ml-[30px] '>
                <div className='w-[100%]'><img src={props.data.src} className=' h-[100%] ' alt="" /></div>
                <div className='border-[2px] h-[24vh]' style={{height:props.data.h}}>
                    <h1 className='text-[22px] mt-[25px] ml-[15px] mb-[10px] font-bold'>Alex Tomson</h1>
                    <h1 className='ml-[15px] mb-[10px]'>Art Director</h1>
                    <div className='flex justify-evenly cursor-pointer '>
                        <i class="fab fa-facebook-f hover:text-gray-400"></i>
                        <i class="fab fa-twitter hover:text-gray-400"></i>
                        <i class="fab fa-dribbble hover:text-gray-400"></i>
                        <i class="fab fa-pinterest hover:text-gray-400"></i>
                        <i class="fab fa-google-plus-g hover:text-gray-400"></i>

                    </div>
                </div>

            </div>
        </>
    )
}