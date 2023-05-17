import React from 'react';

const Banner = () => {
    return (
        <div>


            <div className="carousel    h-screen w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://files.catbox.moe/23zeq2.jpg" className="w-full  " />
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="  absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center space-y-5 mb-10">

                            <h3 className="font-hennypenny text-white   font-bold text-3xl">Discover the world</h3>
                            <h1 className="   text-white text-6xl font-extrabold">Plan a trip to the adventurous world</h1>
                            <button className="btn btn-outline btn-warning">Travel Guide</button>


                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://files.catbox.moe/df928h.jpg" className="w-full  " />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="  absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center space-y-5 mb-10">

                            <h3 className="font-hennypenny text-white   font-bold text-3xl">Explore World Smartly</h3>
                            <h1 className="   text-white text-6xl font-extrabold">Luxurious & adventures trip</h1>
                            <button className="btn btn-outline btn-warning">Travel Guide</button>


                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://files.catbox.moe/co6eci.jpg" className="w-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="  absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center space-y-5 mb-10">
                            <h3 className="font-hennypenny text-white   font-bold text-3xl">Thrilled Nigh Camp</h3>
                            <h1 className="   text-white text-6xl font-extrabold">Peaceful Weekend Night Trip</h1>
                            <button className="btn btn-outline btn-warning">Travel Guide</button>


                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;