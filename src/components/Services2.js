import React from 'react'

function Services2() {
  return (
    <div className="relative bg-[#CED8E6] dark:bg-transparent dark:text-white">
            <img src={require('../images/linebg.png')} className="w-full h-full object-cover absolute rounded-lg"/>
        <div className="flex flex-col-reverse lg:flex-row m-12 py-5">
            <div>
                <img src={require('../images/bigrocket.png')}/>
            </div>
            <div className="py-5">
             <h1 className="font-[montserrat] text-3xl font-bold leading-8 tracking-wider mt-4 text-black dark:text-white h-16">SKYROCKET YOUR GROWTH WITH US</h1>
             <div className="lg:flex mt-5 mb-5 grid place-items-center ">
              <div className="service1 grid place-items-center">
                    <img src={require('../images/rocket1.png')}/>
                    <p className="dark:text-white mt-2">PinkSale Listed Developer</p>
              </div>
                <div className="lg:hr"></div>
                <div className="service1 grid place-items-center">
                    <img src={require('../images/rocket2.png')}/>
                    <p className="dark:text-white mt-2">The best user interfaces</p>
                </div>
                
             </div>
             <p className="service-text p-5">Excel your business with cutting-edge blockchain technology by adopting to our services. We believe in 100% customer satisfaction and provide industry leading solutions.</p>
            </div>
        </div>
    </div>
  )
}

export default Services2