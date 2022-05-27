import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [procession, setProcession] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const orderInfo =order?.data
    const _id = order;
    // const {name, address, email, phone, productId, quantity, productName, unitPrice } = orderInfo;

    const price = parseInt(orderInfo?.quantity) * parseInt(orderInfo?.unitPrice);


    // console.log({price})


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then(response => response.json({price}))
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret);
                }
            })
    }, [ order])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return toast.error("Card info error!")
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, peymentMetod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })


        setCardError(error?.message || " ");
        setSuccess('')
        setProcession(true)
        // confirm card payment

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        Name: 'john',
                        // Email: email,
                        // Address: address,
                        // Phone: phone,
                        // ProductId: productId,
                        // Quantity: quantity,
                        // ProductName: productName,
                        // UnitPrice: unitPrice
                    },
                },
            },
        );


        if (intentError) {
            setCardError(intentError?.message)
            setProcession(false)
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess("Thanks for payment")


            //store payment info on database

            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(response => response.json())
                .then(data => {
                    setProcession(false);
                    console.log(data)
                })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#fff',
                                '::placeholder': {
                                    color: '#fff',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-black mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-black font-bold'>{cardError}</p>
            }
            {
                success && <div className='text-green-500 font-bold'>
                    <p>{success}</p>
                    <p>Transaction Id: <span className='text-white font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;