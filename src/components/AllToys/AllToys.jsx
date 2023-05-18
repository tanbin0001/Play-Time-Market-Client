import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../shared/Spinner/Spinner';

const AllToys = () => {
    const [addedToys, setAddedToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        fetch(`http://localhost:5000/addNewToys?limit=20&search=${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                setAddedToys(data);
            })
    }, [searchQuery]);
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    if (addedToys.length === 0) {
        return (
            <Spinner></Spinner>
        );
    }
    return (
        <div className=' mt-10'>
            <div className='flex justify-center'>
                <div className='text-center '>
                    <h1>All Toys Page</h1>
                    <div className="form-control my-5">
                        <input type="text"

                            placeholder="Search by Toy Name"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="input input-bordered w-52" />
                    </div>
                </div>
            </div>
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
                                    <Link to={`/allToys/toysDetails/${toy._id}`}>
                                        <button className="btn ">View Details</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;