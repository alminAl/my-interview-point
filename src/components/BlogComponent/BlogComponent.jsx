import React from 'react';
import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';

const BlogComponent = () => {
    return (
        <div>
            <div className='min-h-full mx-10 md:mx-52 mt-5  mb-5 lg:mb-10'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={blog1} alt={blog1} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>
                        <p >EDUCATORS</p>
                        {/* <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' /> */}
                        <h2 className="text-3xl lg:text-4xl text-[#000f38] font-bold mb-6 text-center lg:text-left">How To Help Your Student Nail Their Job Interview</h2>
                        <p className="mb-6 text-base lg:text-lg text-[#000f38] font-semibold text-center lg:text-left">Educators are considered one of the biggest investors in a student’s early career, and that role tends to extend beyond the classroom and into the workforce. But how do you help prepare former and current students for this critical transition into a career?

                        </p>
                        <br />
                        <p>November 1 • 6 Minute Read Read</p>
                    </div>
                </div>
            </div>


            <div className='bg-gray-100 py-10'>
                <div className='mx-5 md:mx-60 mt-10 lg:mb-10 mb-5 '>
                    <div className='flex-col lg:flex lg:flex-row justify-center items-center gap-10 mb-5 lg:mb-10 rounded'>
                        <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100 px-12 lg:px-0">
                            <figure ><img src={blog2} alt={blog2} className='block mx-auto lg:inline-block' /></figure>
                            <p>HOW TO ANSWER</p>
                            <div >
                                <h2 className='text-center lg:text-left text-[#000f38] mb-5 text-2xl lg:text-3xl font-bold'>How To Answer Common Behavioral Based Interview Questions</h2>
                                <p className='text-center lg:text-left text-[#000f38] text-base lg:text-lg mb-5'>When preparing for an interview you can anticipate being asked behavioral questions these help confirm your qualifications. How to recognize and respond…

                                </p>
                                <br />
                                <p>January 5 • 5 Minute Read</p>

                            </div>
                        </div>
                        <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100 px-10 lg:px-0">
                            <figure className='block mx-auto lg:inline-block'><img src={blog3} alt={blog3} className='block mx-auto lg:inline-block' /></figure>
                            <div >
                                <p>HOW TO ANSWER</p>
                                <h2 className='text-center lg:text-left text-[#000f38]  mb-5 text-xl lg:text-3xl font-bold'>Behavioral Interview Questions About Achievements</h2>
                                <p className='text-center lg:text-left text-[#000f38] text-base lg:text-lg mb-5'>﻿Tips to answer interview questions about past achievements or accomplishments. Ensure your answer shows your ambition and ability to set and achieve goals.

                                </p>
                                <br />
                                <p>January 30 • 6 Minute Read</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex-col lg:flex lg:flex-row justify-center items-center gap-10'>
                        <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100 px-10 lg:px-0">
                            <figure ><img src={blog4} alt={blog4} className='block mx-auto lg:inline-block' /></figure>
                            <div >
                                <p>HOW TO ANSWER</p>
                                <h2 className='text-center lg:text-left text-[#000f38] text-xl lg:text-3xl mb-5  font-bold'>Behavioral Interview Questions About Communication</h2>
                                <p className='text-center lg:text-left text-[#000f38] text-base lg:text-lg mb-5'>Tips to answer behavioral questions that address your communication skills which include your verbal, written, non-verbal, and visual communication techniques.

                                </p>
                                <br />
                                <p>February 1 • 7 Minute Read</p>

                            </div>
                        </div>
                        <div className="w-full mb-10 lg:mb-0 lg:w-96 bg-base-100 px-10 lg:px-0">
                            <figure className='block mx-auto lg:inline-block'><img src={blog5} alt={blog5} className='block mx-auto lg:inline-block' /></figure>
                            <div >
                                <p>HOW TO ANSWER</p>
                                <h2 className='text-center lg:text-left text-[#000f38] text-xl lg:text-3xl mb-5  font-bold'>Behavioral Interview Questions About Conflict Resolution</h2>
                                <p className='text-center lg:text-left text-[#000f38] text-base lg:text-lg mb-5'>Get ready for behavioral questions in interviews that address your ability to handle conflict. Your response will show how you manage workplace relationships.

                                </p>
                                <br />
                                <p> January 28 • 7 Minute Read</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComponent;