import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../../firebse.init';
import Loading from '../../../components/Loading';
import { toast } from 'react-toastify';



const SingUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const location = useLocation();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    if (gloading || loading) {
        return <Loading />
    }
    if (gerror || error) {
        gerror ? toast.error(gerror) : toast.error(error);

    }

    if (guser || user) {
        return <Navigate to="/" state={{ from: location }} replace />
    }



    const onSubmit = data => {

        const name = data.name;
        const email = data.email;
        const password = data.password;

        console.log(name, email, password)


        createUserWithEmailAndPassword(email, password)
    };


    // console.log(watch("example"));

    return (
        <div className='signup-form max-w-xs mx-auto mt-20 p-5 rounded-xl'>
            <h1 className='text-xl font-bold text-warning mb-5'><span className='bg-black px-2'>Sign</span> Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")}  type="text"  placeholder='Name' className='input input-bordered input-warning w-full max-w-xs mb-2'/>
            <input {...register("email")}  type="email"  placeholder='Email' className='input input-bordered input-warning w-full max-w-xs mb-2'/>
            <input {...register("password")} type="password"  placeholder='Password'  className='input input-bordered input-warning w-full max-w-xs mb-3'/>
                <input className='btn btn-xs btn-warning rounded-none text-white font-bold mb-2' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account?</small> <Link to="/login"><small className='text-primary'>Please Login</small></Link> </p>
            <div className="divider">OR</div>

            {/* social logins */}

            <div className='flex'>
                <div className='tooltip' data-tip="Sign In With Google">
                    <img onClick={() => signInWithGoogle()} className='w-10 mr-2 signup-form p-1.5 rounded-xl' src="https://i.ibb.co/pQD3Rh7/Google-logo.png" alt="" />
                </div>
                <div className='tooltip' data-tip="Sign In With Github">
                    <img className='w-10 mr-2 signup-form p-1.5 rounded-xl' src="https://i.ibb.co/j3W18zy/Github-logo.png" alt="" />
                </div>
                <div className='tooltip' data-tip="Sign In With Facebook">
                    <img className='w-10 signup-form p-1.5 rounded-xl' src="https://i.ibb.co/G7Z77Y9/Facebook-logo.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default SingUp;
