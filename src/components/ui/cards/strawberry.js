import React, { useState,useEffect } from "react";
import { useAccount, useConnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from "ethers";
 import { erc20ABI } from "wagmi";
import { parseEther } from "ethers/lib/utils.js";
import Header from "../header";

function Strawberry() {
    const { connector: activeConnector, isConnected } = useAccount()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [stakedAmount, setStakedAmount] = useState([]);
    const [count, setCount] = useState(0);
    const [reward , setreward] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isclaim, setIsClaimable] = useState([]);

  
    const stakedamounts = []

    function handleInputChange(event) {
      setInputValue(event.target.value);
    }
    


    const timelockABI =[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_stakingDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_apy",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "RewardClaimed",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Staked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "topUp",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolIndex",
                    "type": "uint256"
                }
            ],
            "name": "unstake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Unstaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "apy",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "getpools",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "poolindex",
                    "type": "uint256"
                }
            ],
            "name": "getpoolsinfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getreward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "poolindex",
                    "type": "uint256"
                }
            ],
            "name": "getrewardinfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gettokenbalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewards",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "staked",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "gettotalreward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "poolindex",
                    "type": "uint256"
                }
            ],
            "name": "isClaimable",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "rewards",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stakingDuration",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "userPools",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
useEffect(() => {
    const getRewards =async () => {
      const address = await signer.getAddress();
      const timelockContract = new ethers.Contract("0x9f5C648156C711f7D07B82cF8E30D698f81360cd", timelockABI, signer);
      const _reward = await timelockContract.getpools(address);
      const reward = ethers.BigNumber.from(_reward).toString()
      console.log(reward)
      setCount(reward)
      return reward;
    }

    async function getUserPools() {
      const address = await signer.getAddress();
      const timelockContract = new ethers.Contract(
        "0x9f5C648156C711f7D07B82cF8E30D698f81360cd",
        timelockABI,
        signer
      );
  
      const amounts = await Promise.all(
        Array.from({ length: count }).map((_, index) =>
          timelockContract.getpoolsinfo(address, index),
         
        )
      );

      const claimable = await Promise.all(
          Array.from({ length: count }).map((_, index) =>
             timelockContract.isClaimable(address, index)
          )
        );
  
      const parsedAmounts = amounts.map((amount) =>
        ethers.utils.formatUnits(amount.toString(), 18)
      );

  
      setIsClaimable(claimable);
      setStakedAmount(parsedAmounts);
    }

 
      
    
    

    getUserPools()
    getRewards()
  }, [count]);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleUnstake = () => {
      setStakedAmount(0);
    };




     const stake = async (amount) => {
      const timelockContract = new ethers.Contract("0x9f5C648156C711f7D07B82cF8E30D698f81360cd", timelockABI, signer);
      const tokencontract = new ethers.Contract("0xc9bcf3f71e37579a4a42591b09c9dd93dfe27965", erc20ABI, signer);
      const approve = await tokencontract.approve("0x9f5C648156C711f7D07B82cF8E30D698f81360cd" , amount);
      await approve.wait()
      alert("approved")
      const tx = await timelockContract.stake(amount);
      await tx.wait();
      alert("Staked", amount, "tokens");
    }
    
    // Function to unstake tokens from a specific pool index
    const unstake =async (poolIndex) => {
      const timelockContract = new ethers.Contract("0x9f5C648156C711f7D07B82cF8E30D698f81360cd", timelockABI, signer);
      const tx = await timelockContract.unstake(poolIndex);
      await tx.wait();
      alert("Unstaked tokens from pool", poolIndex);
    }
    
    // Function to get rewards for a specific pool index
    const getRewards =async () => {
      const timelockContract = new ethers.Contract("0x6d3A42777827416D09682D9dfB631B71c0273CD8", timelockABI, signer);
      const _reward = await timelockContract.gettotalreward(signer);
      const reward = ethers.BigNumber.from(_reward).toString()

      setreward(reward)
      return reward;
    }

    const getpools =async () => {
      const timelockContract = new ethers.Contract("0xfaacf038c8c5460ae3c1439ccbd4202726f4a180", timelockABI, signer);
      const _reward = await timelockContract.gettotalreward(signer);
      const reward = ethers.BigNumber.from(_reward).toString()

      setreward(reward)
      return reward;
    }

    async function getUserPools(userAddress) {
      const address = await signer.getAddress();
      const timelockContract = new ethers.Contract("0xfaacf038c8c5460ae3c1439ccbd4202726f4a180", timelockABI, signer);
      console.log(timelockContract.userPools(address))
      return await timelockContract.userPools(address);
    }
  return (
    <>
    <Header/>
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 pb-10 pt-32">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src="https://i.postimg.cc/Pxwcq1xv/STRAWBERRY-IMG.png"
      alt="card-image"
      className="object-cover h-64 max-w-4xl"
    />
  <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">Strawberry shake</h1>
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-bold text-gray-600 mr-4">12 months Locking Period</h2>
          <h1 className="font-bold text-7xl text-blue-300">28%</h1>
        </div>
        <div className="flex items-center mb-4 ml-10">
          <input
            className="bg-gray-100 shadow-md rounded-md px-4 py-2 focus:outline-none focus:shadow-outline "
            type="text"
            placeholder="Enter staking amount"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => stake(ethers.utils.parseUnits(inputValue, 18))}
          >
            Stake
          </button>
        </div>
        <div className="flex flex-col items-center">
        
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            onClick={toggleDropdown}
          >
            claim Now
          </button>
          {isDropdownOpen && (
          <div className="p-6 border-gray-800 w-full">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex justify-between items-center mb-4 space-x-4">
                <span className="font-medium">Staked Amount:</span>
                <span className="font-medium">{stakedAmount[index]}</span>
                <div >
                 {isclaim[index] ?  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => unstake(index)}
                  >
                    claim now
                  </button> : <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => unstake(index)}
                  >
                    Unstake
                  </button>}
                 
                 
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
  </div>
</div>
</>
  )
}

export default Strawberry