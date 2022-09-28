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
              <ul>
                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                  <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Token Investment</li>
                </div>

                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                 <li>Perpetual Trading</li> 
                </div>

                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                 <li>Cross-chain Swap</li>  
                </div>
                
                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Make Liquidity</li>  
                </div>
                
                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Provide Liquidity</li>  
                </div>

                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                 <li>Token Locked</li>   
                </div>
              </ul>

              <ul>
                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6  py-4 px-0 justify-center rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                  <li>Yield Farming</li>
                </div>
                
                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>Staking Pool</li>
                </div>

                <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                <li>NFT</li>
                </div>

                 <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                 <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                 <li className="">Lodinft Marketplace</li>  
                </div>

                  <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                  <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                  <li>Lodi Social</li> 
                 </div>
                
                 <div className="flex bg-[#CED8E6] dark:bg-[#1E1F1F] dark:text-white lg:py-6 py-4 px-0 rounded-[20px] text-center m-5">
                 <FaStarOfLife className="mx-1 fill-black dark:fill-[#FF1700]"/>
                  <li>Lodi Academy</li>
                  </div>
                
                
              </ul>
            </div>

          {/* <div className="grid place-items-center ">
            <div className="grid lg:grid-cols-3 lg:gap-5">
              <div className="h-[479px] lg:h-[500px] lg:w-[356px] m-[46px] p-[16px] w-96 text-[#3c3b3b] bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg">
                <div className=" grid place-items-center">
                <img src={require('../images/dev.png')} className="mt-3 svg fill-slate-400"/>
                </div>
                <h3 className="font-[montserrat] text-xl dark:text-white font-bold tracking-wide text-left leading-8 mt-3">Dapp Development</h3>
                <p className="font-[montserrat] tracking-wider leading-6 mb-3 h-[112px] text-[#3c3b3b] w-[356px] lg:w-[300px] m-[8px] dark:text-[#D2D3D3] mt-3">We focus on pragmatic approaches and solutions for using Blockchain for Integration in B2B ecosystems. We believe in a holistic approach where we guide you from ideation to realization of your Blockchain for Integration project.</p>
              </div>
              <div className="h-[439px] lg:h-[500px] lg:w-[356px] m-[46px] p-[16px] w-96 text-[#3c3b3b] bg-[#E9E8E9] dark:bg-[#1E1F1F] mb-8 rounded-[20px] shadow-lg">
                <div className=" grid place-items-center">
                <img src={require('../images/devv.png')} className="mt-3 svg"/>
                </div>
                <h3 className="font-[montserrat] text-xl dark:text-white font-bold tracking-wide text-left leading-8 mt-3">Smart Contract Development</h3>
                <p className="font-[montserrat] tracking-wider leading-6 mb-3 h-[112px] w-[346px] lg:w-[300px]  m-[8px] dark:text-[#D2D3D3] mt-3">Professional Blockchain smart contract development services and consultancy for smart contract architecture, design, and development</p>
              </div>
              <div className="h-[479px] lg:h-[500px] lg:w-[356px] m-[46px] p-[16px] w-96 text-[#3c3b3b] bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg">
                <div className=" grid place-items-center">
                <img src={require('../images/devvv.png')} className="mt-3 svg"/>
                </div>
                <h3 className="font-[montserrat] text-xl dark:text-white font-bold tracking-wide text-left leading-8 mt-3">Website Development</h3>
                <p className="font-[montserrat] tracking-wider leading-6 mb-3 h-[112px] w-[346px] lg:w-[300px] m-[8px] dark:text-[#D2D3D3]">We offer a wide range of web development services with latest web development features, including up-to-date guidelines, search friendliness for search accessibility, compatibility with a screen reader for visually impaired, web semantics, and rich snippets.</p>
              </div>
            </div>
          </div> */}
      </div>     
    </div>
  )
}

export default Services