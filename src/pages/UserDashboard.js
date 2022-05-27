import { useState } from 'react';

// Page Components
import UserProfileCard from '../components/PageComponents/UserPageComponents/UserProfileCard';

// Request and Send Modals
import SendDonationModal from './../components/PageComponents/UserPageComponents/SendDonationModal';
import ViewDonationRequests from '../components/PageComponents/UserPageComponents/ViewDonationRequests';

const UserDashboard = () => {
  //* Modal Open/Close States *******************************************************
  // prettier-ignore
  const [isSendDonationModalOpen, setIsSendDonationModalOpen] = useState(false);
  const [isViewDonationRequestsModalOpen, setIsViewDonationRequestModalOpen] =
    useState(false);
  //* ********************************************************************************

  //? /////////////////////////////////////////////////////////
  //? Data for Requests sent to user from Admin of the Fund ///

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
  ];

  const DUMMY_USER_WALLET_ADDRESS =
    'UWisubwuboberIBIlnvviene823759832jjiguwbguiwe';
  return (
    <>
      {/* Modals ***********************************************/}

      {/* send donation to the fund */}
      {isSendDonationModalOpen && (
        <SendDonationModal closeModal={setIsSendDonationModalOpen} />
      )}
      {/* Donation Requests from the admin*/}
      {isViewDonationRequestsModalOpen && (
        <ViewDonationRequests
          //! This data is Dummy !!!!!!!!!!!!!!!!!!!!!
          donationData={DUMMY_REQUEST_DATA}
          closeModal={setIsViewDonationRequestModalOpen}
        />
      )}

      {/* ****************************************************** */}

      {/* HomePage */}
      <div className='flex justify-center flex-1 mt-16 text-white '>
        <UserProfileCard
          setSendDonationModal={setIsSendDonationModalOpen}
          setViewDonationRequests={setIsViewDonationRequestModalOpen}
          // USER WALLET ADDRESS HERE !!!!!!!!!!!!!!!!!!!!!!!!!
          userWalletAddress={DUMMY_USER_WALLET_ADDRESS}
          // /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        />
      </div>
    </>
  );
};

export default UserDashboard;
