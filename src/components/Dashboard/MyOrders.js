import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import auth from '../../firebse.init';

const MyOrders = () => {

    const [orders, setOrders] = useState();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://fast-reef-28359.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(response => {
                    if (response.status === 401 || response.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate('/')
                        toast.error("Unauthorized access blocked!");
                    }

                    return response.json()
                })
                .then(data => setOrders(data));
        }
    }, [orders, user]);



    // to cancel order
    const handleDelete = (id) => {
        const proceed = window.confirm("Delete Order?")
        if (proceed) {
            fetch(`https://fast-reef-28359.herokuapp.com/order/${id}`, {
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
        <div className='lg:px-10 my-10'>
            <h1 className='text-2xl font-bold  my-5'><span className='text-3xl text-warning bg-black px-2'>My</span> Orders</h1>

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
                        {
                            orders?.map((order) =>
                                <tr>
                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src={order?.productImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{order?.quantity}</div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{order?.productId}</div>

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