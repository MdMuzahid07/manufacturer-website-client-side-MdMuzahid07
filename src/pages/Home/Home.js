import React from 'react';
import EliteSeriesBanner from './Banners/EliteSeriesBanner';
import LandingBanner from './Banners/LandingBanner';


const Home = () => {
    return (
        <div>
            <LandingBanner />
            <EliteSeriesBanner />
        </div>
    );
};

export default Home;