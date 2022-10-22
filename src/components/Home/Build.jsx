import React from 'react';
import build from '../../assets/icons/build-interview-confidence.svg';
import skill from '../../assets/icons/land-the-job.svg';
import earn from '../../assets/icons/earn-more.svg'

const Build = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='mx-5 md:mx-60 mt-10 lg:mb-10 mb-5'>
                <div className='lg:grid lg:grid-cols-3 gap-10'>
                    <div className='mb-8 lg:mb-0 mx-auto w-2/4 lg:mx-0 lg:w-full'>
                        <img src={build} alt={build} className='mx-auto lg:mx-0' />
                        <h4 className='text-xl lg:text-2xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]'>Build interviews.</h4>
                        <p className='text-base text-center lg:text-left text-[#000f38] lg:text-lg'>Using your own questions.</p>
                    </div>
                    <div className='mb-8 lg:mb-0 mx-auto w-2/4 lg:mx-0 lg:w-full'>
                        <img src={skill} alt={skill} className='mx-auto lg:mx-0' />
                        <h4 className='text-xl text-center lg:text-left lg:text-2xl mt-3 mb-2 font-bold text-[#000f38]'>Level up your skills.</h4>
                        <p className='text-base text-center lg:text-left text-[#000f38] lg:text-lg'>With our exclusive interview training program.</p>
                    </div>
                    <div className='mb-8 lg:mb-0 mx-auto w-2/4 lg:mx-0 lg:w-full'>
                        <img src={earn} alt={earn} className='mx-auto lg:mx-0' />
                        <h4 className='text-xl text-center lg:text-left lg:text-2xl mt-3 mb-2 font-bold text-[#000f38]'>Share practices.</h4>
                        <p className='text-base text-center lg:text-left text-[#000f38] lg:text-lg'>
                            Get feedback from anyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Build;