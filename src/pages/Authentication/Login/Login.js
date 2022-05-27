import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading';
import auth from '../../../firebse.init';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    // console.log(guser)

    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (gloading || loading) {
        return <Loading />
    }

    if (gerror || error) {
        toast.error(gerror || error)
    }

    if (guser || user) {
        toast.success("Welcome to POWER TOOLS");
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }

    const onSubmit = data => {

        const email = data.email;
        const password = data.password;

        signInWithEmailAndPassword(email, password)
    };

    // console.log(watch("example"));

    return (
        <div className='signup-form max-w-xs mx-auto my-20 p-5  rounded-xl'>
            <h1 className='text-xl font-bold text-warning mb-5'><span className='bg-black px-2'>Log</span> in</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email" placeholder='Email' className='input input-bordered input-warning w-full max-w-xs mb-2' />
                <input {...register("password")} type="password" placeholder='Password' className='input input-bordered input-warning w-full max-w-xs mb-3' />
                <input className='btn btn-xs btn-warning rounded-none text-white font-bold mb-2' type="submit" value="Login" />
            </form>
            <p><small>New on POWER TOOLS?</small> <Link to="/signup"><small className='text-primary'>Please SignUp</small></Link> </p>
            <div className="divider">OR</div>

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
    )
};

export default Login;