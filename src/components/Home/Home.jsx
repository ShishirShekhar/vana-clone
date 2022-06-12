// Import required modules.
import React from 'react';
// Import required components.
import Nav from './Nav';
import Input from './Input';
// Import required images.
import tick from '../../images/tick.png';
import homeImg from '../../images/home-img.png';

const Home = () => {
  return (
    <div className='w-full bg-amber-100 rounded-3xl p-7 my-4'>
      {/* Add nav component */}
      <Nav />
      {/* Add other home components */}
      <div className='py-20 flex flex-col justify-center items-center text-center'>
        {/* Add heading */}
        <h1 className='text-7xl font-bold font-syne w-7/12'>
          Unlock The Value Of Data
        </h1>
        {/* Add description */}
        <p className='text-xl w-8/12 p-5'>
          Vana is a data ecosystem for users to reappropriate their data and data scientists to train machine learning models on previously siloed datasets
        </p>
        {/* Add email input */}
        <Input />
        {/* Add slot description */}
        <div className='flex justify-center items-center p-5'>
          <img src={tick} alt="check" className='w-7 text-black' />
          <p>15,000+ people reserved their spot</p>
        </div>
        {/* Add image */}
        <img src={homeImg} alt="hero-img" />
      </div>

    </div>
  );
};

// By default export Home export.
export default Home;
