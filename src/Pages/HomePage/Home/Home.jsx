import React from 'react';
import Banner from '../Banner/Banner';
import ToysGallery from '../ToysGallery/ToysGallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <ToysGallery></ToysGallery>

            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;