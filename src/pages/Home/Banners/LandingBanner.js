import React from 'react';

const LandingBanner = () => {
    return (
        <div className='md:py-20'
            style={
                {
                    "backgroundImage": "url('https://i.ibb.co/njRN7mN/Landing-Banner-Image.jpg')",
                    "backgroundPosition": "center",
                    "backgroundSize": "cover"
                }
            }>
            <img style={
                {
                    "objectFit":"cover"
                }
            } className='md:hidden' src="https://i.ibb.co/njRN7mN/Landing-Banner-Image.jpg" alt="" />
            <div className='md:max-w-6xl mx-auto' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
                <div className='bg-warning md:w-96 py-10 p-5'>
                    <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000" class=" lg:text-5xl font-bold text-white" ><span className='text-red-500 mr-2'>POWER <br /> </span>TOOLS</div>

                    <h1 data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1000" className='text-1xl mt-7 text-white'>POWER TOOLS™ BATTERY TECHNOLOGY</h1>
                    <h1 data-aos="fade-up" data-aos-delay="1900" data-aos-duration="1000" className='text-3xl text-white my-5 font-bold'>THE NEXT DIMENSION IN <span className='text-black'>POWER™</span></h1>
                </div>
            </div>
        </div>
    );
};

export default LandingBanner;