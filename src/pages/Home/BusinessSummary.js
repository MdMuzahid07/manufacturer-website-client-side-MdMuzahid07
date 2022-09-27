import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='py-20 bg-warning'>
            <h1 className='text-2xl font-bold text-center'><span className="text-5xl ml-2 bg-black text-white px-2">Fun</span> Fact</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 text-center mt-10 lg:max-w-4xl mx-auto'>
                <div className='bg-black w-44 rounded text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 lg:w-20 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <h1 className='text-5xl'>72</h1>
                    <h1 className='text-2xl text-warning font-bold'>Countries</h1>
                </div>
                <div className='bg-black w-44 rounded text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 lg:w-20 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h1 className='text-5xl'>100+</h1>
                    <h1 className='text-2xl text-warning font-bold'>customers</h1>
                </div>
                <div className='bg-black w-44 rounded text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 lg:w-20 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-5xl'>120M+</h1>
                    <h1 className='text-2xl text-warning font-bold'>Annual revenue</h1>
                </div>
                <div className='bg-black w-44 rounded text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 lg:w-20 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <h1 className='text-5xl'>33K+</h1>
                    <h1 className='text-2xl text-warning font-bold'>Reviews</h1>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;