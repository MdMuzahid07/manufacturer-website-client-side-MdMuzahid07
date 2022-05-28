import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("https://fast-reef-28359.herokuapp.com/product")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [products]);

    // to delete a order from database
    const handleDelete = (id) => {
        const proceed = window.confirm("Delete Product?");
        if (proceed) {
            fetch(`https://fast-reef-28359.herokuapp.com/product/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(result => {
                    const newRemaining = products.filter(order => order._id !== id);
                    setProducts(newRemaining);
                    toast.warning("Product Deleted")
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='lg:max-w-4xl mx-auto px-2 my-20'>
            <h2 className='text-2xl font-bold text-warning my-7'><span className='text-3xl bg-black px-2'>Manage</span> Products</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Quantity</th>
                            <th>Product Id</th>
                            <th>Manage Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) =>
                                <tr>
                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{product?.availableQuantity}</div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{product?._id}</div>

                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(product?._id)} class="btn btn-ghost bg-black text-warning btn-xs">Delete Product</button>

                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Quantity</th>
                            <th>Product Id</th>
                            <th>Manage Orders</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageProducts;