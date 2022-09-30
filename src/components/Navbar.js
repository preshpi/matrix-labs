import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu  } from "react-icons/ai";
import { Link, animateScroll as scroll } from 'react-scroll'
import Toggle from '../darkmode/toggle';
function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = ()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 fixed drop-shadow-lg'>
     <div className='px-2 flex justify-between items-center w-full h-full bg-[#DCE7F5] text-black dark:text-white shadow-lg dark:bg-[#000101] dark:opacity-75 cursor-pointer'>     
        
                  {/* logo image */}
         <div className='flex items-center'>
            <img className="w-40 " src="https://res.cloudinary.com/dpokiomqq/image/upload/v1664461959/LODICOIN_BURNER-removebg-preview_xu6oky.png"/>
         </div>
        
            <ul className='hidden md:flex pr-4 uppercase gap-5 mx-5 dark:text-[#ffff] text-black nav-text'>
              <a href='/' target="_blank" className="mt-4">Home</a>

              <a><Link to="about"  smooth={true}  duration={500}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  About
                  </Link>
              </a>     

              <a><Link to="tokenomics"  smooth={true} offset={-200} duration={500}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Tokenomics
                  </Link>
              </a>     

              <a><Link to="service"  smooth={true} offset={-200} duration={500}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  services
                  </Link>
              </a>  

              <a><Link to="how"  smooth={true} offset={-100} duration={500}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  How
                  </Link>
              </a>     

              <a><Link to="contact"  smooth={true} offset={50} duration={500}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Contact
                  </Link>
              </a>   

              <a href="/dapp" target="_blank">
              <button className="px-3 py-1 bg-[#FF1700] rounded mt-3">DAPP</button>           
              </a> 

              <Toggle className="toggle"/>  
                      
            </ul>
        
            <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
          {!nav ? <AiOutlineMenu className="w-8 h-8 text-[#000101] dark:text-[#FEFFFE] "/>  :  <AiOutlineClose className="w-8 h-8 text-[#000101] dark:text-[#FEFFFE]  hover:text-[#FF1700] dark:hover:text-[#FF1700]"/> }
              
            </div>
      
     </div>

                      {/* mobile navbar */}
    <ul className={!nav ? 'hidden' : 'absolute dark:bg-[#000101] bg-[#F5F5F5]  w-full px-8 h-74 shadow-full cursor-pointer rounded-lg shadow p-5'}>
      <div className='flex flex-col my-4 nav-text2'>
            <li className="w-full mb-3 text-[#000101] dark:text-[#ffff] hover:bg-[#f2f0f0] dark:hover:bg-gray-200 rounded-lg dark:hover:text-black hover:mx-2 leading-6 text-base uppercase cursor-pointer"><a href='/'>Home</a></li>
            <li className="w-full mb-3 text-[#000101] dark:text-[#ffff] hover:bg-[#f2f0f0] dark:hover:bg-gray-200 rounded-lg dark:hover:text-black hover:mx-2 leading-6 text-base uppercase"><Link onClick={handleClose} to="about"  smooth={true} offset={-50} duration={500}>About</Link></li>
            <li className="w-full mb-3 text-[#000101] dark:text-[#ffff] hover:bg-[#f2f0f0] dark:hover:bg-gray-200 rounded-lg dark:hover:text-black hover:mx-2 leading-6 text-base uppercase"><Link onClick={handleClose} to="tokenomics"  smooth={true} offset={-30} duration={500}>Tokenomics</Link></li>
            <li className="w-full mb-3 text-[#000101] dark:text-[#ffff] hover:bg-[#f2f0f0] dark:hover:bg-gray-200 rounded-lg dark:hover:text-black hover:mx-2 leading-6 text-base uppercase"><Link onClick={handleClose} to="service" smooth={true} offset={-200} duration={500}>Our services</Link></li>
            <li className="w-full mb-3 text-[#000101] dark:text-[#ffff] hover:bg-[#f2f0f0] dark:hover:bg-gray-200 rounded-lg dark:hover:text-black hover:mx-2 leading-6 text-base uppercase"><Link onClick={handleClose} to="how" smooth={true} offset={-100} duration={500}>How it works</Link></li>
            <li className="w-full mb-3 text-[#000101] dark:text-[#ffff] hover:bg-[#f2f0f0] dark:hover:bg-gray-200 rounded-lg dark:hover:text-black hover:mx-2 leading-6 text-base uppercase"><Link onClick={handleClose} to="contact"  smooth={true} offset={50} duration={500}>Contact</Link></li>
            <a href="/dapp" target="_blank" >
              <button className="px-3 py-1 bg-[#FF1700] rounded hover:text-white">DAPP</button>
            </a> 
            <Toggle/>
      </div>
    </ul>
    </div>
   
  )
}

export default Navbar