import React from 'react';
import practice from '../../assets/images/Practice.png'
const Practice = () => {
    return (
        <div className='min-h-full mx-5 md:mx-52 mb-5 lg:mb-10'>
            <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                <div className='lg:mr-5 mb-5 lg:mb-0'>
                    <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                    <h2 className="text-3xl lg:text-4xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Practice for the Pressure</h2>
                    <p className="mb-6 text-base text-[#000f38] lg:text-lg font-semibold text-center lg:text-left">We use your built-in camera to recreate the pressure of actual interviews so you can gain realistic experience and feel prepared for anything.</p>

                </div>
                <div className='lg:ml-5'>
                    <img src={practice} alt={practice} className="w-full md:max-w-full  rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Practice;