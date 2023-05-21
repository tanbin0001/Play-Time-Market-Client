
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
import "./AwesomeToys.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

const AwesomeToys = () => {
    return (
        <div className="my-20"

        >
            <h1 className="text-center  font-bold text-3xl dragonFont  border-b-2    lg:w-[500px] w-80  mx-auto shadow-red-500 shadow-2xl border-red-500  ">Awesome Action World</h1>

            <div className="lg:flex    justify-between lg:mx-20"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="90"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <div className="mx-10">
                    <h1 className=" mt-10 font-bold text-3xl font-marcellus   ">Explore the awesome world </h1>
                    <p className="">Welcome to our action toy website! We specialize in selling a wide range of action figures inspired by popular franchises such as Avengers, Justice League, Deadpool, and X-Men. Whether you're a collector or a fan looking to add some excitement to your collection, you'll find an extensive selection of high-quality action toys that bring your favorite characters to life. Explore our website and embark on a thrilling adventure with iconic heroes and villains. Unleash your imagination and relive epic battles with our action-packed toys. Shop now and let the excitement begin!

                    </p>

                </div>
                <div className="mt-5 "
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="4000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"

                >
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://files.catbox.moe/ngq8q4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://files.catbox.moe/1nirrw.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://files.catbox.moe/oclnza.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://files.catbox.moe/5ldzpq.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AwesomeToys;