// Import required modules.
import React from 'react';
// Import required components.
import PrimaryButton from '../PrimaryButton';

const Purpose = () => {
  return (
    <div className='w-full bg-teal-900 rounded-3xl my-4 flex'>
        <div className='text-white py-20 pl-20'>
            <h1 className='font-syne text-5xl font-bold py-4'>
                Build with Purpose
            </h1> 
            <p className='text-lg pb-7 w-10/12'>
                At Vana, we're building for a more prosperous world — within our organization and with other organizations around the world.
            </p>
            <PrimaryButton value='View Open Roles ->' />
        </div>
        <div className='bg-sun-mountain bg-no-repeat bg-right-bottom bg-contain w-full '></div>
    </div>
  );
};

export default Purpose;