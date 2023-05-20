

import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProviders';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from || '/';

    const navigateNow = () => {
        setTimeout(() => {
            navigate(from, { replace: true });
        }, 1);
    };

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // Regex patterns for validation
        const nameRegex = /^[a-zA-Z\s\d]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!name || !email || !password || !photoURL) {
            toast.error('Please provide all the info');
            return;
        } else if (!nameRegex.test(name)) {
            toast.error('Invalid name');
            return;
        } else if (!emailRegex.test(email)) {
            toast.error('Invalid email');
            return;
        } else if (!passwordRegex.test(password)) {
            let errorMessages = [];

            if (!/(?=.*[a-z])/.test(password)) {
                errorMessages.push('Password should contain at least one lowercase letter');
            }
            if (!/(?=.*[A-Z])/.test(password)) {
                errorMessages.push('Password should contain at least one uppercase letter');
            }
            if (!/(?=.*\d)/.test(password)) {
                errorMessages.push('Password should contain at least one number');
            }
            if (password.length < 6) {
                errorMessages.push('Password should be at least 6 characters long');
            }

            toast.error(errorMessages.join(', '));
            return;
        }

        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Registration successful');
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                setError(error.message);
                toast.warning(`${error}`);
            });
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };

        updateUserProfile(profile)
            .then(() => {
                navigateNow();
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold dragonFont">Register Now</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 border border-blue-300 shadow-blue-400 ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover text-customBlue">
                                    Already have an account? Please Login!
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn border border-blue-300 shadow-blue-400">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
