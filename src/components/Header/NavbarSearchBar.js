import React from 'react';

const NavbarSearchBar = () => {
    return (
        <div className='bg-slate-900 py-5 md:px-20'>
            <div className="px-7 md:flex align-items-center justify-between">
                <div data-aos-duration="1000" className="lg:text-5xl text-white font-bold" data-aos="fade-right"><span className='text-red-500 mr-2'>POWER </span>TOOLS</div>
                <div className="flex">
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs rounded-none" />
                    <button className="btn btn-warning text-white rounded-none">Search</button>
                </div>
            </div>
        </div>
    );
};

export default NavbarSearchBar;