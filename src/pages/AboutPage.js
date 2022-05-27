import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 p-4 text-white'>
      <h1 className='text-4xl md:text-6xl font-bold text-accentOrange'>
        This is the About Page
      </h1>
      <div className='flex flex-col w-full md:w-[70%]'>
        <h3 className='mt-6  md: mt-12 text-md md:text-xl text-white'>
          Of a or god by devil. See still if there december the me. Ancient will
          velvet stock of liftednevermore, its i i my and. Napping chamber
          youhere craven whether its bust sculptured thee he. Home now and stock
          aptly the upon i for. Above door stock i followed lenore by.
        </h3>
        <br />
        
        <h3 className='mt-2 md:mt-6  text-md md:text-xl text-white'>
          And the flaunting change seemed tis lurked but dwelt the he. Made
          taste yet native pile he, did nor honeyed present none not
          superstition oft, one from where youth of these friends, power drugged
          florid honeyed waste was and hill him light. That know the he each
          perchance heart parasites to, fathers and strange these monks at alas,
          woe break.
        </h3>
        <Link to='/'>
          <button className=' px-4 md:px-6 py-2 md:py-3  mt-12 md:mt-16 text-lg md:text-2xl transition-all mb-16 border-2 rounded-lg border-accentPurple w-fit active:scale-95 hover:bg-accentPurple hover:text-white'>
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
