import React from 'react';
import master from '../../assets/images/Master.png';

const Master = () => {
    return (
        <div className='min-h-full mx-5 md:mx-52 mt-10 lg:mb-28 mb-5'>
            <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                <div className='lg:mr-5 mb-5 lg:mb-0'>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#000f38] mb-6 text-center lg:text-left">Master the <br /> interview & land a <br /> job worth loving.</h2>
                    <p className="mb-6 text-base lg:text-lg text-[#000f38] font-semibold text-center lg:text-left">Simulate realistic interviews for over 120 different job positions and level up your skills in no time.</p>
                    <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Learn More</button>
                </div>
                <div className='lg:ml-5'>
                    <img src={master} alt={master} className="w-full md:max-w-full  rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Master;