import Campaignabi from '../contracts/Campaign.json'
import Web3 from "web3";
import React,{useEffect,useState} from 'react';




const TotalAmountCard = () => {

  const [balance,setBalance]=useState(0);
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
    const election=new web3.eth.Contract(Campaignabi.abi,networkData.address);
    const b=await web3.eth.getBalance(election.options.address);
   //console.log(election) 
   setBalance(web3.utils.fromWei(b, 'ether'));

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
    <div className='flex flex-col w-[48%] p-4 border-2  border-accentOrange text-white rounded-lg shadow-lg bg-backgroundSecondary'>
      {/* title and chart row */}
      <div className='flex items-center justify-between w-full pt-4 h-1/2'>
        {/* title */}
        <span className='text-3xl font-bold'>Total Amount</span>
        {/* chart */}
        <div className='flex items-center justify-center flex-1 h-full '>
          <div className='flex h-full rounded-full aspect-square bg-accentOrange'></div>
        </div>
      </div>
      {/* total amount details row  */}
      <div className='flex flex-col mt-6'>
        {/* total amount  */}
        <span className='text-5xl font-bold'>{balance} Eth</span>
        {/* footer text  */}
        <span className='mt-3 text-lg'> 58% Of Goal Is Reached</span>
      </div>
    </div>
  );
};

export default TotalAmountCard;
