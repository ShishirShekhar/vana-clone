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
        <div className='flex flex-col bg-white p-5 m-2 w-10/12 rounded-3xl border-2 border-black'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-2xl font-bold'>{question}</h1>
                <img src={showAnswer ? close : plus} alt="plus" className='cursor-pointer' onClick={handleClick} />
            </div>
            {
                showAnswer &&
                <div className='text-xl leading-10 pt-5 pb-3'>
                    {answer}
                </div>
            }
        </div>
    );
};

export default Question;
