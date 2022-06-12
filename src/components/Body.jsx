// Import required modules.
import React from 'react';
// Import required components.
import Home from './Home/Home';
import WebDes from './WebDes/WebDes';
import Cards from './Cards/Cards';
import Purpose from './PurposeCard/Purpose';
import Questions from './Questions/Questions';
import Footer from './Footer/Footer';

const Body = () => {
  return (
    <div className='my-5'>
        <Home />
        <WebDes />
        <Cards />
        <Purpose />
        <Questions />
        <Footer />
    </div>
  );
};

export default Body;
