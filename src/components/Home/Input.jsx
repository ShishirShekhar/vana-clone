// Import required modules
import React from 'react';
// Import required components
import PrimaryButton from '../PrimaryButton';
// Import required images
import email from '../../images/email.svg';

const Input = () => {
    return (
        <div className='flex gap-2 p-2 bg-white rounded-lg w-2/5 border-2 border-black active:border-blue-400'>
            {/* Add email image */}
            <img src={email} alt="email" />
            {/* Add input area */}
            <input type="email" name="email" id="email" placeholder='Enter your email' className='focus:outline-none w-3/5' />
            {/* Add primary button */}
            <PrimaryButton value={'Reserve My Spot'} />
        </div>
    );
};

// By default export Input.
export default Input;
