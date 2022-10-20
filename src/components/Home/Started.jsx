
import React from 'react';
import build from '../../assets/icons/build-interview-confidence.svg';
import hired from '../../assets/icons/get-hired-faster.svg';
import earn from '../../assets/icons/earn-more.svg';
import land from '../../assets/icons/land-the-job.svg';

const Started = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='mx-5 md:mx-60 mt-10 lg:mb-10 mb-5'>
                <div className='flex-col lg:flex lg:flex-row justify-center items-center gap-10 mb-5 lg:mb-10'>
                    <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100">
                        <figure ><img src={build} alt={build} className='block mx-auto lg:inline-block' /></figure>
                        <div >
                            <h2 className='text-center lg:text-left text-[#000f38] mb-5 text-3xl font-bold'>Build interview confidence.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
                            <div className=" justify-end">
                                <button className="btn block mx-auto hover:text-[#000f38] lg:inline-block text-center lg:text-left text-red-600 text-lg  font-bold">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100">
                        <figure className='block mx-auto lg:inline-block'><img src={hired} alt={hired} className='block mx-auto lg:inline-block' /></figure>
                        <div >
                            <h2 className='text-center lg:text-left text-[#000f38]  mb-5 text-3xl font-bold'>Get hired faster.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>Our simulator is optimized to help you master your interview skills in the most efficient way possible, so you can be prepared to ace the interview in no time.</p>
                            <div className=" justify-end">
                                <button className="btn block mx-auto hover:text-[#000f38] lg:inline-block text-center lg:text-left text-red-600 text-lg  font-bold">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-col lg:flex lg:flex-row justify-center items-center gap-10'>
                    <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100">
                        <figure ><img src={earn} alt={earn} className='block mx-auto lg:inline-block' /></figure>
                        <div >
                            <h2 className='text-center lg:text-left text-[#000f38] text-3xl mb-5  font-bold'>Accelerate your career & earn more.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>Master the skill of interviewing by practicing it just like you practice your trade and give your career a boost.</p>
                            <div className=" justify-end">
                                <button className="btn block mx-auto hover:text-[#000f38] lg:inline-block text-center lg:text-left text-red-600 text-lg  font-bold">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100">
                        <figure className='block mx-auto lg:inline-block'><img src={land} alt={land} className='block mx-auto lg:inline-block' /></figure>
                        <div >
                            <h2 className='text-center lg:text-left text-[#000f38] text-3xl mb-5  font-bold'>Land the job you've been dreaming of.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>Gain realistic interview experience and master the skills you need to wow your employers and beat out the competition.</p>
                            <div className=" justify-end">
                                <button className="btn block mx-auto hover:text-[#000f38] lg:inline-block text-center lg:text-left text-red-600 text-lg  font-bold">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;