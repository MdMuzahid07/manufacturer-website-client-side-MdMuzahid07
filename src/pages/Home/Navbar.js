import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarSearchBar from './NavbarSearchBar';

const Navbar = ({ children }) => {
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
                                <NavLink className="font-bold hover:text-black m-3" to='/'>Home</NavLink>
                                <NavLink className="font-bold hover:text-black m-3" to='/'>Home</NavLink>
                                <NavLink className="font-bold hover:text-black m-3" to='/'>Home</NavLink>
                                <NavLink className="font-bold hover:text-black m-3" to='/'>Home</NavLink>
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
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between text-black">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a className='text-black'>Settings</a></li>
                                <li><a className='text-black'>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {/* Content */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;