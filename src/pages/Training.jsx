import React from 'react';
import training1 from '.././assets/images/training1.png';
import training2 from '.././assets/images/training2.png'
import LessonPlan from '../components/TrainingComponents/LessonPlan';
// import TrainingGuides from '../components/TrainingComponents/TrainingGuides';
import TrainingJourney from '../components/TrainingComponents/TrainingJourney';


const Training = () => {
    return (
        <div>
            <div className='min-h-full lg:mx-40  mb-5 lg:mb-10 mt-20'>
                <div className='min-h-full mx-10 md:mx-52 mb-5 lg:mb-10'>
                    <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                        <div className='lg:mr-5 mb-5 lg:mb-0'>
                            <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                            <h1 className="text-3xl lg:text-5xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Complete Online <br />
                                Video Course</h1>
                            <p className="mb-6 text-base text-[#000f38] lg:text-lg font-semibold text-center lg:text-left ">Our interview masterclass is packed with tips you can use right away to ace your next interview. Each video is fun to watch, so feeling prepared can feel effortless.</p>

                            <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Watch a Lesson</button>

                        </div>
                        <div className='lg:ml-5'>
                            <img src={training1} alt={training1} className="w-full md:max-w-full  rounded-lg" />
                        </div>
                    </div>
                </div>


                <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20'>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                        <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                            <img src={training2} alt={training2} className="w-full md:max-w-full rounded-lg" />
                        </div>
                        <div className='lg:ml-5 mb-5 lg:mb-0'>
                            <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                            <h2 className="text-3xl lg:text-5xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                                Training Guides & Worksheets</h2>
                            <p className="mb-6 text-base text-[#000f38] lg:text-lg font-semibold text-center lg:text-left">Master your interview skills with our comprehensive guides and downloadable worksheets. Each guide is crafted with care and optimized for easy reading on all devices so you can learn on the go.</p>

                        </div>
                    </div>
                </div>


                {/* <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20'>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                        <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                            <iframe
                                title="a2"
                                src="https://www.youtube.com/embed/Ht45lw8VvWo"
                                className=" left-0 w-80 h-80 rounded "
                                alt="video"
                            ></iframe>
                        </div>
                        <div className='lg:ml-5 mb-5 lg:mb-0'>
                            <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                            <h2 className="text-3xl lg:text-5xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                                Training Guides & Worksheets</h2>
                            <p className="mb-6 text-base text-[#000f38] lg:text-lg font-semibold text-center lg:text-left">Master your interview skills with our comprehensive guides and downloadable worksheets. Each guide is crafted with care and optimized for easy reading on all devices so you can learn on the go.</p>

                        </div>
                    </div>
                </div> */}

            </div>
            {/* <TrainingGuides></TrainingGuides> */}
            <TrainingJourney></TrainingJourney>
            <LessonPlan></LessonPlan>
        </div>
    );
};

export default Training;