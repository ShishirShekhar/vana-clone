// Import required modules.
import React, { useState } from 'react';
// Import required components.
import Banner from './Banner/Banner';
import Body from './Body';

const Page = () => {
    // Create state.
  const [banner, useBanner] = useState(true);

    return (
        <div className='font-DM md:p-7'>
            {banner && <Banner useBanner={useBanner} />}
            <Body />
        </div>
    );
};

export default Page;
