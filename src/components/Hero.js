import React from 'react'

function Hero() {
  
  return (
    <div name='home' className='w-full before:flex flex-col justify-between p-8'>
    <div className='grid md:grid-cols-2 max-w-[1240px] py-8 m-5' data-aos="slide-up">
      <div className="grid">
        <div className='flex flex-col justify-center md:items-start w-full'>
            <div className="flex">
            <div className="vl mx-3"></div>
            <p className='matrix-text text-2xl dark:text-white block'>LODICOIN</p>    
            </div>
            
            <h1 className='matrix-text py-3 lg:text-5xl text-4xl font-bold leading-10 dark:text-white'>WE CREATE</h1>
            <p className="tracking-wide text-black text-lg font-semibold m-4 block dark:text-white lg:leading-8 leading-7 lg:h-52">
             LSP or Lodicoin Staking Protocol is a decentralize revolutionary approach to a financial asset, that makes staking more profitable and provides $LODI token holders with a high realistic crypto return. A decentralized coin on the Binance Smart Chain that is backed by the $LODICOIN Bank Reserve or BBR and is controlled by algorithms through APY, automatic staking, and compounding in your wallet, and multi-chain smart contracts providing the building blocks for the next generation of Defi development.
            </p>
        </div> 

                
        
        
              {/* Buttons */}
              {/* <div className="gap-5 m-5  grid lg:flex text-center">
              <a href="#_" class="rounded-md px-6 lg:px-8 py-3  overflow-hidden relative cursor-pointer border-2 font-medium border-black  dark:border-[#FF1700] hover:bg-transparent mx-3 shadow-lg">
              <span class="relative text-[#FF1700] dark:text-white text-center text-[16px] lg:text-xl">KNOW MORE</span>
              </a>

              <a href="#_" class="relative inline-flex items-center justify-center px-9 lg:px-12 py-3 text-sm lg:text-xl font-medium tracking-tighter text-white bg-gray-800 rounded-md group shadow-lg">
              <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#FF1700] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#FF1700] rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span class="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">DAPPs</span>
              </a>
              </div>  */}
      </div>
                {/* Side image */}
        <div>
            <img className='w-full animate-pulse duration-75 transition-all h-auto md:block hidden lg:block' src={require('../images/matrix.png')} alt="/" data-aos="slide-left"/>
        </div>
                   
        {/* <div className="gap-5 m-5  grid lg:flex text-center">
                <a href="#_" class="rounded-md px-6 lg:px-8 py-3  overflow-hidden relative cursor-pointer border-2 font-medium border-black  dark:border-[#FF1700] hover:bg-transparent mx-3 shadow-lg">
                <span class="relative text-[#FF1700] dark:text-white text-center text-[16px] text-xl"><a href='https://t.me/LODICOINSARMIESOFFICIAL' target="_blank">Telegram</a></span>
                </a>

                <a href="#_" class="relative inline-flex items-center justify-center px-9 lg:px-12 py-3 text-sm lg:text-xl font-medium tracking-tighter text-white bg-gray-800 rounded-md group shadow-lg">
                <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#FF1700] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#FF1700] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span class="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Connect wallet</span>
                </a>
        </div>  */}
  
    </div>
    </div>
  )
}

export default Hero