import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const onSubmit = data => {


        fetch("https://fast-reef-28359.herokuapp.com/review", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify("-----------------")
        })
            .then(response => response.json())
            .then(result => {
                toast.success("Order Successful")
            })

    };



    return (
        <div className='lg:max-w-4xl mx-auto my-10'>
            <h1 className='text-2xl font-bold  my-5'><span className='text-3xl text-warning bg-black px-2'>Give</span> a Review</h1>
            <div class="hero py-20 bg-base-200  rounded-xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/reviews-concept-landing-page_23-2148211322.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Review </span>
                                </label>
                                <input type="text" placeholder="review" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;