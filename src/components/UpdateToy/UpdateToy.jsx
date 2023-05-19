import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const [toy, setToy] = useState({ name: '' });

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/updateToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [id]);

    const { name, rating, subCategory, image } = toy;




    const handleUpdateToy = event => {

        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const available_quantity = form.available_quantity.value;

        const toy_description = form.description.value;


        const updatedToy = {
            price, toy_description, available_quantity
        }


        //send data to the server
        fetch(`http://localhost:5000/updateToys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        form.reset()
        Swal.fire({

            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })


    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col  ">
                        <div className="text-center ">
                            < h1 className='font-bold   text-3xl mb-14 dragonFont  border-b-2 w-[300px] mx-auto text-center  animate-pulse  shadow-red-500 shadow-2xl border-red-500   '>Update toys</h1>


                        </div>
                        <div className="card   w-full rounded-none  bg-base-100 border    shadow-blue-500 shadow-lg border-blue-500  font-marcellus">
                            <form onSubmit={handleUpdateToy} className="card-body">
                                <div className='flex justify-between space-x-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" placeholder="name" value={name} name="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Price</span>
                                        </label>
                                        <input type="text" placeholder="price" name='price' className="input input-bordered" />

                                    </div>
                                </div>
                                <div className='flex justify-between space-x-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        {
                                            <input type="text" value={user?.displayName} name="seller_name" className="input input-bordered" />
                                        }
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Seller Email</span>
                                        </label>
                                        {
                                            <input type="text" value={user?.email} name='seller_email' className="input input-bordered" />
                                        }

                                    </div>
                                </div>
                                <div className='flex justify-between space-x-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="rating" value={rating} name="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Available Quantity</span>
                                        </label>
                                        <input type="text" placeholder="quantity" name='available_quantity' className="input input-bordered" />

                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-Category</span>
                                    </label>
                                    <input type="text" value={subCategory} placeholder="sub category" name="subCategory" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="description" name="description" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" value={image} placeholder="please provide an image url" name='image' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn border    shadow-blue-500 shadow-sm border-blue-500">Update Toy</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;

