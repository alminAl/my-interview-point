import React from 'react';
import book from '../../assets/images/book.png'

const Training = () => {
    return (
        <div className='bg-gray-100 mt-10'>
            <div className='min-h-full mx-10 md:mx-52 py-16'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mr-10 w-full'>
                        <img src={book} alt={book} className=" rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>
                        <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                        <h2 className="text-3xl lg:text-4xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Get a leg up with our
                            training program.</h2>
                        <p className="mb-6 text-sm lg:text-base text-[#000f38] text-center lg:text-left">Our training program will teach you how to ace the interview and exceed your interviewer's expectations. From preparation to negotiation, we've got you covered.</p>
                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;