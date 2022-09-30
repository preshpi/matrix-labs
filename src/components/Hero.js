import React from 'react'

function Hero() {
  
  return (
    <div name='home' className='w-full before:flex flex-col justify-between p-8'>
      <div className='grid md:grid-cols-2 max-w-[1240px] py-8 m-5' data-aos="slide-up">
          <div className="grid">
            <div className='flex flex-col justify-center md:items-start w-full'>
                <div className="flex">
                <div className="vl mx-3"></div>
                <p className='matrix-text text-2xl dark:text-white block'>LODICOIN BRIDGE</p>    
                </div>
            
                <p className="tracking-wide text-black text-lg font-semibold m-4 block dark:text-white lg:leading-8 leading-7 lg:h-52">
                The $LODI token can be bridged to any supported chain under the Lodicoin Protocol. Here, you can get the native $LODI into your wallet's Blockchain destination.
                An equal amount of $LODI is taken from the liquidity pool on the destination chain and deposited as liquidity on the origin chain during a swap. To execute the transaction, there must be sufficient liquidity on the destination chain. The Lodicoin Bank Reserve is currently providing liquidity for the Lodicoin Bridge with a token allotment of 2,000,000 $LODI.
                </p>
                
                <a href="#"><button className='mx-4 py-3 px-6 sm:w-[50%] lg:mt-16 my-6 bg-[#FF1700] rounded-lg shadow-lg uppercase hover:bg-red-600 dark:text-white'>Read more</button></a>
              
            </div> 
          </div>
                  {/* Side image */}
          <div>
              <img className='w-full animate-pulse duration-75 transition-all h-auto md:block hidden lg:block' src={require('../images/matrix.png')} alt="/" data-aos="slide-left"/>
          </div>
      </div>

      <div className="lg:grid-cols-2 md:grid-cols-2 gap-5 bg-[#E8E8E8] dark:bg-[#1E1E1E]  shadow-lg text-black text-2xl m-8 rounded-lg grid place-items-center">
        <div className="m-5" data-aos="fade-left">
        <h1 className="font-bold text-center mb-2 dark:text-gray-100">The LODICOIN STAKE</h1>
        <p className="text-[20px] font-[nunito]  dark:text-white">As a part of the DeFi services of the Lodicoin Protocol, we incorporate Blockchain node staking rewards into the ecosystem and, when possible, we offer 100% payouts. Our community-first staking strategy is similar to our ground-breaking pricing structure on Lodicoin. finance, where liquidity providers also receive 100% of the trading fees.</p>
        </div>

        <div className="m-5" data-aos="fade-right">         
        <h1 className="font-bold text-center mb-2 dark:text-gray-100">The LODICOIN FINANCE</h1>            
        <p className="text-[20px] font-[nunito] dark:text-white">A clone features of pancakesawap, a decentralized exchange in Binance Smart chain that uses an Automated Market Maker (AMM) model, utilizing $LODI interoperable smart contracts operating on multiple Blockchains. It acts as a working proof-of-concept trading platform for harnessing multi-chain swaps and liquidity mining to power $LODI. </p>
        <a href=""><button className="mt-3 text-center bg-[#FF1700] rounded-full px-2 py-2 cursor-pointer text-white hover:text-black hover:bg-transparent border-2 border-black dark:border-white text-sm dark:text-white">READ MORE</button></a>
        </div>
      </div>
    
    </div>
  )
}

export default Hero