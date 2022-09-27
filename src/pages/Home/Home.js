import React from 'react';
import BusinessSummary from './BusinessSummary';
import EliteSeriesBanner from './Banners/EliteSeriesBanner';
import LandingBanner from './Banners/LandingBanner';
import ToughSeriesBanner from './Banners/ToughSeriesBanner';
import FollowUs from './FollowUs';
import Reviews from '../Home/Reviews/Reviews'
import AllProducts from './AllProducts';


const Home = () => {

    return (
        <div>
            <LandingBanner />
            <EliteSeriesBanner />
            <ToughSeriesBanner />
            <AllProducts />
            <BusinessSummary />
            <Reviews />
            <FollowUs />
        </div>
    );
};

export default Home;