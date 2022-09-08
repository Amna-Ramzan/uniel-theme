import React from 'react'

export default function six() {
    return (
        <>

            {/* <div id='' className='h-[100vh] border-[5px] border-pink-600 w-full'> */}

            <div className='md:flex-row flex flex-col  md:h-[100vh] h-[85vh] '>
                <div className='flex flex-col md:h-[70vh] h-[35vh] md:mt-[150px] mt-[8vh] md:w-[20%] w-[90%]  md:ml-[190px] ml-[3%]'>
                    <h1 className='text-gray-800 md:text-[50px] text-[40px] font-bold'> Key Facts </h1>
                    <h1 className='md:text-[250px] text-[90px] text-[rgb(219,65,64)] font-black'> 75</h1>
                    <div className='bg-gray-700 h-[3px] w-[20px] '></div>
                    <p className='md:mt-[20px] mt-[16px] text-gray-700 font-bold tracking-widest'> SUCCESSFUL PROJECTS </p>
                </div>
                <div className='flex  h-[45vh]  w-[80%] '>
                    <div className='flex flex-col   md:h-[70vh] h-[40vh] md:mt-[210px] md:w-[24%] w-[40%] md:ml-[105px] ml-[4%] '>
                        <h1 className='text-gray-800 md:mt-[120px] mt-[4vh] md:text-xl text-[23px] font-bold'> Designed For Growth</h1>
                        <h1 className='md:text-[140px] text-[70px] text-gray-700 font-black'> 24 </h1>
                        <div className='bg-gray-700 h-[3px] w-[20px] md:mt-[35px] mt-[20px]'></div>
                        <p className='mt-[20px] text-gray-700 tracking-widest font-bold'> EMPLOYEES </p>
                    </div>
                    <div className='flex flex-col  md:h-[70vh] h-[40vh] md:mt-[215px] md:w-[22%] w-[40%] '>
                        <h1 className='md:text-[130px] text-[70px] text-gray-700 md:mt-[170px] mt-[9vh] font-bold'> 16 </h1>
                        <div className='bg-gray-700 h-[3px] w-[20px] md:mt-[32px] mt-[20px]'></div>
                        <p className='mt-[20px] text-gray-700 font-bold'>  YEARS  </p>
                    </div>
                    <div className='flex flex-col  md:h-[70vh] h-[40vh] md:mt-[225px]  w-[20%] '>
                        <h1 className='md:text-[120px] text-[70px] text-gray-700 md:mt-[170px] mt-[8.5vh] font-bold'> 3 </h1>
                        <div className='bg-gray-700 h-[3px] w-[20px] mt-[32px]'></div>
                        <p className='mt-[20px] text-gray-700 font-bold'> LOCATIONS </p>
                    </div>
                </div>


            </div>
            {/* </div> */}
        </>
    )
}
