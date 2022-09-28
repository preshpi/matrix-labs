import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
function Footer() {
  return (
    <div name='contact' className="relative lg:h-full py-8">
    <div className="grid place-items-center">
        <img src={require('../images/footer.png')} className="bottom w-full  h-full object-cover absolute"/>
        <div className="text-center grid place-items-center  text-white relative bottom">
            <div className="flex mt-16">
            <img src={require('../images/logolabs.png')} className="lg:w-32 mb-8"/>
            <h3 className="font-[Roboto] text-3xl font-bold tracking-wide mt-8">LODICOIN</h3>
            </div>
            <p className="lg:text-xl font-light tracking-wider lg:w-[384px] mx-4 w-72 text-x">One stop destination for all Blockchain Solutions.</p>
            <div className="flex gap-3 text-3xl mx-2 lg:mx-8 mt-2 mb-5">
                <AiOutlineInstagram className="fill-white"/>
                <AiFillLinkedin className="fill-white"/>
                <BsTwitter className="fill-white"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer