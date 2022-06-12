// Import required modules.
import React from 'react';
// Import required components.
import Question from './Question';
// Import required data.
import data from './data';

const Questions = () => {
  return (
    <div className='w-full bg-gray-100 rounded-3xl p-7 my-4'>
        {/* Add heading */}
        <h1 className='font-syne text-5xl font-bold p-10 text-center'>
            Frequently Asked Questions
        </h1>
        {/* Add divisions for questions. */}
        <div className='flex flex-row w-full p-10'>
            {/* Create first column of questions */}
            <div className='flex flex-col w-full'>
                <Question question={data[0].question} answer={data[0].answer} />
                <Question question={data[1].question} answer={data[1].answer} />
                <Question question={data[2].question} answer={data[2].answer} />
                <Question question={data[3].question} answer={data[3].answer} />
            </div>
            {/* Create second column of questions */}
            <div className='flex flex-col w-full'>
                <Question question={data[4].question} answer={data[4].answer} />
                <Question question={data[5].question} answer={data[5].answer} />
                <Question question={data[6].question} answer={data[6].answer} />
                <Question question={data[7].question} answer={data[7].answer} />
            </div>
        </div>
    </div>
  );
};

// By default export Questions.
export default Questions;
