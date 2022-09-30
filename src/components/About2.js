import React from 'react'

function About2() {
  return (
    <div name= 'tokenomics' className="bg-[#D5DFED] dark:bg-transparent">
     <div className="relative py-5">
              {/* background image */}
          <img src={require('../images/sidebg.png')} className="w-full h-full object-cover absolute rounded-lg hidden:imp dark:imp"/>
          <div>
          <div className="text-black dark:text-white font-[montserrat] m-8 p-8">
                <h1 className="font-bold leading-2 tracking-wide text-3xl text-center">TOKENOMICS</h1>
                </div>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 m-8 py-5 dark:text-white gap-3 justify-center place-items-center">
           
            <div className="h-[290px] lg:w-[356px] m-[46px] p-[16px] w-72  bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg" data-aos="fade-up-left">
                <h1 className="font-bold tracking-wide text-2xl uppercase">Buy Tax</h1>
                <div class="w-[150px] dark:bg-gray-200 bg-gray-300 rounded-full">
                <div class="bg-[#FF1700] text-xs font-medium text-black mt-3 text-center p-0.5 leading-none rounded-l-[50px] w-[25px]"> 25%</div>
                </div>
                <ul className="font-[nunito] mt-3">
                    <li>2% Burn</li>
                    <li>2% Liquidity in BNB</li>
                    <li>1% Development Guard BNB</li>
                    <li>3% Insurance Guard in BNB</li>
                    <li>3% Goes to All Token Holders in BNB</li>
                    <li>4% Token for Pool Rewards under Reserve Bank</li>
                </ul>
            </div>

            <div className="h-[260px] lg:w-[356px] m-[46px] p-[16px] w-72  bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg" data-aos="slide-up">
                <h1 className="font-bold tracking-wide text-2xl uppercase">Sell Tax</h1>
                <div class="w-[150px] dark:bg-gray-200 bg-gray-300 rounded-full">
                <div class="bg-[#FF1700] text-xs font-medium text-black mt-3 text-center p-0.5 leading-none rounded-l-full w-[20px]"> 20%</div>
                </div>
                <ul className="font-[nunito] mt-3">
                    <li>2% Burn</li>
                    <li>4% Liquidity in BNB</li>
                    <li>1% Development Guard BNB</li>
                    <li>4% Insurance Guard in BNB</li>
                    <li>4% Goes to All Token Holders in BNB</li>
                </ul>
            </div>

            <div className="h-[280px] lg:w-[356px] m-[46px] p-[16px] w-72  bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg" data-aos="fade-down-right">
                <h1 className="font-bold tracking-wide text-2xl uppercase">REBASE Info</h1>
                <div class="w-[150px] dark:bg-gray-200 bg-gray-300 rounded-full">
                <div class="bg-[#FF1700] text-xs font-medium text-black mt-3 text-center p-0.5 leading-none rounded-l-full w-[19px]"> 18.7%</div>
                </div>
                <ul className="font-[nunito] mt-3">
                <li>25,999,999</li>
                    <li>300%</li>
                    <li>26,000,000</li>
                    <li>150%</li>
                    <li>33,000,000</li>
                    <li>75%</li>
                </ul>
            </div>
          </div>
     </div>
    </div>
    
  )
}

export default About2