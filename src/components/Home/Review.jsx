import React from 'react';
import review from '../../assets/images/Review.png'

const Review = () => {
    return (
        <div className='min-h-full mx-5 md:mx-52  mb-5 lg:mb-10'>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                    <img src={review} alt={review} className="w-full md:max-w-full rounded-lg" />
                </div>
                <div className='lg:ml-5 mb-5 lg:mb-0'>
                    <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
                        Review Your Recorded Responses</h2>
                    <p className="mb-6 text-base lg:text-lg font-semibold text-center lg:text-left">Your responses are automatically recorded, so you can watch them after your interview and know exactly how you came across.</p>
                    <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Review;