import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const image = form.image.value;
        const toy_description = form.description.value;
        const subCategory = form.subCategory.value;

        const newToy = {
            name, price, toy_description, image, seller_email, seller_name, rating, available_quantity, subCategory
        }


        //send data to the server
        fetch('http://localhost:5000/newToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
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
                            <h1 className="text-5xl font-bold">Add a new Toy</h1>

                        </div>
                        <div className="card  w-full rounded-none  shadow-2xl bg-base-100">
                            <form onSubmit={handleAddToy} className="card-body">
                                <div className='flex justify-between space-x-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
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
                                            <input type="text" defaultValue={user?.displayName} name="seller_name" className="input input-bordered" />
                                        }
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Seller Email</span>
                                        </label>
                                        {
                                            <input type="text" defaultValue={user?.email} name='seller_email' className="input input-bordered" />
                                        }

                                    </div>
                                </div>
                                <div className='flex justify-between space-x-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="rating" name="rating" className="input input-bordered" />
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
                                    <input type="text" placeholder="sub category" name="subCategory" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="description" name="description" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="please provide an image url" name='image' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Toy</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;