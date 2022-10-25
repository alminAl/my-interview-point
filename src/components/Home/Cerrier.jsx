import React from 'react';
import bg from '../../assets/images/bg.jpg';
import person from '../../assets/images/person.png'

const Cerrier = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>

            <div className='mx-10 md:mx-60 lg:mb-10 mb-5 px-0 lg:px-10 py-10'>
                <h5 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl py-10 text-center'>"Interviewing can be nerve-wracking, but with this interactive tool I was able to gain confidence by polishing my answers, being aware of timing, and paying attention to my non-verbal language - things that I would not have paid attention to otherwise."</h5>
                <div className='flex items-center justify-center'>
                    <img src={person} alt={person} width='150px' height='100px' className='rounded-[50%] pr-10' />
                    <h5 className='text-base lg:text-lg font-bold text-white'>-Marlene Tillman, Digital Marketer</h5>
                </div>
            </div>
        </div>
    );
};

export default Cerrier;