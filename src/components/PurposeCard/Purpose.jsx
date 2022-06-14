// Import required modules.
import React from 'react';
// Import required components.
import PrimaryButton from '../PrimaryButton';

const Purpose = () => {
  return (
    <div className='w-full bg-teal-900 rounded-xl flex bg-sun-mountain bg-no-repeat bg-bottom bg-70% md:my-4 md:rounded-3xl md:bg-right-bottom md:bg-50%'>
      <div className='text-white text-center p-5 py-10 md:p-10 md:text-left'>
          <h1 className='font-syne text-4xl md:text-5xl font-bold py-4'>
            Build with Purpose
          </h1> 
          <p className='text-lg pb-7 md:w-2/3 lg:w-1/2 '>
            At Vana, we're building for a more prosperous world — within our organization and with other organizations around the world.
          </p>
          <PrimaryButton value='View Open Roles ->' />
      </div>
    </div>
  );
};

export default Purpose;