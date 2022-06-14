// Import required modules.
import React, { useState } from 'react';
// Import required images.
import plus from '../../images/plus.svg';
import close from '../../images/close.svg';

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className='flex flex-col bg-white rounded-3xl border-2 border-black w-full'>
            <div className='flex flex-row justify-between p-5'>
                <h1 className='text-xl font-bold md:text-2xl'>{question}</h1>
                <img src={showAnswer ? close : plus} alt="plus" className='cursor-pointer w-6' onClick={handleClick} />
            </div>
            {
                showAnswer &&
                <div className='text-lg leading-10 px-5 py-5 md:pt-5 md:pb-3 md:text-xl'>
                    {answer}
                </div>
            }
        </div>
    );
};

export default Question;
