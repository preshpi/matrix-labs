import React from 'react'

function Team() {
  return (
    <div className="relative bg-[#F5F5F5]">
                <img src={require('../images/skybg.png')} className="w-full h-full object-cover absolute rounded-lg"/>
    <div className="m-8 p-8">
        <h1 className="dark:text-white text-3xl tracking-wider font-bold">TEAM MEMBERS</h1>
        <h1 className="text-4xl lg:text-5xl font-bold mt-5 tracking-widest leading-5 text-[#FF1700]">MATRIX LABS</h1>
    </div>

    <div className="grid lg:grid-cols-3 flex justify-center items-center m-8">
        <div className="dark:bg-[#262627] bg-[#E9E8E9] w-[310px] h-[290px] p-5 m-5 rounded-lg grid place-items-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-28 px-4">
                    <img src={require('../images/members1.jpg')} className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                </div>
            </div>
            <a href="#_" className="mt-5 uppercase text-sm text-[#585959] dark:text-[#FF1700] inline-flex items-center justify-center h-5 py-3 px-1 focus:shadow-xs border-2 border-gray-600 rounded-full">
            listed on pinksale & gempad
            </a>
            {/* <button className="mt-2 uppercase text-sm text-[#585959] dark:text-[#FF1700]  font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">listed on pinksale & gempad</button> */}
            <p className="text-center mt-2 dark:text-white text-xl tracking-wide leading-5 uppercase">brick matrix</p>
            <p className="dark:text-[#D4D4D4] mt-3">contact and web3 dev</p>
            <div className="gap-3 flex mt-5">
                <a href="#_" class="inline-flex items-center dark:text-white justify-center px-4 py-2 text-base font-medium leading-6  whitespace-no-wrap  border border-[#FF1700] rounded-md shadow-sm  focus:outline-none focus:shadow-none cursor-pointer">
                Button Text
                </a>
                <a href="#_" class="uppercase inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FF1700] border border-[#FF1700] rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-rounded="rounded-md" data-primary="red-600" data-primary-reset="{}">
                Connect
                </a>
            </div>
        </div>

        <div className="dark:bg-[#262627] bg-[#E9E8E9] w-[310px] h-[290px] p-5 m-5 rounded-lg grid place-items-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-28 px-4">
                    <img src={require('../images/members1.jpg')} className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                </div>
            </div>
            <a href="#_" className="mt-5 uppercase text-sm text-[#585959] dark:text-[#FF1700] inline-flex items-center justify-center h-5 py-3 px-1 focus:shadow-xs border-2 border-gray-600 rounded-full">
            listed on pinksale & gempad
            </a>
            {/* <button className="mt-2 uppercase text-sm text-[#585959] dark:text-[#FF1700]  font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">listed on pinksale & gempad</button> */}
            <p className="text-center mt-2 dark:text-white text-xl tracking-wide leading-5 uppercase">brick matrix</p>
            <p className="dark:text-[#D4D4D4] mt-3">contact and web3 dev</p>
            <div className="gap-3 flex mt-5">
                <a href="#_" class="inline-flex items-center dark:text-white justify-center px-4 py-2 text-base font-medium leading-6  whitespace-no-wrap  border border-[#FF1700] rounded-md shadow-sm  focus:outline-none focus:shadow-none cursor-pointer">
                Button Text
                </a>
                <a href="#_" class="uppercase inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FF1700] border border-[#FF1700] rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-rounded="rounded-md" data-primary="red-600" data-primary-reset="{}">
                Connect
                </a>
            </div>
        </div>

        <div className="dark:bg-[#262627] bg-[#E9E8E9] w-[310px] h-[290px] p-5 m-5 rounded-lg grid place-items-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-28 px-4">
                    <img src={require('../images/members1.jpg')} className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                </div>
            </div>
            <a href="#_" className="mt-5 uppercase text-sm text-[#585959] dark:text-[#FF1700] inline-flex items-center justify-center h-5 py-3 px-1 focus:shadow-xs border-2 border-gray-600 rounded-full">
            listed on pinksale & gempad
            </a>
            {/* <button className="mt-2 uppercase text-sm text-[#585959] dark:text-[#FF1700]  font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">listed on pinksale & gempad</button> */}
            <p className="text-center mt-2 dark:text-white text-xl tracking-wide leading-5 uppercase">brick matrix</p>
            <p className="dark:text-[#D4D4D4] mt-3">contact and web3 dev</p>
            <div className="gap-3 flex mt-5">
                <a href="#_" class=" inline-flex items-center dark:text-white justify-center px-4 py-2 text-base font-medium leading-6  whitespace-no-wrap  border border-[#FF1700] rounded-md shadow-sm  focus:outline-none focus:shadow-none cursor-pointer">
                Button Text
                </a>
                <a href="#_" class="uppercase inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FF1700] border border-[#FF1700] rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-rounded="rounded-md" data-primary="red-600" data-primary-reset="{}">
                Connect
                </a>
            </div>
        </div>
    </div>
    

                {/* PARTNERS */}

       <div className="relative m-8 p-8">
           <div>
                <h1 className="dark:text-white text-3xl tracking-wider font-bold">PARTNERS</h1>
                <h1 className="text-4xl lg:text-5xl font-bold mt-5 tracking-widest leading-5 text-[#FF1700]">MATRIX LABS</h1>
            </div>

            <div className="flex gap-5 overflow-hidden m-5 mt-5">
                <div>
                    <img src={require('../images/patner1.png')}/>
                    <p>CFG NINJA</p>
                </div>

                <div>
                    <img src={require('../images/patner2.png')}/>
                    <p>CFG NINJA</p>
                </div>

                <div>
                    <img src={require('../images/patner3.png')}/>
                    <p>CFG NINJA</p>
                </div>

                <div>
                    <img src={require('../images/patner4.png')}/>
                    <p>CFG NINJA</p>
                </div>

                <div>
                    <img src={require('../images/patner5.png')}/>
                    <p>CFG NINJA</p>
                </div>

                
            </div>
        </div>
       
    </div>
  
  )
}

export default Team