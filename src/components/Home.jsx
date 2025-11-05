import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Background from '../assets/background.png';

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen'
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'></p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'
          style={{ marginBottom: '0px', marginTop: '300px'}}
        >
          ANMOL GULATI
        </h1>
        <p className='font-bold text-[#ffffff] py-4 max-w-[700px]'>
          AI Researcher & Engineer @ PwC
        </p>
        <div>
          <li>
            <Link to='work' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black'>
                View Research
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
