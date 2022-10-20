import React from 'react';
import purple from '../../assets/patners/purple.png';
import thrive from '../../assets/patners/thrive.png';
import webstar from '../../assets/patners/webster.png';
import carrier from '../../assets/patners/carrierLife.png';
import keystone from '../../assets/patners/keystone.png';
import impact from '../../assets/patners/impact.png';
import colorado from '../../assets/patners/colorado.png';
import dalton from '../../assets/patners/dalton.png';

const Parterns = () => {
    return (
        <div className='min-h-full mx-5 md:mx-52 mt-10 lg:mb-28 mb-5'>
            <p className='tracking-wider text-center text-base mb-7'>OUR PARTNERS</p>
            <div className='lg:grid lg:grid-cols-6 gap-4 '>
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={purple} alt={purple} />
                </div>
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={thrive} alt={thrive} />
                </div >
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={carrier} alt={carrier} />
                </div >
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={webstar} alt={webstar} />
                </div>
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={keystone} alt={keystone} />
                </div>
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={impact} alt={impact} />
                </div>
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={colorado} alt={colorado} />
                </div>
                <div className='w-32 mb-5 lg:mb-0 block mx-auto lg:mx-5'>
                    <img src={dalton} alt={dalton} />
                </div>
            </div>
        </div>
    );
};

export default Parterns;