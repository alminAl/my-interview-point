import React from 'react';
import job from '../../assets/icons/job.svg'
const Job = () => {
    return (
        <div className='mt-10 lg:max-w-sm mx-auto '>
            <div className='px-7'>
                <p className='tracking-wider text-center text-base #000f38 mb-7'><small>GET THE JOB GUARANTEE</small></p>
                <img className='mx-auto mb-7' src={job} alt={job} />
                <p className='text-center text-base lg:text-lg text-[#000f38]'>We're so confident we can get you interview-ready, we're introducing our Get the Job Guarantee. If you don't get the job, we'll give you your money back. Guaranteed.</p>
            </div>
        </div>
    );
};

export default Job;