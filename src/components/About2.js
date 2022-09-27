import React from 'react'

function About2() {
  return (
    <div className="bg-[#D5DFED] dark:bg-transparent">
        <div className="relative">
        <img src={require('../images/sidebg.png')} className="w-full h-full object-cover absolute rounded-lg hidden:imp dark:imp"/>
        <div className="grid lg:grid-cols-2 m-8 py-5">
            <div className="mb-14 lg:mb-0">
                <div className="text-black dark:text-white font-[montserrat]">
                <h1 className="font-bold leading-2 tracking-wide text-3xl">CREATING YOUR IDEAS INTO REALITY</h1>
                <p className="font-[poppins] text-xl tracking-wide leading-8">On-board with us and start your business in the web3 space. We provide services in:</p>
                </div>
                
                <div className="grid h-52">
                    
                    <div className="w-full h-px mb-6 mt-3">
                    <div className="flex text-black dark:text-white justify-between m-5">
                        <p>DAPP Development</p>
                        <p>100%</p>
                    </div>
                        <div className="w-full h-5 mb-6">
                        <div className="bg-[#FF1700] rounded-lg m-5 h-5 mt-3"></div>
                        </div>
                    </div>

                    <div className="w-full h-px mb-6 mt-3 ">
                    <div className="flex text-black dark:text-white justify-between m-5 ">
                        <p className="mt-9">Blockchain Development</p>
                        <p className="mt-9">100%</p>
                    </div>
                        <div className="w-full h-5 ">
                        <div className="bg-[#FF1700] rounded-lg m-5 h-5"></div>
                        </div>
                    </div>

                    <div className="w-full h-px mb-6 mt-3 ">
                    <div className="flex text-black dark:text-white justify-between m-5 ">
                        <p className="mt-16">Website Integration</p>
                        <p className="mt-16">100%</p>
                    </div>
                        <div className="w-full h-5 ">
                        <div className="bg-[#FF1700] rounded-lg m-5 h-5"></div>
                        </div>
                    </div>
                </div>
              
           <div>
       </div>

            </div>
         
            <div className="">
                <img src={require('../images/serviceimg.png')}/>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default About2