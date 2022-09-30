import React from 'react'

function Services2() {
  return (
    <div name='service' className="relative bg-[#CED8E6] dark:bg-transparent dark:text-white">

                          {/* Background image */}
      <img src={require('../images/linebg.png')} className="w-full h-full object-cover absolute rounded-lg"/>

                          {/* Header text */}
      <div className="p-5 text-center font-bold dark:text-white text-4xl">
      <h1 className="items-center text-3xl m-5">Supported Blockchai on BGN is Cross-chain</h1>
      </div>
                            {/* List items */}
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-5  m-8 justify-center items-center-list">
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Binance Smart chain</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Ethereum</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Avalanche</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">BitTorrent</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Fantom</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Harmony</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">IoTex</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Ontology EVM</li>             
          </div>
        </div>
        <div className="coin-select" data-aos="slide-up">
          <div className="inline text-center">
          <li className="text-3xl text-center font-[nunito]">Polygon</li>             
          </div>
        </div>
        
      </ul>  
              
          

    </div>
  )
}

export default Services2