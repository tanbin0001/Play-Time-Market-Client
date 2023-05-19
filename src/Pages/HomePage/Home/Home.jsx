
import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import ToysGallery from '../ToysGallery/ToysGallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';

import Spinner from '../../../shared/Spinner/Spinner';
import useTitle from '../../../hooks/useTitle';
import AwesomeToys from '../AwesomeToys/AwesomeToys';
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useTitle('Home')

    useEffect(() => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Banner />
                    <ToysGallery />
                    <AwesomeToys />
                    <ShopByCategory />
                </>
            )}
        </div>
    );
};

export default Home;
