import React from 'react';
import accounting from '../../assets/icons/accountant.svg';
import administrative from '../../assets/icons/calendar.svg';
import architecture from '../../assets/icons/architecture.png';
import arts from '../../assets/icons/painting.svg';
import banking from '../../assets/icons/bank.svg';
import education from '../../assets/icons/apple.svg';
import engineering from '../../assets/icons/sketching.svg';
import goverment from '../../assets/icons/capitol.svg';
import health from '../../assets/icons/firstKid.svg';
import hospitality from '../../assets/icons/dinner.svg';
import human from '../../assets/icons/employee.svg';
import humanService from '../../assets/icons/love.svg';
import info from '../../assets/icons/responsive.svg';
import insurance from '../../assets/icons/insurance.svg';
import jurnalism from '../../assets/icons/news.svg';
import balance from '../../assets/icons/balance.svg';
import marketing from '../../assets/icons/megaphone.svg';
import sherif from '../../assets/icons/sheriff.svg';
import school from '../../assets/icons/studying.svg';
import science from '../../assets/icons/dna.svg';
import tranportation from '../../assets/icons/trolley.svg'



const Interviews = () => {
    return (
        <div className='mx-10 md:mx-52 mt-10 lg:mb-28 mb-5'>
            <hr className='w-14 h-2 block mx-auto l bg-red-600 rounded-md mb-5' />
            <h2 className='text-center text-[#000f38] font-bold text-2xl lg:text-4xl'>Mock Interviews for Over <br />
                120 Different Job Titles</h2>
            <div className='grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5  gap-3 mt-10 '>
                <div className='w-24 lg:w-32 hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto ml-2 lg:mx-5'>
                    <img src={accounting} alt={accounting} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Accounting</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={administrative} alt={administrative} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Administrative Support</h4>
                </div >
                <div className='w-24 lg:w-32   hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={architecture} alt={architecture} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Architecture & Construction</h4>

                </div >
                <div className='w-24 lg:w-32 hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={arts} alt={arts} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Arts</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={banking} alt={banking} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Banking & Finance</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={education} alt={education} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Education</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={engineering} alt={engineering} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Engineering</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={goverment} alt={goverment} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Government & Public Admin</h4>
                </div>
                <div className='w-24 lg:w-32 hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={health} alt={health} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Health Science</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={hospitality} alt={hospitality} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Hospitality & Tourism</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={human} alt={human} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Human Resources</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={humanService} alt={humanService} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Human Services</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer block mx-auto lg:mx-5'>
                    <img src={info} alt={info} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Information Technology</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={insurance} alt={insurance} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Insurance</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer block mx-auto lg:mx-5'>
                    <img src={jurnalism} alt={jurnalism} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Journalism & Broadcasting</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={balance} alt={balance} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Law</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={marketing} alt={marketing} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Marketing, Sales & Service</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={sherif} alt={sherif} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Public Safety & Security</h4>
                </div>
                <div className='w-24 lg:w-32 hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={school} alt={school} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>School Admissions</h4>
                </div>
                <div className='w-24 lg:w-32 mb-5 lg:mb-0 hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={science} alt={science} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Science & Mathematics</h4>
                </div>
                <div className='w-24 lg:w-32  hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-lg block mx-auto lg:mx-5'>
                    <img src={tranportation} alt={tranportation} className='w-22' />
                    <h4 className='text-center text-sm lg:text-base font-bold'>Transportation, Distribution & Logistics</h4>
                </div>
            </div>

        </div>
    );
};

export default Interviews;