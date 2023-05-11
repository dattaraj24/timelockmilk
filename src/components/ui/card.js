import React, { useState,useEffect } from "react";
import { useAccount, useConnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getRewards } from './../helpers/blockchain';
import { ethers } from "ethers";
 import { erc20ABI } from "wagmi";
import { parseEther } from "ethers/lib/utils.js";
import { Link } from 'react-router-dom';

function Card() {
    const { connector: activeConnector, isConnected } = useAccount()


   
  return (
<>
<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 pb-10">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src="https://i.postimg.cc/fRPB0k1c/VANILLA-IMG-1.png"
      alt="card-image"
      className="object-cover h-64 max-w-7xl ml-24"
    />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">vanilla shake</h1>
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold text-gray-600 mr-4">6 months Locking Period</h2>
        <h1 className="font-bold text-7xl text-blue-300">11%</h1>
      </div>
      <div className="flex items-center mb-4 mr-10">
       
 
      </div>
      <div className="flex flex-col items-center">
      <Link to="/vanilla">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Claim Now
        </button>
    </Link>
        
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src="https://i.postimg.cc/Pxwcq1xv/STRAWBERRY-IMG.png"
      alt="card-image"
      className="object-cover h-64 max-w-7xl ml-24"
    />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">strawberry shake</h1>
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold text-gray-600 mr-4">12 months Locking Period</h2>
        <h1 className="font-bold text-7xl text-blue-300">28%</h1>
      </div>
      <div className="flex items-center mb-4 mr-10">
       
 
      </div>
      <div className="flex flex-col items-center">
      <Link to="/strawberry">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Claim Now
        </button>
    </Link>
       
        
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src="https://i.postimg.cc/BbtjDZrF/BELGIUM-IMG.png"
      alt="card-image"
      className="object-cover h-64 max-w-7xl ml-24"
    />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">belgium shake</h1>
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold text-gray-600 mr-4">18 months Locking Period</h2>
        <h1 className="font-bold text-7xl text-blue-300">52%</h1>
      </div>
      <div className="flex items-center mb-4 mr-10">
        
      
      </div>
      <div className="flex flex-col items-center">
      <Link to="/belgium">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Claim Now
        </button>
    </Link>
        
      </div>
    </div>
  </div>
</div>
    
</>
  )
}

export default Card