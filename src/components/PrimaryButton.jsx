// Import required modules
import React from 'react';

const PrimaryButton = ({ value }) => {
  return (
    // Return primary button with given value.
    <button className='px-5 py-4 border-orange-500 bg-orange-400 text-sm text-white font-extrabold rounded-xl hover:bg-orange-300'>
      { value }
    </button>
  )
}

// By default export PrimaryButton
export default PrimaryButton;
