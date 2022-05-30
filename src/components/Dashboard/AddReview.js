import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const onSubmit = event => {

        event.preventDefault();

        const rating = event.target.rating.value;
        const review = event.target.review.value;

        const ratings = {
            rating: rating,
            review: review
        }

        console.log(rating, review)


        fetch("https://fast-reef-28359.herokuapp.com/review", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratings)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    toast.success("Thanks for review");
                }
            })

    };



    return (
        <div className='lg:max-w-4xl mx-auto my-10'>
            <h1 className='text-2xl font-bold  my-5'><span className='text-3xl text-warning bg-black px-2'>Give</span> a Review</h1>
            <form onSubmit={onSubmit} class="card-body w-96">
                <input type="number" name="rating" placeholder="Review us, 5/?" class="input input-bordered" />

                <textarea type="text" name="review" placeholder="Write about you want!" class="input input-bordered h-96	" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddReview;