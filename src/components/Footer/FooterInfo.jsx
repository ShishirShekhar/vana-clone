import React from 'react';

const FooterInfo = ({ heading, values }) => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-md font-bold text-white md:pb-7'>{heading}</h1>
        <div className='flex flex-col gap-2 text-gray-300'>
            {
              values.map((value) => (
                <a href={value.link} className='hover:text-gray-400'>
                    {value.name}
                </a>
              ))
            }
        </div>
    </div>
  );
};

export default FooterInfo;