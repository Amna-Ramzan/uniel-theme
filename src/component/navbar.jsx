import React from 'react'
import { Link } from 'react-scroll'
export default function Navbar() {
  return (
    <div className='flex justify-between nav h-[10vh] bg-white items-center'>
        <div className='font-bold text-[24px] ml-[12.4%]'>Uniel</div>
        <ul className=' text-[13px] flex font-black w-[41.3%] mr-[12%] justify-between invisible xl:visible'>
          <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
          <li className='hover:text-orange-600 cursor-pointer tracking-widest'>HOME</li>

          </Link>
          <Link to='project' spy={true} smooth={true} offset={50} duration={500}>
          <li  className='hover:text-orange-600 cursor-pointer tracking-widest'>PROJECTS</li>
          </Link>
          <Link to='services' spy={true} smooth={true} offset={50} duration={500}>
          <li className='hover:text-orange-600 cursor-pointer tracking-widest'>SERVICES</li>

          </Link>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
          <li  className='hover:text-orange-600 cursor-pointer tracking-widest'>ABOUT</li>

          </Link>
          <Link to='team' spy={true} smooth={true} offset={50} duration={500}>
          <li className='hover:text-orange-600 cursor-pointer tracking-widest'>TEAM</li>

          </Link>
          <Link to='clients' spy={true} smooth={true} offset={50} duration={500}>
          <li className='hover:text-orange-600 cursor-pointer  tracking-widest'>CLIENTS</li>

          </Link>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
          <li className='hover:text-orange-600 cursor-pointer tracking-widest'>CONTACT</li>

          </Link>
        </ul>
    </div>
  )
}
