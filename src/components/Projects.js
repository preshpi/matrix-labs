import React from 'react'

function Projects() {
  return (
    <div name='how' className="relative">
        <div className="justify-center lg:m-[100px]">

          <div className="mt-8 p-5">
              <h1 className="text-black dark:text-white font-bold tracking-widest text-center mt-5 lg:text-3xl text-2xl font-[montserrat] overflow-hidden">HOW To Get Started</h1>
          </div>

          <div className="lg:grid-cols-5 grid place-items-center ">

                            {/* Card */}
              <div className="dark:bg-[#262627] bg-[#E9E8E9] w-[310px] h-[200px] p-5 m-5 rounded-lg" data-aos="zoom-out-left">
                  <div className=" grid place-items-center">
                  <div className="text-center">
                  <h1 className="text-[#FF1700] mb-4 uppercase">Connect your wallet</h1>
                  <p className="text-x font-semibold  dark:text-white">Raise fund for your project liquidity
                  click create token presale and fill information about your presale type. Then click on proceed to list your token for presale.</p>
                  </div>
                  </div>

              </div>
                            {/* Arrow */}
              <img src={require('../images/left.png')} className="imp w-12"/>

                            {/* Card */}
              <div className="dark:bg-[#262627] bg-[#E9E8E9] w-[310px] h-[200px] p-5 m-5 rounded-lg" data-aos="zoom-out-left">
                  <div className=" grid place-items-center">
                  <div className="text-center">
                  <h1 className="text-[#FF1700] mb-4">CREATE A TOKEN</h1>
                  <p className="text-x font-semibold  dark:text-white">Fill all required fields in the information box that will be shown to you and click on proceed to automatically create your custom token..</p>
                  </div>
                  </div>

              </div>
                            {/* Arrow */}
              <img src={require('../images/left.png')} className="w-12"/>

                            {/* Card */}
              <div className="dark:bg-[#262627] bg-[#E9E8E9] w-[310px] h-[200px] p-5 m-5 rounded-lg" data-aos="zoom-out-left">
                  <div className=" grid place-items-center">
                  <div className="text-center">
                  <h1 className="text-[#FF1700] mb-4">CREATE TOKEN PRESALE</h1>
                  <p className="text-x font-semibold  dark:text-white">Raise fund for your project liquidity
                  click create token presale and fill information about your presale type. Then click on proceed to list your token for presale.</p>
                  </div>
                  </div>

              </div>

          </div>
      </div>
    </div>
  )
}

export default Projects