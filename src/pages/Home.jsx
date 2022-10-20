import React from 'react';
import Master from '../components/Home/Master';
import Mock from '../components/Home/Mock';
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
        </div>
    );
};

export default Home;