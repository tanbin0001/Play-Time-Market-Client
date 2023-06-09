import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
const SingleToyDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState({});
    useTitle(' Toy Details')


    useEffect(() => {
        fetch(`https://play-time-market-server.vercel.app/addNewToys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, []);
    const { name, image, price, rating, seller_name, seller_email, subCategory, toy_description, available_quantity } = toy;


    return (
        <div className='mt-10'>
            <h1 className='my-5 text-center font-bold text-3xl dragonFont border-b-2    shadow-red-500 shadow-2xl border-red-500  w-52 mx-auto animate-pulse '> {name}</h1>
            <div className=" mb-20 card lg:card-side bg-base-100 rounded-none shadow-lg border border-blue-300 shadow-blue-400">
                <figure><img src={image} className='w-80  ' alt="Album" /></figure>
                <div className="card-body  ">
                    <h2 className="card-title">Toy Name:  {name}</h2>
                    <p><span className="font-bold">Price:</span> ${price}</p>

                    <p> <span className="font-bold">Seller Name:</span> {seller_name}</p>
                    <p> <span className="font-bold">Seller Email:</span> {seller_email}</p>
                    <p><span className="font-bold">Description: </span>  {toy_description}</p>
                    <h2 className='font-bold '> Ratings:
                        <Rating
                            placeholderRating={rating}
                            readonly
                            className='px-3'
                            emptySymbol={<FaRegStar className='text-red-500'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-red-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        {rating} </h2>
                    <p><span className="font-bold">Available Quantity:</span>  {available_quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn border border-blue-300 shadow-md  shadow-blue-300">Buy Now</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SingleToyDetails;