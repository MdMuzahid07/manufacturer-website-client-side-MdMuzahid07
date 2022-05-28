import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0o8fEyiRobmIfUp7b7wXoZxyHDSl8m2BGzmMqnEtpwFOWNRNK6c2t4Z2CyJbKaf8P3Qj9D2aYfmA7Repd8HUdY00pgoVL8DW');

const Payment = () => {
    const { Id } = useParams();

    const [order, setOrder] = useState();
    useEffect(() => {
        const url = `https://fast-reef-28359.herokuapp.com/order/${Id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [Id])

    const price = order?.unitPrice;
    const quantity = order?.quantity;

    const totalPrice = parseInt(price) * parseInt(quantity);



    return (
        <div className='lg:max-w-4xl mx-auto my-20 px-2'>
            <h1 className='text-2xl font-bold my-4'><span className='bg-black text-warning text-3xl px-2'>Pay</span> Now</h1>
            <div class="card w-50 max-w-md bg-black mb-2">
                <div class="card-body">
                    <h2 class="card-title text-white">Hello, {order?.name}</h2>
                    <h2 class="card-title text-warning">Please Pay<div class="divider divider-horizontal">For</div> <span className='text-white'>{order?.productName}</span></h2>
                    <hr />
                    <p className='text-warning font-bold'>Price Per Unit <span className='text-white text-xl'>${order?.unitPrice}</span></p>
                    <p className='text-warning font-bold'>Product Quantity <span className='text-white text-xl'>{order?.quantity}</span></p>
                    <p className='text-warning font-bold'>Total Price<span className='text-white text-xl'> ${totalPrice}</span> USD</p>
                </div>
            </div>
            <div class="card  w-50 max-w-md  bg-warning text-white">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        {
                            order && <CheckoutForm order={order} />
                        }
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;