import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import Footer from '../../shared/Footer/Footer';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [myToys, setMyToys] = useState([]);
    useTitle('My Toys')
    const url = `https://play-time-market-server.vercel.app/myToys?seller_email=${user?.email}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
                setLoading(false);

            })

    }, [url, myToys]);

    if (myToys.length === 0) {
        return <p className="text-center mt-8 text-lg">No toys found.</p>;
    }

    const handleDelete = id => {
        Swal.fire({
            imageUrl: 'https://68.media.tumblr.com/b3e482dc5046a497ad526a423e26c4e3/tumblr_otmbl0ffWh1ud1moyo1_500.gif',
            imageWidth: 400,
            imageHeight: 200,
            title: 'Are you sure?',
            text: "Deleted toy won't be reverted!",
            icon: 'warning',

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://play-time-market-server.vercel.app/myToys/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className='font-bold   text-3xl mb-14 dragonFont  border-b-2 w-[300px] mx-auto text-center  animate-pulse  shadow-red-500 shadow-2xl border-red-500   '>My Toys Page</h1>
            <div className="overflow-x-auto w-full font-marcellus">
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
                                        <button className="btn border-b-2    shadow-blue-500 shadow-md border-blue-500  " myToys={myToys} >
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn border-b-2    shadow-red-500 shadow-sm border-red-500  " onClick={() => handleDelete(myToy._id)}>
                                        Delete
                                    </button>
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

export default MyToys;