
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
                            <h2 className='text-center lg:text-left text-[#000f38] mb-5 text-4xl font-bold'>Build interview confidence.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
                            <div className=" justify-end">
                                <button className="btn block mx-auto hover:text-[#000f38] lg:inline-block text-center lg:text-left text-red-600 text-lg  font-bold">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100">
                        <figure className='block mx-auto lg:inline-block'><img src={hired} alt={hired} className='block mx-auto lg:inline-block' /></figure>
                        <div >
                            <h2 className='text-center lg:text-left text-[#000f38]  mb-5 text-4xl font-bold'>Build interview confidence.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
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
                            <h2 className='text-center lg:text-left text-[#000f38] text-4xl mb-5  font-bold'>Build interview confidence.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
                            <div className=" justify-end">
                                <button className="btn block mx-auto hover:text-[#000f38] lg:inline-block text-center lg:text-left text-red-600 text-lg  font-bold">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100">
                        <figure className='block mx-auto lg:inline-block'><img src={land} alt={land} className='block mx-auto lg:inline-block' /></figure>
                        <div >
                            <h2 className='text-center lg:text-left text-[#000f38] text-4xl mb-5  font-bold'>Build interview confidence.</h2>
                            <p className='text-center lg:text-left text-base lg:text-lg mb-5'>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
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