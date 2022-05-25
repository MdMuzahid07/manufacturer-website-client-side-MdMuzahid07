import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebse.init';

const Purchase = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { id } = useParams();
    const [user] = useAuthState(auth);

    const [product, setProduct] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [product]);

    const minimumOrder = product?.minimumOrder;


    const onSubmit = data => {

        if (data?.quantity < (product.minimumOrder)) {
            return toast.warning("Please add minimum 700 units")
        }

        const sendOrder = {data: data}

        fetch("http://localhost:5000/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendOrder)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            toast.success("Order Successful")
        })


    };


    return (
        <div className='lg:max-w-5xl mx-auto'>
            <div class="hero min-h-screen">
                <div class="grid md:grid-cols-2">
                    <div>
                        <h1 class="text-xl font-bold">{product?.name}</h1>
                        <img className='md:w-48' src={product?.image} alt="product_image" />
                        <hr />
                        <p class="font-bold">Available quantity: {product?.availableQuantity}</p>
                        <p class="py-2 font-bold">Minium order: {product?.minimumOrder}</p>
                        <p class="font-bold">Per unit: ${product?.unitPrice}</p>
                        <p class="pt-2">{product?.description}</p>
                    </div>
                    <div>
                        <form className='bg-slate-100 p-5 rounded-xl' onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} type="text" value={user.displayName} placeholder='Name' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("email", { required: true })} type="email" value={user.email} placeholder='Email' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("phone", { required: true })} type="number" placeholder='Phone' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("quantity", { required: true })} type="number" placeholder={minimumOrder} className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("address", { required: true })} type="text" placeholder='Address' className='input input-bordered input-warning w-full max-w-xl mb-3' />
                            <br />
                            <input className='btn btn-warning text-white font-bold mb-2' type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;