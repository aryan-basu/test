import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Card Components
import ProfileCard from '../components/PageComponents/AdminPageComponents/ProfileCard';
import AddressBar from './../components/PageComponents/AdminPageComponents/AddressBar';
import DonarList from '../components/PageComponents/AdminPageComponents/DonarList';
import TotalAmountCard from '../components/PageComponents/AdminPageComponents/TotalAmountCard';

// Request and Send Modals

import NewRequest from '../components/PageComponents/AdminPageComponents/NewRequest';
import ViewDonationRequests from '../components/PageComponents/AdminPageComponents/ViewDonationRequests';

const AdminDashboard = () => {
  const navigate = useNavigate();

  //! ********************************************************************************
  const DUMMY_REQUEST_DATA = [
    {
      address: 'aweiwiebii33i32bbveiobiwnbioni3i233ibg3bi',
      request_amount: 2.3,
      description: 'lorem ipsum lorem ipsum lorem ipsum',
      is_approved: false,
      current_approval_count: 1,
      total_approval_count: 3,
    },
    {
      address: 'eknrnrkbneroibn98987834oernbionrbionrbion',
      request_amount: 1.3,
      description: 'rent a car',
      is_approved: false,
      current_approval_count: 1,
      total_approval_count: 2,
    },
    {
      address: 'uuiornberiobniernboi0979878789erobinobnini',
      request_amount: 8,
      description: 'buy a bulb',
      is_approved: false,
      current_approval_count: 0,
      total_approval_count: 2,
    },
    {
      address: 'pkppoouguyvbi644681688168ubibuibuib16816181',
      request_amount: 2.3,
      description: 'apple mango orange teal leo',
      is_approved: false,
      current_approval_count: 0,
      total_approval_count: 1,
    },
    {
      address: 'qqconeincione1897897312jnbninvirnoi20993989029',
      request_amount: 27,
      description: 'jimmy john alder james teal aries',
      is_approved: false,
      current_approval_count: 2,
      total_approval_count: 4,
    },
  ];

  //! ********************************************************************************

  //* Modal Open/Close States *******************************************************
  // prettier-ignore
  const [isNewRequestModalOpen, setIsNewRequestModalOpen ] = useState(false);
  // prettier-ignore
  const [isIsViewPreviousRequestsModalOpen, setIsViewPreviousRequestsModalOpen] = useState(false)

  //* ********************************************************************************

  //* ********************************************************************************
  useEffect(() => {
    navigate('/admin');
  }, []);

  return (
    <>
      {/* Modals ***********************************************/}
      {isNewRequestModalOpen && (
        <NewRequest closeModal={setIsNewRequestModalOpen} />
      )}

      {isIsViewPreviousRequestsModalOpen && (
        <ViewDonationRequests
          closeModal={setIsViewPreviousRequestsModalOpen}
          
        />
      )}

      {/* ****************************************************** */}
      {/* HomePage */}
      {/** 1st column,  user/admin profile card */}
      <div className='flex flex-1 mt-16 text-white '>
        <ProfileCard
          setIsNewRequestModalOpen={setIsNewRequestModalOpen}
          // prettier-ignore
          setIsViewPreviousRequestsModalOpen={setIsViewPreviousRequestsModalOpen}
        />
        {/*2nd column, address, total donation and donor list  */}
        <div className='flex flex-col items-center w-3/4 px-12 '>
          {/* wallet address bar */}
          <AddressBar />
          {/* stats */}
          <div className='flex justify-between flex-1 w-full pt-6'>
            {/* total donations card */}
            <TotalAmountCard />
            {/* donar list card */}
            <DonarList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
