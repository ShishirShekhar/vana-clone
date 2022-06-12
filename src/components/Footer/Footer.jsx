// Import required module.
import React from 'react';
// Import required components.
import PrimaryButton from '../PrimaryButton';
import FooterInfo from './FooterInfo';
// Import required images.
import white_logo from '../../images/logo_white.svg';
// Import required data.
import data from './data';


const Footer = () => {
  return (
    <div className='w-full bg-teal-900 rounded-3xl py-10 px-20 my-4 flex flex-col gap-4'>
      <div className='flex flex-row w-5/12'>
        <div className='flex flex-col gap-4'>
          <a href="/">
            <img src={white_logo} alt="logo" className='w-10' />
          </a>
          <p className='text-white text-xl leading-8'>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className='flex'>
            <input type="email" name="email" id="email" placeholder='Enter your email' className='focus:outline-none p-5 pr-36 mr-2 rounded-xl' />
            <PrimaryButton value="Join Newsletter" />
          </div>
          <p className='text-gray-400 text-sm'>
          By subscribing you agree to with our privacy policy and provide consent to receive updates from our company.
          </p>
        </div>
        <div className='flex flex-row pl-44 py-6'>
          <FooterInfo heading="Contact Us" values={data[0]} />
          <FooterInfo heading="Company" values={data[1]} />
          <FooterInfo heading="Social" values={data[2]} />
        </div>
      </div>
      <div className='w-full h-0 border-t-2 border-white'></div>
      <div className='flex justify-between items-center text-gray-400 py-4'>
        <p>© Corsali, Inc dba Vana. All right reserved.</p>
        <a href='https://www.vana.xyz/privacy-policy'>Privacy Policy</a>
      </div>
    </div>
  );
};

// By default export Footer.
export default Footer;
