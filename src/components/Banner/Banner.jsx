// Import required modules
import React from "react";
// Import required components.
import SecondaryButton from "../SecondaryButton";
// Import required images.
import sun from '../../images/sun.svg';
import cross from '../../images/cross.svg';

const Banner = (props) => {

  const handleClick = () => {
    props.useBanner(false);
  }

  return (
    <div className="bg-teal-900 px-10 py-4 rounded-xl text-white text-lg flex justify-between md:rounded-3xl lg:items-center">
      <div className="flex flex-col w-full gap-2 items-center md:items-start lg:gap-4 lg:justify-center lg:items-center lg:flex-row">

        <img src={sun} alt="sun" className="hidden lg:block lg:w-fit" />
        <button className="text-sm font-bold border-2 border-white rounded-3xl w-32 lg:hidden">WE'RE HIRING</button>
        <p className="lg:text-center">
          Join our mission to shift the flow of data for a more prosperous world
        </p>
        <a href="https://jobs.lever.co/Vana" target="_blank" rel="noopener noreferrer">
          <SecondaryButton value="View Open Roles" />
        </a>

      </div>

      <img src={cross} alt="cross" className="cursor-pointer hidden md:block" onClick={handleClick} />
    </div>
  );
};

export default Banner;
