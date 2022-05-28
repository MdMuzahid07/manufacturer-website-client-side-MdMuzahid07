import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("https://fast-reef-28359.herokuapp.com/product")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [products]);

    const navigate = useNavigate();

    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`);
    }



    return (
        <div className='bg-slate-100 py-10'>
            <div className='max-w-5xl mx-auto my-20'>
            <h1 className='text-3xl font-bold text-warning mb-10 ml-5'><span className='text-5xl font-bold bg-black px-2'>Latest</span> Products</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-5">
                {
                    products?.map(({ name, image, availableQuantity, minimumOrder, description, unitPrice , _id }) =>
                        <div className="p-2 bg-black rounded-xl">
                            <div className="p-2 text-white">
                                <img className='rounded-xl' src={image} alt="" />
                                <div className='px-2 my-2'>
                                    <h1 className='text-md font-bold'>{name}</h1>
                                    <h2 className='text-md'>Available: {availableQuantity}</h2>
                                    <h2 className='text-md'>Minimum order: {minimumOrder}</h2>
                                    <h2 className='text-md'>Price per unit: ${unitPrice}</h2>
                                </div>
                            </div>
                            <button onClick={() => navigateToPurchase(_id)} className='btn btn-glass text-warning'>Book Now</button>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    );
};

export default AllProducts;