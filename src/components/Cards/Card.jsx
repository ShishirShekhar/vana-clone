// Import required module.
import React from 'react';
// Import required components.
import SecondaryButton from '../SecondaryButton';

const Card = ({ heading, description, image, button }) => {
  return (
    <div className='bg-white p-5 rounded-3xl flex flex-col justify-between md:my-5 md:flex-row lg:flex-row'>
      {/* Create division for content */}
      <div className='flex flex-col justify-center pl-2 gap-4 w-full text-center md:text-left lg:pr-20 md:pr-10'>
        {/* Add heading */}
        <h1 className='font-syne text-2xl font-bold md:text-4xl'>
          {heading}
        </h1>
        {/* Add description */}
        <p>
          {description}
        </p>
        {/* Add button */}
        {button && <SecondaryButton value='Explore The Data' />}
      </div>
      {/* Add image */}
      <img src={image} alt="card-img" className='w-full py-10 md:w-5/12 lg:w-4/7' />
    </div>
  )
}

export default Card;
