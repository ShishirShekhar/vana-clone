import React from 'react';

const SecondaryButton = ({ value }) => {
  return (
    <button className='border-2 p-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-400 hover:text-white w-44'>{ value }</button>
  );
};

export default SecondaryButton;
