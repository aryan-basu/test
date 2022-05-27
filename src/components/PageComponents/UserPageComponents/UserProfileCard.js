import Campaignabi from '../contracts/Campaign.json'
import Web3 from "web3";
import React,{useEffect,useState} from 'react';

const UserProfileCard = ({
    setSendDonationModal,
    setViewDonationRequests,
    userWalletAddress,
  }) => {

const [profileaddress,setprofileaddress]=useState(null);
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
    setprofileaddress(accounts);
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
        // donatorArray.push({"name":name,"amount":amount2,"address":request1.donoraddress});
        }
        
      
        //setfinaldonatorarray(donatorArray);
    
      }
      else
      window.alert('the start contract is not deployed current network')
    }
    
    
    
  
  
    useEffect(() => {
     
      LoadBlockchaindata();
      loadWeb3();
    //  console.log(requestArray[0])
    })
    return (
      <div className='flex flex-col w-full md:w-[50%] px-8 py-12 border-2 shadow-lg bg-backgroundSecondary border-accentOrange rounded-xl'>
        {/* profile img */}
        <div className='flex self-center w-[50%] md:w-64 p-8 mb-8 border-2 rounded-full aspect-square border-accentPurple'>
          <img
            src={`https://avatars.dicebear.com/api/bottts/${profileaddress}.svg`}
            alt='profile-img'
          />
        </div>
        {/* title */}
        <div className='flex flex-col align-center '>
          <div className='flex flex-col md:flex-row mb-2'>
            <span className='mr-6 text-2xl  md:text-4xl   font-semibold md:font-bold'>Hello👋, </span>
            <div className='flex p-4 mt-4 bg-accentOrange break-all border-2 rounded-lg flex-wrap px-2 md:px-4 py-2 text-lg md:text-xl text-white md:align-center'>
              {profileaddress}
            </div>
          </div>
          <span className='mt-6 text-lg md:text-xl '>
            Thank You for donating to Covid Relief Fund,
            <br /> You can donate more Ether using <strong>Donate</strong> button,
            <br /> and view all the voting requests in <strong>
              Requests
            </strong>
          </span>
        </div>
  
        {/* donation Buttons */}
  
        <div className='flex flex-row justify-between mt-16 mb-12 '>
          <button
            onClick={() => {
              setSendDonationModal(true);
            }}
            className='flex justify-center px-4 py-2 mr-8 font-semibold transition-all rounded-lg shadow-lg h-fit w-fit-content bg-accentPurple active:scale-95'>
            Donate
          </button>
          <button
            onClick={() => {
              setViewDonationRequests(true);
            }}
            className='flex justify-center px-4 py-2 font-semibold transition-all border-2 rounded-lg shadow-lg h-fit w-fit-content border-accentPurple active:scale-95'>
            My Requests
          </button>
        </div>
      </div>
    );
  };
  
  export default UserProfileCard;
  