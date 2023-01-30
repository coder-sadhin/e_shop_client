import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import img from '../../../../../assets/login/E-Shop.webp'
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.error('LogOut Successfully') })

            .catch(err => console.log(err))
    }

    const menuItmes = <>
        <li className='font-bold text-[18px] lg:hidden '><Link to='/'>Home</Link></li>
        {user?.uid ?
            <>
                <li className='font-bold text-[18px] '><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-bold text-[18px] '><button onClick={handleLogOut}>SignOut</button></li>
            </>
            : <li className='font-bold text-[18px] '><Link to='/login'>Login</Link></li>
        }
        {user?.displayName ?
            <p className='py-4 font-semibold text-[18px] text-purple-600 mr-2'>Welcome {user?.displayName} </p>
            :
            <></>
        }
        {user?.photoURL ?
            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                src={user?.photoURL} alt=""></img>
            :
            <></>
        }

    </>


    return (
        <div className='navbar z-20'>
            <div
                style={{
                    backgroundColor: '#16a085',
                }}
                className="navbar text-white flex justify-between p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu bg-black menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {menuItmes}
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost normal-case"><img className='w-12 h-12' src={img} alt="" /> </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItmes}
                    </ul>
                </div>
                <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;