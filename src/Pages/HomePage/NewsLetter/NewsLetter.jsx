import React from 'react';

const NewsLetter = () => {
    return (
        <div className='mx-10  '>
            <div className="    border shadow-xl py-20 rounded-2xl  bg-gradient-to-r from-pink-500 to-violet-500  ">
                <div className=" lg:flex justify-around px-5">
                    <div>
                        <h2 className='font-bold text-5xl text-white font-marcellus'>Newsletters</h2>
                        <p className='text-white font-marcellus'>Subscribe our newsletters now and stay up-to-date with new collections</p>
                    </div>
                    <div className=" flex mt-5">
                        <input type="email" placeholder="Your email" className="input input-bordered    bg-white lg:w-96 h-16    rounded-full " />
                        <button className="btn border-none btn-primary bg-gradient-to-r from-violet-500 to-pink-500 -ml-36  rounded-full  mt-2  "> Browse More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NewsLetter;