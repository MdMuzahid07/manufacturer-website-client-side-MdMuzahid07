import React from 'react';

const EliteSeriesBanner = () => {
    return (
        <div className='md:bg-warning'>
            <div class="hero md:max-w-6xl mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-3/4' src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" class=" md:w-3/4" />
                    <div className='lg:w-1/4 bg-white p-5 -mt-20 lg:-mr-20 '>
                        <h1 className='lg:text-5xl font-bold'><span className='text-red-500'>ELITE</span> SERIES</h1>
                       <h1 className='text-1xl mt-7'>NEW ELITE SERIES™ ACCESSORIES</h1>
                       <h1 className='md:text-4xl font-bold mt-7'>BUILT TO LAST™</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EliteSeriesBanner;