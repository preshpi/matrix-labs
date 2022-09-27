import React from 'react'

function Hero() {
    const text = document.querySelector(".sec-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "NFT MARKETPLACEs";
        }, 0);
        setTimeout(() => {
            text.textContent = "DAPPs";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Custom CONTRACTs";
        }, 8000); //1s = 1000 milliseconds
    }

    textLoad();
    setInterval(textLoad, 12000);
  return (
    <div name='hero' className='w-full h-screen before:flex flex-col justify-between p-8'>
    <div className='grid md:grid-cols-2 max-w-[1240px] py-8 m-5'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <div className="flex">
            <div className="vl mx-3"></div>
            <p className='matrix-text text-2xl dark:text-white block'>THE MATRIX LABS</p>    
            </div>
            
            <h1 className='matrix-text py-3 text-5xl font-bold leading-10 dark:text-white'>WE CREATE</h1>
            <div className="container">
                {/* <span className="text sec-text">NFT MARKETPLACEs</span> */}
                {/* <span className="text sec-text">DAPPs</span>
                <span className="text sec-text">Custom CONTRACTs</span>     */}
            </div>

            <p className="matrix-text text-black text-lg font-semibold h-16 m-4 block dark:text-white">
            We provide blockchain services from Smart Contract Development and Audit to creating Launchpads, NFT Marketplaces and any kind of unique DAPPs
            </p>

            <div className="lg:flex grid mt-14 lg:mt-2 items-center justify-center">
            <button type="button" className="btn-1 rounded text-center items-center mr-2 mb-2 text-black dark:text-white hover:bg-[#d8e0ec] dark:hover:bg-transparent">
            KNOW MORE
            </button>
            <button type="button" className="btn-2 rounded text-center items-center mr-2 mb-2 text-white dark:text-black bg-[#FF1700] dark:hover:bg-transparent">
            DAPP
            </button>
            </div>

        </div>
        <div>
            <img className='w-full animate-pulse duration-75 transition-all h-auto' src={require('../images/matrix.png')} alt="/" />
        </div>
  
    </div>
    </div>
  )
}

export default Hero