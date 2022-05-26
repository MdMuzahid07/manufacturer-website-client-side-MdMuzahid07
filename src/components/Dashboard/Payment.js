import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const {Id} = useParams();

    return (
        <div className='lg:max-w-4xl mx-auto'>
            <h1 className='text-2xl font-bold my-2'>Pay Now</h1>
            <h1 className='text-2xl font-bold my-2'>Pay Now for : {Id}</h1>
        </div>
    );
};

export default Payment;