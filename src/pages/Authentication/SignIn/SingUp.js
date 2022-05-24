import React from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../../firebse.init';
import Loading from '../../../components/Loading';


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



    if (gloading) {
        return <Loading />
    }
    if (gerror) {
        alert(gerror);
    }

    if (guser) {
        <Navigate to="/" state={{ from: location }} replace />
    }



    const onSubmit = data => {
        console.log(data)
    };


    console.log(watch("example"));

    return (
        <div className='signup-form max-w-xs mx-auto my-20 p-5 rounded-xl'>
            <h1 className='text-xl font-bold text-warning mb-5'><span className='bg-black px-2'>Sign</span> Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered rounded-none w-full max-w-xs mb-2' placeholder="Your name" type="text" {...register("name", { required: true, maxLength: 20 })} />
                <input className='input input-bordered rounded-none w-full max-w-xs mb-2' placeholder="Your email" type="email" {...register("email", { pattern: /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                <input className='input input-bordered rounded-none w-full max-w-xs mb-2' placeholder="Set password" type="password" {...register("password", { min: 18, max: 99 })} />
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
