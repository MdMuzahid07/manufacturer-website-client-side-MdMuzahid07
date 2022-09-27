import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const { register, handleSubmit, watch, formState: { error } } = useForm();
    if (error) {
        toast.error(error.message)
    }
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className='mx-auto my-7 px-5'>
            <h2 className='text-3xl font-bold text-warning'>My Profile</h2>
            <hr className='mt-5 mb-7' />

            <div className='md:flex gap-5'>
                <div className="card card-compact md:w-72 h-72 bg-white text-warning border drop-shadow rounded">
                    <div className="avatar">
                        <div className="w-44 mx-auto rounded -mt-7">
                            <img src={user.photoURL} alt="uer_image" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">name</h2>
                        <p>title</p>
                        <div className="card-actions bg-black rounded p-2">
                            <input type="file" className=" w-full text-xs text-white
     
                                file:rounded-full file:border-0
                                file:text-xs file:font-xs
                                file:bg-warning file:text-white
                                "/>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-full border drop-shadow rounded my-7 md:my-0">
                    <div className="card-body">

                        <h2 className='text-3xl font-bold mt-7'>Update your profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid md:grid-cols-2 gap-4'>
                                <input {...register("firstName")} type="text" placeholder='first name' className="input input-bordered input-warning w-full rounded my-4" />
                                <input {...register("LastName")} type="text" placeholder={user?.displayName} className="input input-bordered input-warning w-full rounded my-4" />
                            </div>

                            <input {...register("email")} type="email" placeholder={user?.email} className="input input-bordered input-warning w-full rounded" />

                            <input {...register("contact")} type="number" placeholder='phone' className="input input-bordered input-warning w-full rounded my-4" />

                            <input {...register("address")} type="text" placeholder='address' className="input input-bordered input-warning w-full rounded" />

                            <div className='grid md:grid-cols-2 gap-4 my-4'>
                                <input {...register("city")} type="text" placeholder='city' className="input input-bordered input-warning w-full rounded" />
                                <input {...register("state")} type="text" placeholder='state' className="input input-bordered input-warning w-full rounded" />
                            </div>

                            <div className='grid md:grid-cols-2 gap-4'>
                                <input {...register("country")} type="text" placeholder='country' className="input input-bordered input-warning w-full rounded" />
                                <input {...register("zip")} type="number" placeholder='zip code' className="input input-bordered input-warning w-full rounded" />
                            </div>

                            <input {...register("password")} type="password" placeholder='password' className="input input-bordered input-warning w-full rounded mt-4" />

                            <button className='btn btn-circle btn-outline btn-warning my-7'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyProfile;