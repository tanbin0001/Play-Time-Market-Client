
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';

import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';


const ToyDetails = () => {
    useTitle(' Toy Details')
    const [toysData, setToysData] = useState([]);
    const [singleToyData, setSingleToyData] = useState({});
    const { name, price, rating, image, toy_description, seller_name, seller_email, available_quantity } = singleToyData;
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://play-time-market-server.vercel.app/allToys');
            const data = await response.json();
            setToysData(data);
            console.log(data);

            const findToy = () => {
                for (const category of data) {
                    for (const subCategory of category.subCategories) {
                        const foundToy = subCategory.toys.find(toy => toy.id == id);
                        if (foundToy) {
                            setSingleToyData(foundToy);
                            break;
                        }
                    }
                }
            };

            findToy();
        };

        fetchData();
    }, [id]);

    return (
        <div className='mt-10 mx-10'>
            <div className="card lg:card-side bg-base-100   rounded-none border border-blue-300 shadow-lg  shadow-blue-300">
                <figure><img src={image} className='w-80' alt="Album" /></figure>

                <div className="card-body  ">
                    <h2 className="card-title">Toy Name:  {name}</h2>
                    <h2>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar className='text-red-500'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-red-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        {rating} </h2>


                    <p>Seller Name: {seller_name}</p>
                    <p>Seller Email: {seller_email}</p>
                    <p><span className="font-bold">Description: </span>  {toy_description}</p>
                    <p><span className="font-bold">Available Quantity:</span>  {available_quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn border border-blue-300 shadow-md  shadow-blue-300">Buy Now</button>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default ToyDetails;


