import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebse.init';

const Purchase = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { id } = useParams();
    const [user] = useAuthState(auth);

    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://fast-reef-28359.herokuapp.com/product/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [id]);

    const minimumOrder = product?.minimumOrder;

    if (errors) {
        toast.error(errors.message)
    };

    const onSubmit = data => {

        if (data?.quantity < (product.minimumOrder)) {
            return toast.warning("Please add minimum 700 units")
        }
        if (data?.quantity > (product.availableQuantity)) {
            return toast.warning("Please Add under Available quantity")
        }

        const orderData = {
            productImg: data.productImg,
            productName: data.productName,
            productId: data.productId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            quantity: data.quantity,
            unitPrice: data.unitPrice,
            address: data.address
        };

        fetch("https://fast-reef-28359.herokuapp.com/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    toast.success("Order Successful")
                }
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
                            <input {...register("productImg", { required: true })} value={product?.image} type="text" placeholder='ProductImage' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("productName", { required: true })} value={product?.name} type="text" placeholder='ProductName' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("productId", { required: true })} value={product?._id} type="text" placeholder='ProductId' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("name", { required: true })} value={user.displayName} placeholder='Name' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("email", { required: true })} type="email" value={user?.email} placeholder='Email' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("phone", { required: true })} type="number" placeholder='Phone' className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("quantity", { required: true })} type="number" placeholder={minimumOrder} className='input input-bordered input-warning w-full max-w-xl mb-2' />
                            <input {...register("unitPrice", { required: true })} type="number" value={product?.unitPrice} className='input input-bordered input-warning w-full max-w-xl mb-2' />
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






