import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const AllProducts = () => {
    const navigate = useNavigate();

    const url = "https://fast-reef-28359.herokuapp.com/product";

    const { isLoading, error, data: products, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(url).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <Loading />
    } else if (!products) {
        refetch()
    } else if (error) {
        toast.error(error.message);
    }


    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`);
    }



    return (
        <div className='bg-slate-900 py-10'>
            <div className='max-w-5xl mx-auto my-20'>
                <h1 className='text-3xl font-bold text-warning mb-10 ml-5'><span className='text-5xl font-bold bg-black px-2'>Latest</span> Products</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-5">
                    {
                        products?.map(({ name, image, availableQuantity, minimumOrder, description, unitPrice, _id }) =>
                            <div className="p-2 bg-warning rounded">
                                <div className="p-2 text-white">
                                    <img className='rounded' src={image} alt="" />
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