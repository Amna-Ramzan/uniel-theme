import React from 'react'
import Navbar from "./component/navbar"
import First from './component/first'
import Slider from './component/slider'
// import Sec from './component/sec'
import Third from './component/third'
import Forth from './component/forth'
import Pic3 from './images/presentation.svg'
import Pic4 from './images/responsive.svg'
import Pic5 from './images/rocket.svg'
import Pic6 from './images/archery.svg'
import Five from './component/five'
import Six from './component/six'
import Seven from './component/seven'
import Eightclients from './component/eight-clients'
import "./main.css"

export default function App() {
  return (
    <>
      <Navbar />
      <First />
      <Slider/>
      {/* <Sec /> */}
      <Third />
      <div className='lg:h-[65vh] sm:h-[103vh] h-[170vh] w-[100%] justify-center flex'>
        <div className='lg:w-[75%] w-[95%] flex flex-wrap md:flex-nowrap  md:justify-between'>
          <Forth data={{ src: Pic3, p1: "MARKETING" }} />
          <Forth data={{ src: Pic6, p1: "BRANDING",color:"#DB4140",back:"white" }} />
          <Forth data={{ src: Pic5, p1: "MOTION" }} />
          <Forth data={{ src: Pic4, p1: "UI DESIGN" }} />
          <Forth data={{ src: Pic3, p1: "UX DESIGN" }} />
        </div>
      </div>
      <Five />
      <Six/>
      <Seven/>
      <Eightclients/>
      
    </>
  )
}
