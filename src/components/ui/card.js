import React, { useState } from "react";
import { useAccount, useConnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getRewards } from './../helpers/blockchain';
 

function Card() {
    const { connector: activeConnector, isConnected } = useAccount()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [stakedAmount, setStakedAmount] = useState(0);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleUnstake = () => {
      setStakedAmount(0);
    };
  return (
<>
<div className="flex flex-col md:flex-row  items-center justify-center space-y-4 md:space-x-4 pb-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://i.postimg.cc/fRPB0k1c/VANILLA-IMG-1.png"
          alt="card-image"
          className="object-cover h-64  ml-10"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 ml-20 ">BRONZE</h1>
          <h2 className="text-lg font-bold mb-4 text-gray-600 ml-10">6 months Locking Period</h2>
          <h1 className=" font-bold mb-2 text-7xl ml-10 pb-4">11%</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
            onClick={toggleDropdown}
          >
            Stake
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
            onClick={toggleDropdown}
          >
            see stake deatils
          </button>
          {isDropdownOpen && (
            <div className="p-6 border-gray-800">
              <div className="flex justify-between items-center ">
                <span className="font-medium">Rewards:</span>
                <span className="font-medium">{() => getRewards(0,0x6a8FCE3907DcbAAEC12Ee978c2ACF5D9bFa8a57D)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Staked Amount:</span>
                <span className="font-medium">{stakedAmount}</span>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleUnstake}
              >
                Unstake
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
        <img
          src="https://i.postimg.cc/Pxwcq1xv/STRAWBERRY-IMG.png"
          alt="card-image"
          className="object-cover h-64  ml-16"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 ml-24 ">BRONZE</h1>
          <h2 className="text-lg font-bold mb-4 text-gray-600 ml-16">6 months Locking Period</h2>
          <h1 className=" font-bold mb-2 text-7xl ml-16 pb-4">11%</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
            onClick={toggleDropdown}
          >
            stake
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
            onClick={toggleDropdown}
          >
            see stake deatils
          </button>
          {isDropdownOpen && (
            <div className="p-6 border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Rewards:</span>
                <span className="font-medium">100</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Staked Amount:</span>
                <span className="font-medium">0</span>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleUnstake}
              >
                Unstake
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
        <img
          src="https://i.postimg.cc/BbtjDZrF/BELGIUM-IMG.png"
          alt="card-image"
          className="object-cover h-64  ml-16"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 ml-24 ">BRONZE</h1>
          <h2 className="text-lg font-bold mb-4 text-gray-600 ml-16">6 months Locking Period</h2>
          <h1 className=" font-bold mb-2 text-7xl ml-16 pb-4">11%</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
            onClick={toggleDropdown}
          >
            stake
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
            onClick={toggleDropdown}
          >
            see stake deatils
          </button>
          
          <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Rewards:</span>
                <span className="font-medium">100</span>
              </div>
          {isDropdownOpen && (
            <div className="p-6 border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Rewards:</span>
                <span className="font-medium">100</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Staked Amount:</span>
                <span className="font-medium">{stakedAmount}</span>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleUnstake}
              >
                Unstake
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
</>
  )
}

export default Card