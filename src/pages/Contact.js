import React from 'react';


import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import GoogleMap from '../components/Google_Map/GoogleMap';
import Social from '../components/Social/Social';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    if (errors) {
        toast.error(errors.message);
    };

    const onSubmit = data => {
        console.log(data)
    }

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <section className='px-4'>
            <div className='grid md:grid-cols-2 gap-7 bg-slate-50 rounded-xl p-4 my-20'>
                <div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider text-3xl font-bold">Contact us</div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'><span className='text-5xl text-warning font-bold'>|</span> 24/7 At your service</h2>
                        <h2 className='text-xl mt-7'>SHOP LOCATION</h2>
                        <p className='text-xs font-bold tracking-wider'>1000 Dhaka, Savar New-Market Street, Bangladesh 23221
                            Latitude: 804.355.4383 Longitude: 804.367.7901</p>
                        <h2 className='text-xl mt-4'>STORE HOURS</h2>
                        <p className='text-xs font-bold tracking-wider'>Monday-Saturday 11am-7pm ET
                            Sunday 11am-6pm ET</p>
                        <h2 className='text-xl mt-4'>SPECIALIST HOURS</h2>
                        <p className='text-xs font-bold tracking-wider'>Monday-Friday 9am-5pm ET</p>
                    </div>
                    <Social />
                </div>
                <div className="divider md:hidden" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Name" className="input w-full" />
                    <input type="text" placeholder="Email address" className="input w-full my-2" />
                    <textarea className="textarea w-full h-96 mb-2" placeholder="Message"></textarea>
                    <button type="submit" className='btn btn-warning w-full'>Submit <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg></button>
                </form>
            </div>
            <GoogleMap />
        </section >
    );
};

export default Contact;