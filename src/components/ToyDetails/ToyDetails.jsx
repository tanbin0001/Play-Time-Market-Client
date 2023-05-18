
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';

import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const [toysData, setToysData] = useState([]);
    const [singleToyData, setSingleToyData] = useState({});
    const { user } = useContext(AuthContext);
    const { name, price, rating, image, toy_description, available_quantity } = singleToyData;
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/allToys');
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
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure><img src={image} className='w-80' alt="Album" /></figure>
                {/*  <div className="card-body">
                    <h2 className="card-title">Toy Name: {name}</h2>
                    {user && <p>Seller Name: {user.displayName}</p>}
                    {user && <p>Seller Email: {user.email}</p>}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div> */}
                <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    {user && <p>Seller Name: {user.displayName}</p>}
                    {user && <p>Seller Email: {user.email}</p>}
                    <p>Description: {toy_description}</p>
                    <p>Available Quantity: {available_quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ToyDetails;


