import React from 'react';
import BusinessSummary from './BusinessSummary';
import LatestProducts from './LatestProducts';
import EliteSeriesBanner from './Banners/EliteSeriesBanner';
import LandingBanner from './Banners/LandingBanner';
import ToughSeriesBanner from './Banners/ToughSeriesBanner';
import FollowUs from './FollowUs';
import Reviews from '../Home/Reviews/Reviews'


const Home = () => {
    return (
        <div>
            <LandingBanner />
            <EliteSeriesBanner />
            <ToughSeriesBanner />
            <LatestProducts />
            <BusinessSummary />
            <Reviews/>
            <FollowUs />
        </div>
    );
};

export default Home;