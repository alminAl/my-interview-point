import React from 'react';
import Advisor from '../components/Home/Advisor';
import Build from '../components/Home/Build';
import Cerrier from '../components/Home/Cerrier';
import Interviews from '../components/Home/Interviews';
import Job from '../components/Home/Job';
import Master from '../components/Home/Master';
import Mock from '../components/Home/Mock';
import Parterns from '../components/Home/Parterns';
import Practice from '../components/Home/Practice';
import Review from '../components/Home/Review';
import Simulate from '../components/Home/Simulate';
import Started from '../components/Home/Started';
import Training from '../components/Home/Training';

const Home = () => {
    return (
        <>
            <Master></Master>
            <Mock></Mock>
            <Practice></Practice>
            <Review></Review>
            <Started></Started>
            <Advisor></Advisor>
            <Build></Build>
            <Parterns></Parterns>
            <Interviews></Interviews>
            <Job></Job>
            <Training></Training>
            <Cerrier></Cerrier>
            <Simulate></Simulate>
        </>
    );
};

export default Home;