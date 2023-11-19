import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-xl text-[#8892b0]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          KARTHIK K KUTTY
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          I'm a Front End Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a front End developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building robust and responsive User Interfaces. </p>
        
         <p className='text-[#8892b0] py-4 max-w-[700px]'> I'm passionate about cutting-edge, pixel-perfect beautiful Interfaces
          and intuitively implemented UX.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to='projects' smooth={true} duration={500}>
            View Projects
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;