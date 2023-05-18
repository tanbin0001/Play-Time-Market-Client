import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProviders';

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const [toy, setToy] = useState([])
    console.log(toy);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/updateToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [id]);

    const { name, rating, subCategory, image } = toy;
    console.log(id);

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col  ">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Update Toy</h1>

                        </div>
                        <div className="card  w-full rounded-none  shadow-2xl bg-base-100">
                            <form className="card-body">
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
                                    <button className="btn btn-primary">Update Toy</button>
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

