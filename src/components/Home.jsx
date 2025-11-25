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
      <div className='max-w-[1000px] mx-auto pl-0 pr-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'></p>
        <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold text-[#ffffff]'
          style={{ marginBottom: '10px', marginTop: '300px'}}
        >
          ANMOL GULATI
        </h1>
        <p className='text-2xl sm:text-3xl font-bold text-[#ffffff] mt-4'>
          AI Researcher & Engineer
        </p>
        <p className='text-xl font-bold text-[#ffffff] mt-2'>
          @ PwC · Silicon Valley
        </p>
        <div>
          <li>
            <Link to='work' smooth={true} duration={500}>
              <button className='text-white text-lg group border-2 px-8 py-4 my-2 mt-8 flex items-center hover:bg-black hover:border-black'>
                View Research
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' size={20} />
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
