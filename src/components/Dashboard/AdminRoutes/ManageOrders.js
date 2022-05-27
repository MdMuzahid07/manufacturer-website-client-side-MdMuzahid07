import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrders = () => {
    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(response => response.json())
            .then(data => setOrders(data));
    }, [orders]);



    // to delete a order from database
    const handleDelete = (id) => {
        const proceed = window.confirm("Delete Order?")
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(result => {
                    const newRemaining = orders.filter(order => order._id !== id);
                    setOrders(newRemaining);
                    toast.warning('Order Deleted')
                })
                .catch(error => console.log(error))
        }
    }




    return (
        <div className='lg:max-w-4xl mx-auto px-2 my-20'>
            <h2 className='text-2xl font-bold text-warning my-7'><span className='text-3xl bg-black px-2'>Manage</span> Orders</h2>
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
                            orders?.map((order, index) =>
                                <tr>
                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src={order?.data.productImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{order?.data.quantity}</div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{order?.data.productId}</div>

                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(order?._id)} class="btn btn-ghost bg-black text-warning btn-xs">Delete Order</button>

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

export default ManageOrders;