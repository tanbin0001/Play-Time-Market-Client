/* 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../shared/Spinner/Spinner';
import useTitle from '../../hooks/useTitle';
import Footer from '../../shared/Footer/Footer';

const AllToys = () => {
    const [addedToys, setAddedToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    useTitle('All Toys');

    useEffect(() => {
        fetch(`https://play-time-market-server.vercel.app/addNewToys?limit=20&search=${searchQuery}&sort=${sortOption}`)
            .then(res => res.json())
            .then(data => {
                setAddedToys(data);
            });
    }, [searchQuery, sortOption]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSort = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className=' mt-10 font-marcellus'>
            <div className='flex justify-center'>
                <div className='text-center '>
                    <h1 className='font-bold text-3xl mb-14 dragonFont  border-b-2    shadow-red-500 shadow-2xl border-red-500  animate-pulse'>
                        All Toys Page
                    </h1>
                    <div className="form-control my-5">
                        <input
                            type="text"
                            placeholder="Search by Toy Name"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="input input-bordered w-52 border border-blue-300 shadow-blue-300 shadow-md"
                        />
                    </div>

                </div>

            </div>
            <div className="form-control my-5    ">
                <label className="label flex justify-end">
                    <span className='pr-2'>    Sort by Price:</span>
                    <select
                        value={sortOption}
                        onChange={handleSort}
                        className="select select-bordered w-52 border border-blue-300 shadow-blue-300 shadow-md"
                    >
                        <option value="">None</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </label>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='border border-blue-300 shadow-lg  shadow-blue-300  '>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='mt-8'>
                        {addedToys.map((toy, index) => (
                            <tr key={index}>
                                <td >
                                    <img src={toy.image} alt={toy.name} className="h-20 w-20  " />
                                </td>
                                <td >{toy.seller_name}</td>
                                <td >{toy.name}</td>
                                <td >{toy.subCategory}</td>
                                <td >${toy.price}</td>
                                <td >{toy.available_quantity}</td>


                                <td>
                                    <Link to={`/allToys/toysDetails/${toy._id}`}>
                                        <button className="btn border border-blue-300 shadow-md  shadow-blue-300 ">View Details</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToys;
 */


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../shared/Spinner/Spinner';
import useTitle from '../../hooks/useTitle';
import Footer from '../../shared/Footer/Footer';

const AllToys = () => {
    const [addedToys, setAddedToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    useTitle('All Toys');

    useEffect(() => {
        fetch(`https://play-time-market-server.vercel.app/addNewToys?limit=20&search=${searchQuery}&sort=${sortOption}`)
            .then(res => res.json())
            .then(data => {
                setAddedToys(data);
            });
    }, [searchQuery, sortOption]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSort = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className='mt-10 font-marcellus'>
            <div className='flex justify-center'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl mb-14 dragonFont border-b-2 shadow-red-500 shadow-2xl border-red-500 animate-pulse'>All Toys Page</h1>
                    <div className="form-control my-5">
                        <input
                            type="text"
                            placeholder="Search by Toy Name"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="input input-bordered w-52 border border-blue-300 shadow-blue-300 shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="form-control my-5">
                <label className="label flex justify-end">
                    <span className='pr-2'>Sort by Price:</span>
                    <select
                        value={sortOption}
                        onChange={handleSort}
                        className="select select-bordered w-52 border border-blue-300 shadow-blue-300 shadow-md"
                    >
                        <option value="">None</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </label>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='border border-blue-300 shadow-lg shadow-blue-300'>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='mt-8'>
                        {addedToys.map((toy, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={toy.image} alt={toy.name} className="h-20 w-20" />
                                </td>
                                <td>{toy.seller_name}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subCategory}</td>
                                <td>${toy.price}</td>
                                <td>{toy.available_quantity}</td>
                                <td>
                                    <Link to={`/allToys/toysDetails/${toy._id}`}>
                                        <button className="btn border border-blue-300 shadow-md shadow-blue-300">View Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default AllToys;
