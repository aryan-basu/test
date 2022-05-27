import copyright from './../../assets/Footer_Copyright_Symbol.svg';

const Footer = () => {
  return (
    <div className='flex items-center self-center justify-between w-[96%] px-2 md:px-8 py-4 mt-4 mb-8 border-2 border-accentOrange rounded-xl bg-backgroundSecondary'>
      <h3 className='text-xl text-white'>
        {' '}
        Project by Aryan Basu & Aryan Sharma
      </h3>

      <span className='flex justify-center align-center'>
        <img
          className='w-4 mr-2 mt-1  text-white '
          src={copyright}
          alt='copyright_symbol'
        />
        <h2 className='text-xl font-bold'>2022</h2>
      </span>
    </div>
  );
};

export default Footer;
