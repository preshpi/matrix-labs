import React from 'react'

function Projects() {
  return (
    <div name='project' className="relative">
        <div>
        <div className="m-8 p-5">
            <h1 className="text-black dark:text-white font-bold tracking-widest text-center mt-5 lg:text-3xl text-2xl font-[montserrat] overflow-hidden">HOW WE DEVELOP DAPPs</h1>
        </div>

        <div className="lg:grid-cols-5 grid place-items-center">

            <div className="text-center mt-5">
                <img src={require('../images/dapp1.png')} className="w-64"/>
                <p className="text-xl uppercase font-semibold tracking-wide leading-4 dark:text-white mb-5">UI DESIGNING</p>
            </div>
            <img src={require('../images/left.png')} className="imp w-12"/>
            <div className="text-center mt-5">
                <img src={require('../images/dapp2.png')} className="w-64"/>
                <p className="text-xl uppercase font-semibold tracking-wide leading-4 dark:text-white mb-5">WEB3 INTEGRATION</p>
            </div>
            <img src={require('../images/left.png')} className="w-12"/>
            <div className="text-center mt-5">
                <img src={require('../images/dapp3.png')} className="w-64"/>
                <p className="text-xl uppercase font-semibold tracking-wide leading-4 dark:text-white">COMPLETE TESTING</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Projects