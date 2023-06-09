
import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import ToysGallery from '../ToysGallery/ToysGallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';

import Spinner from '../../../shared/Spinner/Spinner';
import useTitle from '../../../hooks/useTitle';
import AwesomeToys from '../AwesomeToys/AwesomeToys';
import Footer from '../../../shared/Footer/Footer';
import NewsLetter from '../NewsLetter/NewsLetter';
import KidsToy from '../kidsToy/KidsToy';
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
                    <ShopByCategory />
                    <AwesomeToys />
                    <KidsToy></KidsToy>
                    <NewsLetter></NewsLetter>
                    <Footer></Footer>
                </>
            )}
        </div>
    );
};

export default Home;
