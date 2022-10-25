
import React from 'react';
import people from '../../assets/images/people.png'
const Advisor = () => {
    return (
        <div className='min-h-full mx-10 md:mx-44 mt-10 lg:mb-28 mb-5'>
            <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                <div className='lg:mr-5 mb-5 lg:mb-0 w-full lg:w-96 '>
                    <p className='tracking-wider text-center lg:text-left text-base'><small>FOR CAREER ADVISORS</small></p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#000f38] mb-6 text-center lg:text-left">Mock Interviews <br /> They Can Take <br /> on Their Own</h2>
                    <p className="mb-6 text-base lg:text-lg text-[#000f38] font-semibold text-center lg:text-left">Provide simulated interviews they can conduct on their own. No need to schedule, commute, or meet in person.</p>
                    <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Learn More</button>
                </div>
                <div className='lg:ml-5'>
                    <img src={people} alt={people} width='500px' className="w-full  rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Advisor;