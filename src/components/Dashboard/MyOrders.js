import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(response => response.json())
            .then(data => setOrders(data));
    }, []);

    console.log(orders)

    return (
        <div className='lg:px-10 mb-10'>
            <h1 className='text-5xl text-purple-500 font-bold mb-2'>My Orders</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Quantity <br/> and <br/> Unit Price</th>
                            <th>Product Status</th>
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
                                                    <img src={order?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{order?.minimumOrder}</div>
                                        <br />
                                        <div class="text-sm opacity-50">${order?.unitPrice}</div>
                                    </td>
                                    <td>On Werehouse</td>
                                    <th>
                                        <button class="btn btn-ghost bg-black text-warning btn-xs">Cancel</button>
                                        <br />
                                        <button class="btn btn-ghost bg-black text-warning btn-xs">Payment</button>
                                    </th>
                           
                                </tr>
                            )
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;