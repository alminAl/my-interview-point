import React from 'react';
import notFound from '../../assets/images/notFound.png'

const NotFound = () => {
    return (
        <div className='px-6 pt-6 mx-10 md:flex xs:gap-5 justify-center items-center'>
            <div className=''>
                <h3 className='font-bold text-3xl lg:text-5xl text-center my-3' style={{ fontFamily: "'Open Sans', sans-serif", }}>Oops!
                    Page Not Found</h3>
            </div>
            <div className='sm:w-full'>
                <img src={notFound} alt={notFound} />
            </div>
        </div>
    );
};

export default NotFound;