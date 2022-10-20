import React from 'react';
import Advisor from '../components/Home/Advisor';
import Master from '../components/Home/Master';
import Mock from '../components/Home/Mock';
import Parterns from '../components/Home/Parterns';
import Practice from '../components/Home/Practice';
import Review from '../components/Home/Review';
import Started from '../components/Home/Started';

const Home = () => {
    return (
        <div>
            <Master></Master>
            <Mock></Mock>
            <Practice></Practice>
            <Review></Review>
            <Started></Started>
            <Advisor></Advisor>
            <Parterns></Parterns>
        </div>
    );
};

export default Home;