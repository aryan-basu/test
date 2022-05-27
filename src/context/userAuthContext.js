import React, { createContext, useContext, useState,useEffect } from 'react';
import Campaignabi from '../components/PageComponents/contracts/Campaign.json';
import Web3 from "web3";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  //! SETTING A DUMMY USER /////////////////////////////////////
  const [user, setUser] = useState(null);
  const [manager,setmanager]=useState(null);
  const [account,setaccount]=useState(null);

  const loginUser = async() => {
    const web3=window.web3;
    const curr=await web3.eth.getAccounts();
    if(manager===curr[0]){
      console.log('abc');
    setUser({
      id: String(Math.random()),
      userName: 'John Halo',
      email: 'john117@gmail.com',
      // Set true for admin, set false for use
      isAdmin:true,
    });
  }
  else{
    setUser({
      id: String(Math.random()),
      userName: 'John Halo',
      email: 'john117@gmail.com',
      // Set true for admin, set false for use
      isAdmin:false,
    });
  }
  };

  const logoutUser = () => {
    setUser(null);
  };
  //! ////////////////////////////////////////////////////////





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
   // console.log(networkData.address);
    if(networkData){
      const campaign=new web3.eth.Contract(Campaignabi.abi,networkData.address);
      const manager1=await campaign.methods.manager().call();
     await setmanager(manager1);
    await  setaccount(accounts[0]);
    
  
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
    <userAuthContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
