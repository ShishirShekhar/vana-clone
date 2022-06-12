// Import required modules.
import React from 'react';
// Import required images.
import logo from '../../images/logo.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';

const Nav = () => {
  return (
    <div className='flex justify-between px-24'>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <div className='flex text-lg border-2 border-black p-2 rounded-lg '>
        <a href="https://www.vana.xyz/about">
          <button className='px-5 py-2 hover:bg-orange-500 hover:text-white rounded-lg'>About</button>
        </a>
        <a href="https://jobs.lever.co/Vana" target='_blank' rel="noopener noreferrer">
          <button className='px-5 py-2 hover:bg-orange-500 hover:text-white rounded-lg'>Careers</button>
        </a>
      </div>

      <div className='flex gap-4'>
        <a href="https://twitter.com/usevana" target='_blank' rel="noopener noreferrer">
          <img src={twitter} alt="twitter" className='w-10' />
        </a>
        <a href="https://www.instagram.com/vanahq/" target='_blank' rel="noopener noreferrer">
          <img src={instagram} alt="instagram" className='w-10' />
        </a>
      </div>
    </div>
  );
};

export default Nav;