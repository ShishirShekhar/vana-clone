// Import required modules.
import React from 'react';
// Import required components.
import Question from './Question';
// Import required data.
import data from './data';

const Questions = () => {
  return (
    <div className='w-full bg-gray-100 rounded-xl md:p-10 md:my-4 md:rounded-3xl'>
        {/* Add heading */}
        <h1 className='font-syne text-3xl font-bold text-center py-10 md:p-10 md:text-5xl'>
            Frequently Asked Questions
        </h1>
        {/* Add divisions for questions. */}
        <div className='flex flex-col w-full'>
            {/* Create first row of questions */}
            <div className='flex flex-col p-2 gap-8 md:flex-row'>
                <Question question={data[0].question} answer={data[0].answer} />
                <Question question={data[1].question} answer={data[1].answer} />
            </div>
            {/* Create second row of questions */}
            <div className='flex flex-col p-2 gap-8 md:flex-row'>
                <Question question={data[2].question} answer={data[2].answer} />
                <Question question={data[3].question} answer={data[3].answer} />
            </div>
            {/* Create third row of questions */}
            <div className='flex flex-col p-2 gap-8 md:flex-row'>
                <Question question={data[4].question} answer={data[4].answer} />
                <Question question={data[5].question} answer={data[5].answer} />
            </div>
            {/* Create fourth row of questions */}
            <div className='flex flex-col p-2 gap-8 md:flex-row'>
                <Question question={data[6].question} answer={data[6].answer} />
                <Question question={data[7].question} answer={data[7].answer} />
            </div>
        </div>
    </div>
  );
};

// By default export Questions.
export default Questions;
