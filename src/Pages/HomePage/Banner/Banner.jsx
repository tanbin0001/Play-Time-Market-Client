import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const Banner = () => {
    return (
        <div>


            <div className="carousel    h-screen w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://files.catbox.moe/ad4mpb.jpg" className="w-full  " />
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    <div className="  absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center space-y-5 mb-10 "
                            data-aos="zoom-in-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        >

                            <h3 className="font-hennypenny text-white   font-bold text-3xl">Fuel Your Adventured</h3>
                            <h1 className="   text-white text-4xl  dragonFont">Adventure Awaits: Find Your Favorite Action Toys Today</h1>


                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle   border-b-2    shadow-red-500 shadow-2xl border-red-500  ">❮</a>
                        <a href="#slide2" className="btn btn-circle   border-b-2    shadow-red-500 shadow-2xl border-red-500  ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://files.catbox.moe/oe90g5.jpg" className="w-full  " />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="  absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center space-y-5 mb-10">

                            <h3 className="font-hennypenny text-white   font-bold text-3xl">Unleash the Power of Heroes</h3>
                            <h1 className="   text-white text-4xl dragonFont ">Explore Avengers, Transformers, and Star Wars Toys</h1>



                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle border-b-2    shadow-red-500 shadow-2xl border-red-500">❮</a>
                        <a href="#slide3" className="btn btn-circle border-b-2    shadow-red-500 shadow-2xl border-red-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://files.catbox.moe/24jv5k.jpg" className="w-full" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="  absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center space-y-5 mb-10">
                            <h3 className="font-hennypenny text-white   font-bold text-3xl">Gear Up with Iconic Characters</h3>
                            <h1 className="   text-white text-5xl dragonFont">Explore our Thrilling Toy Selection</h1>


                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle border-b-2    shadow-red-500 shadow-2xl border-red-500">❮</a>
                        <a href="#slide1" className="btn btn-circle border-b-2    shadow-red-500 shadow-2xl border-red-500">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;