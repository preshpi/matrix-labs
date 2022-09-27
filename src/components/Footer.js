import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
function Footer() {
  return (
    <div className="relative">
    <div className="">
        <img src={require('../images/footer.png')} className="bottom w-full h-[462px] object-cover absolute"/>
        <div className="p-12 m-12 text-white relative bottom">
            <div className="flex mt-16">
            <img src={require('../images/logolabs.png')} className="lg:w-32 mb-8"/>
            <h3 className="font-[Roboto] text-2xl font-bold tracking-wide mt-8">MATRIX LABS</h3>
            </div>
            <p className="text-xl font-light tracking-wider mx-8 lg:w-[384px]">One stop destination for all Blockchain Solutions.</p>
            <div className="flex gap-3 text-3xl mx-8 mt-2">
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