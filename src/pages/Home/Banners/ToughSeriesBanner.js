import React from 'react';

const ToughSeriesBanner = () => {
    return (
        <div>
            <div className='bg-black'>
                <div class="hero md:max-w-6xl mx-auto">
                    <div class="hero-content flex-col lg:flex-row">
                        <img className='lg:w-3/4' src="https://i.ibb.co/hD8stz0/tough-Banner-Image.jpg" alt="" class=" md:w-3/4" />
                        <div  className='lg:w-1/4 bg-white p-5 -mt-20 lg:-ml-20  lg:py-24'>
                            <h1 className='lg:text-5xl font-bold'><span className='text-red-500'>TOUGH</span> SERIES</h1>
                            <h1 className='text-1xl mt-7'>NEVER BACK DOWN™</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToughSeriesBanner;