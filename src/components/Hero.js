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
          </div>
                  {/* Side image */}
          <div>
              <img className='w-full animate-pulse duration-75 transition-all h-auto md:block hidden lg:block' src={require('../images/matrix.png')} alt="/" data-aos="slide-left"/>
          </div>
      </div>
    </div>
  )
}

export default Hero