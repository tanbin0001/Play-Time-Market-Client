/* import React from 'react';
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

export default Home; */

import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import ToysGallery from '../ToysGallery/ToysGallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';

import Spinner from '../../../shared/Spinner/Spinner';
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Banner />
                    <ToysGallery />
                    <ShopByCategory />
                </>
            )}
        </div>
    );
};

export default Home;
