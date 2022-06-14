import React from 'react';

const WebDes = () => {
  return (
    <div className='w-full rounded-3xl text-center flex flex-col items-center py-10 px-5 md:bg-world-map md:bg-cover md:p-10 md:pb-32 md:my-4 md:mt-28 lg:px-32'>
        <h1 className='text-3xl font-bold font-syne my-4 md:text-6xl'>
            Build The New Data Ecosystem
        </h1>
        <p className='text-md font-thin leading-10 md:text-xl'>
            Vana's data vault gives people ownership of their data with security, privacy, and regulation in mind.
            Users control their data with private keys, bringing it across the internet however they choose.
            Users can grant permissions to data scientists, contributing their data towards training machine learning models to create more knowledge.
            Unlocking data creates new value for organizations while directly paying the users who generate and own the data.
        </p>
    </div>
  );
};

export default WebDes;