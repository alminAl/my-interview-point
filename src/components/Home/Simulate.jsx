import React from 'react';
import simulate from '../../assets/icons/anywhere.svg';
import camera from '../../assets/icons/built-in-camera.svg';
import improve from '../../assets/icons/improve.svg'

const Simulate = () => {
    return (
        <div className='py-10'>
            <div className='mx-10 md:mx-60  mb-10'>
                <div className='lg:grid lg:grid-cols-3 gap-10'>
                    <div className='mb-8 lg:mb-0 mx-auto w-full lg:mx-0 '>
                        <img src={simulate} alt={simulate} className='mx-auto lg:mx-0' />
                        <h4 className='text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]'>Simulate Realistic Interviews Anywhere</h4>
                        <p className='text-base text-center lg:text-left text-[#000f38] '>Take unlimited mock interviews whenever you want, wherever you want.</p>
                    </div>
                    <div className='mb-8 lg:mb-0 mx-auto w-full lg:mx-0 '>
                        <img src={camera} alt={camera} className='mx-auto lg:mx-0' />
                        <h4 className='text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]'>Put On the Pressure with Your Built-In Camera</h4>
                        <p className='text-base text-center lg:text-left text-[#000f38] '>We raise the stakes by recording your responses to create realistic interview pressure.</p>
                    </div>
                    <div className='mb-8 lg:mb-0 mx-auto w-full lg:mx-0 '>
                        <img src={improve} alt={improve} className='mx-auto lg:mx-0' />
                        <h4 className='text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]'>Watch Your Recorded Interviews and Improve</h4>
                        <p className='text-base text-center lg:text-left text-[#000f38]'>
                            Know exactly how you came across and refine your approach to nail the interview.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulate;