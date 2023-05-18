



import { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProviders";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar text-white bg-black font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52   ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        {user &&
                            <>
                                <li><Link to='/myToys'>My Toys</Link></li>
                                <li><Link to='/addToy'>Add a Toy</Link></li></>
                        }
                        <li><Link to='/blogs'> Blogs</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="w-14 " src="https://files.catbox.moe/yrn597.png " alt="" />
                    <h1 className="  font-bold  ">Play Time Market</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-white text-black' : 'bg-[#0c99bc]'}>Home</NavLink></li>
                    <li><NavLink to='/allToys' className={({ isActive }) => isActive ? 'bg-white text-black' : 'bg-[#0c99bc]'}>All Toys</NavLink></li>
                    {
                        user &&
                        <>
                            <li><NavLink to='/myToys' className={({ isActive }) => isActive ? 'bg-white text-black' : 'bg-[#0c99bc]'}>My Toys</NavLink></li>
                            <li><NavLink to='/addToys' className={({ isActive }) => isActive ? 'bg-white text-black' : 'bg-[#0c99bc]'}>Add Toys</NavLink></li></>
                    }
                    <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'bg-white text-black' : 'bg-[#0c99bc]'}>Blogs</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ?
                        <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom " data-tip={user?.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <button onClick={handleLogOut} className="btn btn-xs rounded-none bg-red-500 border-0  hover:bg-red-400  hover:border-white ">Sign Out</button>
                        </> : <Link to='/login'> <button className="btn  bg-red-500 border-0  hover:bg-red-400  hover:border-white  ">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;  