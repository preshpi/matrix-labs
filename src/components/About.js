import React from 'react'

function About() {
  return (
    <div name='about' className="w-full py-3 mt-3 relative">
        <div className="">
        <img src={require('../images/sidebg.png')} className="w-full h-full object-cover absolute rounded-lg hidden:imp dark:imp"/>
     
     
    <div className="m-3 justify-center  lg:mt-8 md:mt-[200px]">
       <div className="about-bg m-5 p-5 mt-5">
            <h1 className="about-text text-3xl font-bold leading-3 dark:text-white h-10 block text-black">WHY CHOOSE</h1>
            <h1 className="about-text text-5xl font-bold leading-8 h-14 block text-[#FF1700]">LODICOIN</h1>
        </div>

        <div className="">
            <div className="grid lg:grid-cols-2 flex items-center justify-center">
            
             {/* <div className="justify-center  m-5">
                <p className="dark:text-white text-black text-xl about-text-2 lg:w-[500px]">Security is critical in the blockchain space. Our services help everyone from startups to enterprises to launch and maintain their applications on the blockchain. We make sure to deliver the product fast and provide active support to the client in every phase including presale.</p>
            </div>  */}
            </div>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#E8E8E8] dark:bg-[#1E1E1E]  shadow-lg text-black text-2xl m-8 rounded-lg grid place-items-center">
                    <img src={require('../images/class1.png')} className=""/>
                    <p className="text-center dark:text-white text-black mt-3 mb-3">best strategic apy</p>
                </div>

                <div className="bg-[#E8E8E8] dark:bg-[#1E1E1E]  shadow-lg text-black text-2xl text-center items-center justify-center m-8 rounded-lg grid place-items-center">
                    <img src={require('../images/class2.png')}/> 
                    <p className="text-center text-black mt-3 mb-3 dark:text-white m-3">Realistic-Sustainable Profit</p>
                </div>

                <div className="bg-[#E8E8E8] dark:bg-[#1E1E1E]  shadow-lg text-black text-2xl text-center items-center justify-center m-8 rounded-lg grid place-items-center">
                    <img src={require('../images/class3.png')}/>
                    <p className="text-center dark:text-white text-black mt-3 mb-3">Rugpull Free Rebase</p>
                </div>
            </div>
            
        </div>      
    </div> 

    </div>
    </div>
  )
}

export default About