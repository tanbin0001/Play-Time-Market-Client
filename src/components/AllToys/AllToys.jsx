import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [addedToys, setAddedToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addNewToys')
            .then(res => res.json())
            .then(data => {
                setAddedToys(data);
            })
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {addedToys.map((toy, index) => (
                        <tr key={index}>
                            <td>
                                <img src={toy.image} alt={toy.name} className="h-20 w-20  " />
                            </td>
                            <td>{toy.seller_name}</td>
                            <td>{toy.name}</td>
                            <td>{toy.subCategory}</td>
                            <td>${toy.price}</td>
                            <td>{toy.available_quantity}</td>

                            <td>
                                <button className="btn btn-ghost btn-xs">View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;