import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/userAuthContext';

const Navbar = () => {
  const { loginUser, user, logoutUser } = useUserAuth();

  return (
    <div className='flex items-center self-center justify-between w-[96%] px-2 md:px-8 py-2 mt-4 mb-32 border-2 border-accentOrange rounded-xl bg-backgroundSecondary'>
      {/* Logo */}
      <div className='my-2 text-lg md:text-2xl font-bold transition-all border-b-2 cursor-pointer border-b-backgroundSecondary hover:border-b-accentOrange text-accentOrange'>
        ETHER
      </div>

      {/* Links */}
      <div className='flex'>
        <Link to='/'>
          <div className='mr-8 md:font-semibold text-white transition-all cursor-pointer active:scale-95'>
            Home
          </div>
        </Link>

        <Link to='/about'>
          <div className='md:font-semibold text-white transition-all cursor-pointer active:scale-95 '>
            About
          </div>
        </Link>
      </div>

      {/* Login/Signup Button */}
      <button
        onClick={() => {
          user ? logoutUser() : loginUser();
        }}
        className='flex items-center justify-center px-3 md:px-5 py-2 font-semibold text-white transition-all rounded-lg active:scale-95 bg-accentPurple'>
        {user ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Navbar;
