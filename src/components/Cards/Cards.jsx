// Import required module.
import React from 'react';
// Import requited components.
import Card from './Card';
// Import required data.
import data from './data';

const Cards = () => {
  return (
    <div className='w-full bg-gray-100 rounded-3xl md:p-10 md:my-4'>
      <Card heading={data[0].heading} description={data[0].description} image={data[0].image} button={data[0].button} />
      <Card heading={data[1].heading} description={data[1].description} image={data[1].image} button={data[1].button} />
      <Card heading={data[2].heading} description={data[2].description} image={data[2].image} button={data[2].button} />
    </div>
  );
};

export default Cards;
