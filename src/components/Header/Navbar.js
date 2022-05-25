import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavbarSearchBar from './NavbarSearchBar';
import { signOut } from "firebase/auth";
import auth from '../../firebse.init';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';



const Navbar = ({ children }) => {

    const [user, loadding, error] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth);
        toast.success("Logout Successfully")
    }

    return (
        <nav className='max-w-7xl mx-auto'>
            <NavbarSearchBar />
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">

                    {/* <!-- Navbar --> */}
                    <div class="w-full flex justify-center navbar bg-warning text-white md:px-20">
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <NavLink className="font-bold hover:text-black m-3" to='/'>Home</NavLink>
                                <NavLink className="font-bold hover:text-black m-3" to='/contact'>Contact Us</NavLink>
                                <NavLink className="font-bold hover:text-black m-3" to='/blogs'>Blogs</NavLink>
                            </ul>
                        </div>

                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        {/* dropdown profile */}
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    {
                                        user ? <img src={user.photoURL} alt="" /> : <img src="https://i.ibb.co/8NYjKNh/user-Profile.png" alt="" />
                                    }
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    {
                                        user ? <h1 className='text-black font-bold'>{user?.displayName}</h1> : <h2 className='text-black font-bold'>User Name</h2>
                                    }
                                </li>
                                <li>
                                    <a class="justify-between text-black">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <Link className="text-black" to='/dashboard'>Dashboard</Link>
                                </li>
                                <li>
                                    <Link className="text-black" to='/login'>Login/SingUp</Link>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className='text-black'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>Logout</button>
                                </li>
                            </ul>
                        </div>
                        <label for="my-drawer-2" class="btn btn-square btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <NavLink className="font-bold hover:text-warning m-3" to='/'>Home</NavLink>
                        <NavLink className="font-bold hover:text-warning m-3" to='/contact'>Contact Us</NavLink>
                        <NavLink className="font-bold hover:text-warning m-3" to='/login'>Login/SingUp</NavLink>
                        <NavLink className="font-bold hover:text-warning m-3" to='/'>Home</NavLink>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;