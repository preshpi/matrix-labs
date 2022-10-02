import React from "react";
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-[#FF1700] text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        CONNECT
      </button>
      {showModal ? (
        <>
        <div
className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
<div className="relative w-auto my-6 mx-auto max-w-3xl">
  {/*content*/}
  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    <div className="flex font-serif text-white gap-5 justify-between m-5">
    <p className="text-black ">CONNECT WALLET</p>
    <AiFillCloseCircle className="text-right fill-[#FF1700] mt-1 cursor-pointer"  onClick={() => setShowModal(false)}/>
    <div className="lg:hr"></div>
    </div>
    {/*body*/}
    <div className="relative p-6 grid">
     <a href="#_" class="relative z-30 shadow-lg gap-5 justify-between mb-3 inline-flex items-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
        <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
        <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
        Metamask
        <img src={require('../images/fox.png')}/>
     </a>
     <a href="#_" class="relative z-30 shadow-lg gap-5 justify-between mb-3 inline-flex items-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
        <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
        <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
        W wallet
        <img src={require('../images/fox.png')}/>
     </a>
     <a href="#_" class="relative z-30 shadow-lg gap-5 justify-between mb-3 inline-flex items-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
        <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
        <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
        Trust Wallet
        <img src="https://imgs.search.brave.com/6CaMV3giQCbPgpUy-FCWV-STwWGZ_OxVuZ1zBGI6XIU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/VTRYR1Nva216eWF0/ZUZzNmlxTk1nSGFI/YSZwaWQ9QXBp" alt="trust" className="w-12"/>
     </a>
    </div>
  </div>
</div>
</div>
<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}