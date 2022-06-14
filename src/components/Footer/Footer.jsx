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
    <div className='w-full bg-teal-900 rounded-xl p-10 flex flex-col gap-4 md:my-4 md:rounded-3xl'>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          <a href="/" className='flex justify-center md:block'>
            <img src={white_logo} alt="logo" className='w-10' />
          </a>
          <p className='text-white text-lg leading-8 md:text-xl'>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <input type="email" name="email" id="email" placeholder='Enter your email' className='focus:outline-none p-5 w-full rounded-xl lg:w-2/3' />
            <PrimaryButton value="Join Newsletter" />
          </div>
          <p className='text-gray-400 text-sm'>
          By subscribing you agree to with our privacy policy and provide consent to receive updates from our company.
          </p>
        </div>
        <div className='flex flex-col gap-8 text-center justify-between py-6 w-full md:gap-0 md:text-left md:flex-row lg:w-1/2'>
          <FooterInfo heading="Contact Us" values={data[0]} />
          <FooterInfo heading="Company" values={data[1]} />
          <FooterInfo heading="Social" values={data[2]} />
        </div>
      </div>
      <div className='w-full h-0 border-t-2 border-white'></div>
      <div className='flex flex-col-reverse justify-between items-center text-gray-400 py-4 md:flex-row'>
        <p>© Corsali, Inc dba Vana. All right reserved.</p>
        <a href='https://www.vana.xyz/privacy-policy'>Privacy Policy</a>
      </div>
    </div>
  );
};

// By default export Footer.
export default Footer;
