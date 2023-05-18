import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import { Link } from 'react-router-dom';
import UpdateToy from '../UpdateToy/UpdateToy';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/myToys?seller_email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [])
    return (
        <div>
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
                            <th></th> {/* Add a new table header for the buttons */}
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((myToy, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={myToy.image} alt={myToy.name} className="h-20 w-20" />
                                </td>
                                <td>{myToy.seller_name}</td>
                                <td>{myToy.name}</td>
                                <td>{myToy.subCategory}</td>
                                <td>${myToy.price}</td>
                                <td className='text-center'>{myToy.available_quantity}</td>
                                <td>
                                    <Link to={`/updateToy/${myToy._id}`}>
                                        <button className="btn" myToys={myToys} >
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn" onClick={() => handleDelete(myToy._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;