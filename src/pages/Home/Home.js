import React from 'react';
import BusinessSummary from '../BusinessSummary';
import LatestProducts from '../LatestProducts';
import EliteSeriesBanner from './Banners/EliteSeriesBanner';
import LandingBanner from './Banners/LandingBanner';
import ToughSeriesBanner from './Banners/ToughSeriesBanner';


const Home = () => {
    return (
        <div>
            <LandingBanner />
            <EliteSeriesBanner />
            <ToughSeriesBanner />
            <BusinessSummary/>
            <LatestProducts/>
        </div>
    );
};

export default Home;