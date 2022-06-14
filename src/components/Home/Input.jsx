// Import required modules
import React from 'react';
// Import required components
import PrimaryButton from '../PrimaryButton';
// Import required images
import email from '../../images/email.svg';

const Input = () => {
    return (
        <div className='flex gap-2 p-2 py-4 w-4/5 bg-white rounded-lg border-2 border-black active:border-blue-400 md:justify-between xl:w-6/12 lg:w-10/12 md:w-9/12'>
            {/* Add email image */}
            <img src={email} alt="email" />
            {/* Add input area */}
            <input type="email" name="email" id="email" placeholder='Enter your email' className='focus:outline-none w-3/5' />
            {/* Add primary button */}
            <div className='hidden md:block'>
                <PrimaryButton value={'Reserve My Spot'} />
            </div>
        </div>
    );
};

// By default export Input.
export default Input;
