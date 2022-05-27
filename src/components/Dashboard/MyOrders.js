import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrders = () => {

    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(response => response.json())
            .then(data => setOrders(data));
    }, [orders]);



    // to cancel order
    const handleDelete = (id) => {
        const proceed = window.confirm("Delete Order?")
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        const newRemaining = orders.filter(order => order._id !== id);
                        setOrders(newRemaining);
                        toast.success('Order Cancelled')
                    }
                })
                .catch(error => console.log(error))
        }
    }


    return (
        <div className='lg:px-10 mb-10'>
            <h1 className='text-5xl text-purple-500 font-bold mb-2'>My Orders</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Product Id</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders?.map((order) =>
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
                                        {
                                            (!order?.paid) &&
                                            <button onClick={() => handleDelete(order?._id)} class="btn btn-ghost bg-black text-warning btn-xs">Cancel</button>
                                        }
                                        <br />
                                        {
                                            (!order?.paid) &&
                                            <Link to={`/dashboard/payment/${order._id}`} class="btn btn-ghost bg-black text-warning btn-xs">Pay Now</Link>
                                        }

                                        {
                                            (order?.paid) && <div>
                                                <p className='btn btn-xs btn-success text-white'>Paid</p>
                                                <br />
                                                <p className='text-green-500'><span className='text-black'>Payment transaction id  :</span><br />{order?.transactionId}</p>
                                            </div>
                                        }
                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;