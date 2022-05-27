import { isVisible } from '@testing-library/user-event/dist/utils';
import Campaignabi from '../contracts/Campaign.json'
import Web3 from "web3";
import React,{useEffect,useState} from 'react';

const DonarList = () => {
  //* /////////////////////////////////////////////////////////
  //! DUMMY DATA //////////////////////////////////////////////


  const donatorArray=[];
  const [finaldonatorarray,setfinaldonatorarray]=useState([])
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
  //console.log(accounts);

    const networkId = await web3.eth.net.getId();
    const networkData=Campaignabi.networks[networkId];
   
    if(networkData){
      const campaign=new web3.eth.Contract(Campaignabi.abi,networkData.address);
      const donorcount=await campaign.methods.donatorsCount().call();
     // console.log(donorcount)
      let i=0;
      while (i<donorcount) {
       const request1=await campaign.methods.donators(i).call();
    
      const amount1=await campaign.methods.donoramount(request1.donoraddress).call();
      const name=await campaign.methods.donorname(request1.donoraddress).call();
      const amount2=web3.utils.fromWei(amount1, 'ether')
       i++;
       donatorArray.push({"name":name,"amount":amount2,"address":request1.donoraddress});
      }
      
    
      setfinaldonatorarray(donatorArray);
  
    }
    else
    window.alert('the start contract is not deployed current network')
  }
  
  
  const DONOR_DATA = [
    {
      id: String(Math.random()),
      name: 'Aryan Basu',
      donation_amount: 3.2,
      profile_pic: '',
    },
    {
      id: String(Math.random()),
      name: 'Shivam Gupta',
      donation_amount: 1.2,
      profile_pic: '',
    },
    {
      id: String(Math.random()),
      name: 'Ravish Goyal',
      donation_amount: 1.7,
      profile_pic: '',
    },
  ];

  //! /////////////////////////////////////////////////////////
  //* /////////////////////////////////////////////////////////

 // console.log(DONOR_DATA);

  useEffect(() => {
   
    LoadBlockchaindata();
    loadWeb3();
  //  console.log(requestArray[0])
  })

  return (
    <div className='flex flex-col items-center  w-[48%] px-6 py-6 text-white border-accentOrange border-2 rounded-lg shadow-lg bg-backgroundSecondary'>
      {/* header */}
      <span className='self-start mb-4 text-3xl font-bold'>Our Donors</span>
      {/* list items */}
      {finaldonatorarray.map((item, key) => {
        return (
          <div
            key={key}
            className='flex items-center justify-between w-full px-2 py-2 mx-6 mt-2 rounded-lg bg-backgroundSecondary'>
            <div className='flex items-center'>
              {/* profile_img */}
              <div className='flex w-10 mx-2 rounded-full aspect-square bg-backgroundPrimary '></div>
              {/* name */}
              <span className='mx-2 text-xl'>{item.name}</span>
            </div>

            {/* donation amount */}
            <span className='px-4 py-2 text-lg font-semibold rounded-lg bg-backgroundPrimary'>
              {item.amount} Eth
            </span>
          </div>
        );
      })}

      {/* view all donations button */}
      <button className='self-start px-8 py-3 mt-6 font-semibold transition-all rounded-lg bg-accentPurple active:scale-95'>
        View All
      </button>
    </div>
  );
};

export default DonarList;
