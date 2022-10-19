import React from 'react';
import Master from '../components/Home/Master';
import Mock from '../components/Home/Mock';
import Practice from '../components/Home/Practice';
import Review from '../components/Home/Review';

const Home = () => {
    return (
        <div>
            <Master></Master>
            <Mock></Mock>
            <Practice></Practice>
            <Review></Review>
        </div>
    );
};

export default Home;