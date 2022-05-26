import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [productImage, setProductImg] = useState();

console.log(productImage)
    const onSubmit = (data) => {

        const productData = {
            ...data,
            image: productImage
        }

        fetch("http://localhost:5000/product", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(result => {
            toast.success("Product Added Successful")
        })
    };

    const handleImgUpload = (event) => {

        const img = event.target.files[0];

        const formData = new FormData();

        formData.set("image", img);

        axios.post("https://api.imgbb.com/1/upload?key=5c8d53f37578d93d74d44676d4d69f1a", formData).then(res => {
            if(!res.data.data.display_url) {
                return toast.error("Image upload error")
            }
            setProductImg(res.data.data.display_url)
        })
    }

    return (
        <div className='lg:max-w-4xl mx-auto my-10'>
            <div className='bg-slate-100 p-5 mx-auto  rounded-xl'>
                <h2 className='text-2xl text-warning font-bold my-5 m-2'><span className='bg-black text-3xl px-2'>Add</span> Product</h2>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type="text" placeholder='name' className='input input-bordered input-warning w-full max-w-xl m-2 lg:w-96' />
                    <input onChange={handleImgUpload} type="file" placeholder='image' className='input input-bordered input-warning w-full max-w-xl m-2 lg:w-96' />
                    <input {...register("description")} type="text" placeholder='description' className='textarea textarea-warning m-2 lg:w-96' />
                    <input {...register("minimumOrder", { required: true })} type="number" placeholder='minimumOrder' className='input input-bordered input-warning w-full max-w-xl m-2 lg:w-96' />
                    <input {...register("availableQuantity", { required: true })} type="number" placeholder='availableQuantity' className='input input-bordered input-warning w-full max-w-xl m-2 lg:w-96' />
                    <input {...register("unitPrice", { required: true })} type="number" placeholder='unitPrice' className='input input-bordered input-warning w-full max-w-xl m-2 lg:w-96' />
                    <br />
                    <input className='btn btn-warning text-white font-bold m-2' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;