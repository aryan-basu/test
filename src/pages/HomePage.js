import HomepageMainImage from './../assets/HomePage_MainSVG.svg';
import Homepage_Bullet_1 from './../assets/Homepage_Bullet_1.svg';
import Homepage_Bullet_2 from './../assets/Homepage_Bullet_2.svg';

import Homepage_SVG_1 from './../assets/Homepage_SVG_1.svg';
import Homepage_SVG_2 from './../assets/Homepage_SVG_2.svg';
import Homepage_SVG_3 from './../assets/Homepage_SVG_3.svg';

import PageDivider from '../assets/PageDivider';

import Footer from './../components/UIComponents/Footer';

const HomePage = () => {
  return (
    <div className='flex flex-col  flex-1 text-white '>
      {/* main content */}
      <div className='flex '>
        {/* main  text content  */}
        <div className='flex w-1/2 px-8 py-12'>
          <div className='flex flex-col flex-1'>
            <h1 className='text-6xl font-extrabold text-accentOrange'>
              Covid Relief
            </h1>
            <h3 className='text-2xl font-semibold text-right text-[#797979]'>
              Security, Transparency and Accountability
            </h3>
            <br />
            <h4 className=' mt-12 text-2xl font-semibold '>
              Ether Covid Relief fund aims to solve the two problems that
              palgues almost all charites, NGO’s.{' '}
            </h4>
            {/* Bullet point 1 */}
            <span className='flex flex-row text-xl mt-8 align-center'>
              <img
                className='pr-4'
                src={Homepage_Bullet_1}
                alt='Bullet Point 1'
              />
              <h4>
                To make sure your money reaches the pople who need it the most
                without the middleman.
              </h4>
            </span>
            {/* Bullet Point 2 */}
            <span className='flex flex-row text-xl mt-8 align-center'>
              <img
                className='pr-4'
                src={Homepage_Bullet_2}
                alt='Bullet Point 1'
              />
              <h4>
                To make sure that even when the money has left your wallet, you
                have the say in how and where it is being used.
              </h4>
            </span>
          </div>
        </div>
        {/* image */}
        <div className='flex flex-1 p-16  '>
          <img src={HomepageMainImage} alt='homepage main image ' />
        </div>
      </div>

      {/* page divider */}
      <PageDivider />

      {/* info item 1 */}

      <div className='flex w-[90%] mt-32  self-center'>
        <div className='flex w-[50%]'>
          <img src={Homepage_SVG_1} alt='svg1' />
        </div>
        <div className='flex flex-col justify-center w-[50%] '>
          <h1 className='text-5xl font-extrabold text-accentOrange'>
            Power to You
          </h1>
          <h2 className='text-2xl mt-12 font-semibold'>
            It is your money, you decide how and where it is being used.
          </h2>
          <h3 className='text-xl mt-8  '>
            Ether emloys the blockchain where the donor can vote for/against a
            proposal the charity has put forward.All this happens of the
            blockchain, ensuring the process is transparent and tamper-proff.
          </h3>
        </div>
      </div>

      {/* info item 2 */}

      <div className='flex w-[90%] mt-32  self-center'>
        <div className='flex flex-col justify-center w-[50%] '>
          <h1 className='text-5xl font-extrabold text-accentOrange'>
            Transparency
          </h1>
          <h2 className='text-2xl mt-12 font-semibold'>
            Every transaction is on the blockchain.
          </h2>
          <h3 className='text-xl mt-8  '>
            Being powered by the blockchain, Every transaction is on the
            blockchain which cannot be tampered with.Anyone can view and audit
            the fund.
          </h3>
        </div>
        <div className='flex w-[50%] p-12'>
          <img src={Homepage_SVG_2} alt='svg1' />
        </div>
      </div>

      {/* info item 3 */}

      <div className='flex w-[90%] mt-32 mb-32   self-center'>
        <div className='flex w-[50%] p-12 '>
          <img src={Homepage_SVG_3} alt='svg1' />
        </div>
        <div className='flex flex-col justify-center w-[50%] '>
          <h1 className='text-5xl font-extrabold text-accentOrange'>
            Security
          </h1>
          <h2 className='text-2xl mt-12 font-semibold'>
            How secure is it really?
          </h2>
          <h3 className='text-xl mt-8  '>
            In reality, brute force attacks on a Blockchain are as close to
            mathematically impossible as it gets. A private key is a number
            between one, and 2^256. That means a brute force attack has to
            search for the right number between one and 115
            quattuorvigintillion. For perspective, that’s a 78-digit number
            that’s estimated to be greater than the total number of atoms in the
            universe.
          </h3>
        </div>
      </div>

      {/* footer (MAKE IT UNIVERSAL) */}
      <Footer />
    </div>
  );
};

export default HomePage;
