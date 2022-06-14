// Import required modules.
import React, { useState } from 'react';
// Import required components.
import Nav from './Nav/Nav';
import Input from './Input';
// Import required images.
import tick from '../../images/tick.png';
import homeImg from '../../images/home-img.png';
import homeImgSm from '../../images/homeImg-sm.png';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='w-full bg-amber-100 rounded-3xl md:p-10 md:my-4'>
      {/* Add nav component */}
      <div className='p-10'>
        <Nav isActive={isActive} setIsActive={setIsActive} />
      </div>
      {
        isActive &&
        <div className='flex flex-col items-center text-lg border-2 border-black bg-white p-2 mt-4 rounded-3xl'>
          <a href="https://www.vana.xyz/about" target='_blank' rel="noopener noreferrer" className='w-full'>
            <button className='px-5 py-2 w-full hover:bg-orange-500 hover:text-white rounded-lg'>About</button>
          </a>
          <a href="https://jobs.lever.co/Vana" target='_blank' rel="noopener noreferrer" className='w-full'>
            <button className='px-5 py-2 w-full hover:bg-orange-500 hover:text-white rounded-lg'>Careers</button>
          </a>
        </div>
      }
      {/* Add other home components */}
      <div className=' flex flex-col justify-center items-center text-center md:py-20 lg:px-32'>
        {/* Add heading */}
        <h1 className='text-5xl font-bold font-syne md:text-6xl lg:text-7xl'>
          Unlock The Value Of Data
        </h1>
        {/* Add description */}
        <p className='text-xl md:p-5 pb-4'>
          Vana is a data ecosystem for users to reappropriate their data and data scientists to train machine learning models on previously siloed datasets
        </p>
        {/* Add email input */}
        <Input />
        {/* Add slot description */}
        <div className='flex justify-center items-center p-5'>
          <img src={tick} alt="check" className='w-7 text-black' />
          <p>15,000+ people reserved their spot</p>
        </div>
      </div>

      {/* Add image */}
      <img src={homeImg} alt="hero-img" className='hidden md:block' />
      <img src={homeImgSm} alt="hero-img" className='md:hidden' />

    </div>
  );
};

// By default export Home export.
export default Home;
