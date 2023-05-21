import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';


const ErrorPage = () => {
   
   
    return (
        <div>

            <div className=' bg-black  h-screen flex justify-center  ' >
                < div className='lg:flex  items-center w-full  mx-10' >
                    <div>
                        <h1 className='lg:text-9xl dragonFont  glowing-text  text-red-500  '>404 error
                        </h1>

                        <h2 className='font-marcellus text-2xl'>Oops! Looks like Thanos snapped this page away. <br /> Don't worry, we're working on bringing it back from the Marvelous abyss!</h2>
                    </div>
                    <div>
                        <img src="https://files.catbox.moe/xpesb1.gif" />
                    </div>
                </ div>

            </div>
            <div className=' flex justify-center -mt-20'>
                <Link to='/'>
                    <button className='btn border border-blue-300 shadow-md  shadow-blue-300 '>Go Back</button>
                </Link>
            </div>s
        </div >
    );
};

export default ErrorPage;
