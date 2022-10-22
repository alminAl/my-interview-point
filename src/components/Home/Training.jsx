import React from 'react';
import book from '../../assets/images/book.png'

const Training = () => {
    return (
        <div className='bg-gray-100 mt-10'>
            <div className='min-h-full mx-10 md:mx-52 py-16  lg:mb-10'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={book} alt={book} width='500px' className="w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>
                        <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                        <h2 className="text-3xl lg:text-4xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Get a leg up with our
                            training program.</h2>
                        <p className="mb-6 text-sm lg:text-base text-[#000f38] text-center lg:text-left">Our training program will teach you how to ace the interview and exceed your interviewer's expectations. From preparation to negotiation, we've got you covered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;