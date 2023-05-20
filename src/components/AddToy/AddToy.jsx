import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../shared/Footer/Footer';


const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Toy')
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

        if (!name || !price || !seller_name || !seller_email || !rating || !available_quantity || !image || !toy_description || !subCategory) {
            toast.error('Please provide all the info');
            return;
        }

        const newToy = {
            name, price, toy_description, image, seller_email, seller_name, rating, available_quantity, subCategory
        }


        //send data to the server
        fetch('https://play-time-market-server.vercel.app/newToy', {
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
            title: 'Your toy has been added',
            showConfirmButton: false,
            timer: 1500
        })

    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 pb-10 ">
                    <div className="hero-content flex-col  ">
                        <div className="text-center ">
                            <h1 className='font-bold   text-3xl mb-14 dragonFont  border-b-2 w-[300px] mx-auto text-center  animate-pulse  shadow-red-500 shadow-2xl border-red-500   '>Add toys</h1>

                        </div>
                        <div className="card  w-full rounded-none  bg-base-100 border    shadow-blue-500 shadow-lg border-blue-500  font-marcellus">
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
                                    <button className="btn border    shadow-blue-500 shadow-sm border-blue-500  ">Add Toy</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default AddToy;