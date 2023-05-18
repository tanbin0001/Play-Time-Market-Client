import React from 'react';
import Banner from '../Banner/Banner';
import ToysGallery from '../ToysGallery/ToysGallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';


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