
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


// import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../AuthProvider/AuthProviders';





const Login = () => {
    const [error, setError] = useState('');

    const { login, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (!email) {
            toast.error('Please provide an Email');
            return;
        } else if (!password) {
            toast.error('Please provide a Password');
            return;
        }
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Invalid password!');
                }
                else if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid Email');
                }
                else if (error.code === 'auth/user-not-found') {
                    toast.error('User not found');
                }
                else {
                    setError(error.message);
                    toast.warning(`${error}`);
                }
            })
    }
    //google login system
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message);
                toast.warning(`${error}`);
                console.log(error);
            })
    }

    return (

        <div className='flex items-center '>

            <div className="hero min-h-screen bg-base-200 box-show   ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold dragonFont">Login now !</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100  border border-blue-300 shadow-blue-400">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' state={{ from }} className="label-text-alt link link-hover text-customBlue">New to Play Time Market? create a new account!</Link>
                                </label>
                            </div>
                            <div className="form-control  ">
                                <button


                                    className="btn  bg-customBlue border-0  hover:bg-[#40cef1] hover:border-white "  >
                                    Login
                                </button>
                            </div>
                            <h3 className=' mt-3 text-center font-bold underline text-1xl text-customBlue'>Or Login With</h3>
                        </form>
                        <div className=" text-center  mb-5  ">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning rounded-none">   Google</button>


                        </div>
                    </div>
                </div >
                <ToastContainer></ToastContainer>
            </div>
        </div>

    );
};

export default Login;