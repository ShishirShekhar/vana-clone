// Import required modules.
import React, { useState } from 'react';
// Import required components.
import Banner from './Banner/Banner';
import Body from './Body';

const Page = () => {
    // Create state.
  const [banner, useBanner] = useState(true);

    return (
        <div className='p-7 font-DM'>
            {banner && <Banner useBanner={useBanner} />}
            <Body />
        </div>
    );
};

export default Page;
