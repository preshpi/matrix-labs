import React from 'react'
import { FaStarOfLife } from 'react-icons/fa';
function Services() {
  return (
    <div name='service'>
      <div className="relative  m-8 py-5">
          <h1 className="font-[montserrat] lg:text-3xl text-2xl leading-8 tracking-wide dark:text-white uppercase w-[695px] h-[43px]">services provided by</h1>
          <h1 className="font-[montserrat] text-4xl font-bold leadeing-9 tracking-widest dark:text-[#FF1700] w-[695px] h-[56px] block">LODICOIN</h1>  
          <p className="text-3xl text-center font-semibold tracking-wider mt-8 leading-5 dark:text-white">Swap Tokens</p>
            
          <div className="grid grid-cols-2 mt-8 text-center">

            {/* List 1 */}
            <ul>
              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-right">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>Token Investment</li>
              </div>

              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-right">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Perpetual Trading</li> 
              </div>

              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-right">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Cross-chain Swap</li>  
              </div>
              
              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-right">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>Make Liquidity</li>  
              </div>
              
              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-right">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>Provide Liquidity</li>  
              </div>

              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-right">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Token Locked</li>   
              </div>
            </ul>

            {/* List 2 */}
            <ul>
              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6  py-4 px-0  rounded-[20px] m-5" data-aos="fade-left">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Yield Farming</li>
              </div>
              
              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-left">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>Staking Pool</li>
              </div>

              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-left">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>NFT</li>
              </div>

                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-left">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li className="">Lodinft Marketplace</li>  
              </div>

              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-left">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>Lodi Social</li> 
              </div>
              
              <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5" data-aos="fade-left">
              <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
              <li>Lodi Academy</li>
              </div>    
            </ul>
          </div>
      </div>     
    </div>
  )
}

export default Services