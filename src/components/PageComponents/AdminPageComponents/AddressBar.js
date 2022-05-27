import { RiFileCopyLine } from 'react-icons/ri';
import React,{useEffect,useState,useRef} from 'react';
import Web3 from "web3";
import Campaignabi from '../contracts/Campaign.json'
const AddressBar = () => {

  const[manager,setmanager]=useState("");
  const loadWeb3=async () =>{
    if(window.ethereum){
      window.web3=new Web3(window.ethereum);
      await window.ethereum.enable();
  
    }else if(window.web3){
      window.web3=new Web3(window.web3.currentProvider);
    }
    else{
      window.alert(
  "Non-Ethereum browser detected You  should consider trying Metamask!"
      );
    }
  };
  const LoadBlockchaindata=async()=>{
    const web3=window.web3;
  const accounts=await web3.eth.getAccounts();
  console.log(accounts);
  //const account=accounts[0];
  //setCurrentaccount(account)
    const networkId = await web3.eth.net.getId();
    const networkData=Campaignabi.networks[networkId];
   // console.log(networkData.address);
    if(networkData){
      const campaign=new web3.eth.Contract(Campaignabi.abi,networkData.address);
      const manager1=await campaign.methods.manager().call();
     setmanager(manager1);
  
    }
    else
    window.alert('the start contract is not deployed current network')
  }
  
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  //  console.log(requestArray[0])
  })

  return (
    <div className='relative flex items-center justify-between w-full px-12 py-4 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
      <span className='text-2xl font-semibold'>
        {manager}
      </span>
      <span className='p-2 text-3xl transition-all rounded-lg cursor-pointer bg-backgroundPrimary hover:bg-accentOrange hover:text-white text-accentOrange active:scale-95'>
        {' '}
        <RiFileCopyLine />{' '}
      </span>
      <span className='absolute top-[-15px] left-15 text-lg bg-backgroundPrimary px-6 rounded-md border-[1px] border-accentPurple'>
        Address
      </span>
    </div>
  );
};

export default AddressBar;
