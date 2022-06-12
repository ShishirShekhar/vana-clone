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
    <div className="container mx-auto min-w-full bg-teal-900 p-5 rounded-3xl text-white text-lg flex justify-between items-center">
      <div className="flex justify-center w-full gap-4 items-center">

        <img src={sun} alt="sun" />
        <p className="text-center">
          Join our mission to shift the flow of data for a more prosperous world
        </p>
        <a href="https://jobs.lever.co/Vana" target="_blank" rel="noopener noreferrer">
          <SecondaryButton value="View Open Roles" />
        </a>

      </div>

      <img src={cross} alt="cross" className="cursor-pointer" onClick={handleClick} />
    </div>
  );
};

export default Banner;
