import React from 'react';
import '../../../ErrorPage/ErrorPage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const KidsToy = () => {
    return (
        <div className='my-20    animate-pulse '
        >

            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("  https://c4.wallpaperflare.com/wallpaper/212/657/279/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-widow-hd-wallpaper-preview.jpg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:flex items-center">
                        <div

                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="90"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        >
                            <h1 className="mb-5 text-6xl   dragonFont   text-red-200 animate-pulse"> It's never been   easier to <br /> invest in   your kid's toys</h1>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="90"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        >
                            <img src="https://i.ibb.co/k5scX2J/99f0c220-2f80-4ecc-a4b2-05a7cf5f2332-removebg-preview.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default KidsToy;