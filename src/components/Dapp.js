import React from 'react'

function Dapp() {
  return (
    <div className="py-8 overflow-hidden font-serif">
                    {/* background image */}
              <img src={require('../images/linebg.png')} className="w-full h-full object-cover absolute rounded-lg"/>
              <div className="grid lg:grid-cols-2 place-content-center m-5">
                        {/* Text part */}
            <div className="md:items-start lg:text-start text-center m-8 w-[400px] md:w-[500px] place-items-center">
            <p className="tracking-wide text-white text-lg font-semibold m-4 block dark:text-white lg:leading-8 leading-7" data-aos="fade-left">
            LSP or Lodicoin Staking Protocol is a decentralize revolutionary approach to a financial asset, that makes staking more profitable and provides $LODI token holders with a high realistic crypto return. A decentralized coin on the Binance Smart Chain that is backed by the $LODICOIN Bank Reserve or BBR and is controlled by algorithms through APY, automatic staking, and compounding in your wallet, and multi-chain smart contracts providing the building blocks for the next generation of Defi development.
            </p>     

            </div>
                        {/* Form part */}
              <div className="items-center grid place-content-center font-serif py-8" data-aos="fade-right">
              <div className="text-white relative opacity-80">            
              <div className="relative items-center justify-center bg-[#335fd9] rounded-lg shadow-lg h-[700px]">
              <div className="m-5 text-xl text-start">
              <h1 className="text-center font-bold text-3xl py-4">STAKE TOKEN</h1>
                      <h1 className="mt-3">SIFU INU</h1>
                      <p className="mt-2">PRICE (SIFU INU) = 0.00000572 BNB</p>
              </div>
              <div className="grid place-items-center">    
              <div className="grid lg:w-[700px] place-items-center w-[250px]">
                  <div className="bg-[#0f172a] py-5 lg:w-[500px] h-[520px] rounded-[20px] shadow-[20px] ">
                          <div className="flex font-serif text-white gap-5 justify-between m-5">
                              <p>Rewards</p>
                              <p className="text-right text-[#FF1700] font-serif">Paid in Bsj</p>
                          </div>
                          <div className="flex font-serif text-white gap-5 justify-between m-5">
                              <p>Daily Rewards</p>
                              <p className="text-right text-[#FF1700]">1.15%</p>
                          </div>
                          <div className="flex font-serif text-white gap-5 justify-between m-5">
                              <p>Min.Stake</p>
                              <p className="text-right text-[#FF1700]">10,000 SIFU</p>
                          </div>
                          <div className="flex font-serif text-white gap-5 justify-between m-5">
                              <p>Max. Stake</p>
                              <p className="text-right text-[#FF1700]">100,000,000 SIFU</p>
                          </div>
                          <div className="flex font-serif text-white gap-5 justify-between m-5">
                              <p>Staking Period</p>
                              <p className="text-right text-[#FF1700]">30 Days</p>
                          </div>
                          <div className="flex font-serif text-white gap-5 justify-between m-5">
                              <p>Staking Type</p>
                              <p className="text-right text-[#FF1700]">Lock</p>
                          </div>

                                                  {/* Form input and button */}
                          <div class="relative m-5">
                              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                              <option value="disabled">Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>


                              </select>
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex font-serif items-center px-2 text-gray-700">
                                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                          </div>

                          <div className="justify-between m-5">                           
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Amount"/>
                          </div>

                          <div className="text-white  justify-center text-center m-5">
                          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-9 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
                          STAKE BUTTON
                          </button>     
                          </div>                                 
                  </div>   
              </div>
                        
              </div>
              </div>
              </div>
              </div> 
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:text-xl text-xl md:text-xl place-content-center m-5 mt-8 py-5">
              <div className="flex font-serif text-white gap-5 justify-between m-5">
              <p>Total locked:</p>
              <p className="text-right text-[#FF1700]">2234Lodi</p>
              <div className="hr"></div>
              </div>

              <div className="flex font-serif text-white gap-5 justify-between m-5">
              <p>Lock date:</p>
              <p className="text-right text-[#FF1700]">30-01-2022</p>
              <div className="hr"></div>
              </div>

              <div className="flex font-serif text-white gap-5 justify-between m-5">
              <p>Released date:</p>
              <p className="text-right text-[#FF1700]">04-03-2022</p>
              <div className="hr"></div>
              </div>

              <div className="flex font-serif text-white gap-5 justify-between m-5">
              <p>Total reward earned:</p>
              <p className="text-right text-[#FF1700]">56lodi</p>
              <div className="hr"></div>
              </div>
              </div>
    </div>
  )
}

export default Dapp