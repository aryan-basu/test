// Assets
import { ImCancelCircle } from 'react-icons/im';



import Campaignabi from '../contracts/Campaign.json'
import Web3 from "web3";
import React,{useEffect,useState} from 'react';


  
 

const ViewDonationRequests = ({ closeModal, donationData }) => {


  const [totalcount,settotalcount]=useState(0);


  const requestArray=[];
  const [finalarray,setfinalarray]=useState([])
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
  //const accounts=await web3.eth.getAccounts();
 
    const networkId = await web3.eth.net.getId();
    const networkData=Campaignabi.networks[networkId];
  
      if(networkData){
        const camapign=new web3.eth.Contract(Campaignabi.abi,networkData.address);
       
         
        const requestcount=await camapign.methods.getRequestsCount().call();
  
              let i=0;
              while (i<requestcount) {
               const request1=await camapign.methods.requests(i).call();
             
               i++;
               console.log(request1.complete)
               requestArray.push({"description":request1.description,"amaount":request1.value,"address":request1.recipient,"Completed":request1.complete,"ApprovalCount":request1.approvalCount});
              }
            
              setfinalarray(requestArray);
    
              const totalcontributorcount= await camapign.methods.approversCount().call();
              settotalcount(totalcontributorcount);
      }
      else
      window.alert('the start contract is not deployed current network')
    }
  const approveDonationHandler = async(index) => {
    const web3=window.web3;
    const accounts=await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData=Campaignabi.networks[networkId];
    if(networkData){
      const campaign=new web3.eth.Contract(Campaignabi.abi,networkData.address);

     const players=await campaign.methods.approveRequest(index).send({
       from:accounts[0]
     });
     //console.log(lotteryamount.current.value) 
    //  const players=await campaign.methods.contribute(nameInputRef.current.value).send({
 // from:accounts[0],
 // value:web3.utils.toWei(amountInputRef.current.value,'ether')
   //   });
     
    }
    else
    window.alert('the start contract is not deployed current network')

  };
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  //  console.log(requestArray[0])
  })


  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex backdrop-blur-lg'>
      <div className='relative flex items-center justify-center w-full h-full'>
        {/* close modal button */}
        <button
          onClick={() => {
            closeModal(false);
          }}
          className='absolute p-4 text-4xl font-light text-white transition-all rounded-md bg-accentOrange top-10 right-10 active:scale-95 '>
          <ImCancelCircle />
        </button>

        {/* modal content *******************************************/}
        <div className='flex flex-col items-center h-[80%] w-[95%] md:w-3/4 px-2 md:px-12 py-8 overflow-y-scroll text-white border-2 rounded-lg bg-backgroundPrimary border-accentOrange'>
          <span className='mb-12 text-3xl md:text-5xl font-bold'>Requested Donations</span>

          {/* requested donations list */}

          {finalarray.map((item,key) => {
            return (
              // list item
              <div key={key} className='flex flex-col w-full p-4 px-6 mt-4 mb-4 rounded-lg bg-backgroundSecondary'>
                <div className='flex w-full'>
                  {/* col 1 */}
                  <div className='flex w-[60%] flex-col  px-4 items-center justify-center'>
                    {/* address */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>{item.address}</span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Address
                      </span>
                    </div>
                    {/* description */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>{item.description}</span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Description
                      </span>
                    </div>
                  </div>
                  {/* col 2 */}
                  <div className='flex w-[40%] flex-col px-4 items-center justify-center'>
                    {/* amount */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>
                        {item.amaount} Eth.
                      </span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Amount
                      </span>
                    </div>
                    {/* Approvals */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>
                        {item.ApprovalCount} /
                        {totalcount}
                      </span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Approval Count
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => approveDonationHandler(key)}
                  className='flex items-center px-5 py-2 mt-4 mb-2 ml-4 text-xl font-semibold transition-all border-2 rounded-lg w-fit border-accentPurple hover:bg-accentPurple bg-backgroundPrimary active:scale-95'>
                  {item.Completed? 'Approved':'Approve'}
                </button>
              </div>
            );
          })}
        </div>
        {/* ******************************************************** */}
      </div>
    </div>
  );
};

export default ViewDonationRequests;
