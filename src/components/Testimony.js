import React from 'react'

function Testimony() {
  return (
    <div className="relative py-8 m-8">
        <div className="text-center">
            <h1 className="font-bold font-[montserrat] text-3xl tracking-wider leading-8">WHAT OUR CUSTOMERS SAY</h1>
        </div>

        <div className="grid place-items-center mt-5 ">
            <div className="grid lg:grid-cols-3 lg:gap-5">
              <div className="h-[300px] lg:w-[356px] m-[46px] p-[16px] w-96 text-[#3c3b3b] bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg">
                <div className=" grid place-items-center">
                <div className="text-left">
                        <p className="m-3 text-xl tracking-wide leading-6">A fantastic organisation! Great cutomer support from beginning to end of the process. The team is really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                        <img src={require('../images/customer3.png')} className="m-3"/>
                        <p className="font-bold text-x m-3 tracking-wide">Bianca</p>
                    </div>
                </div>

              </div>

              <div className="h-[300px] lg:w-[356px] m-[46px] p-[16px] w-96 text-[#3c3b3b] bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg">
                <div className=" grid place-items-center">
                <div className="text-left">
                        <p className="m-3 text-xl tracking-wide leading-6">A fantastic organisation! Great cutomer support from beginning to end of the process. The team is really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                        <img src={require('../images/customer3.png')} className="m-3"/>
                        <p className="font-bold text-x m-3 tracking-wide">Bianca</p>
                    </div>
                </div>

              </div>

              <div className="h-[300px] lg:w-[356px] m-[46px] p-[16px] w-96 text-[#3c3b3b] bg-[#E9E8E9] dark:bg-[#1E1F1F] mt-3 rounded-[20px] shadow-lg">
                <div className=" grid place-items-center">
                <div className="text-left">
                        <p className="m-3 text-xl tracking-wide leading-6">A fantastic organisation! Great cutomer support from beginning to end of the process. The team is really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                        <img src={require('../images/customer3.png')} className="m-3"/>
                        <p className="font-bold text-x m-3 tracking-wide">Bianca</p>
                    </div>
                </div>

              </div>


          
            </div>
          </div>

        
    </div>
  )
}

export default Testimony