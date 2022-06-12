// Import required module.
import React from 'react';
// Import required components.
import SecondaryButton from '../SecondaryButton';

const Card = ({ heading, description, image, button }) => {
  return (
    <div className='bg-white p-7 my-5 rounded-3xl flex'>
      {/* Create division for content */}
      <div className='flex flex-col p-20 gap-4'>
        {/* Add heading */}
        <h1 className='font-syne text-4xl font-bold '>
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
      <img src={image} alt="card-img" className='w-2/5' />
    </div>
  )
}

export default Card;
