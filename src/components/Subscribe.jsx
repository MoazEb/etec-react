import React from 'react'

const Subscribe = () => {
    return (
        <div className='flex flex-col bg-gray-100 rounded-3xl p-10 font-light justify-center items-center lg:mt-20 my-10 gap-4 text-center'>
            <h1 className='text-2xl md:text-4xl lg:text-4xl mt-10 md:mt-0 leading-tight mb-4 md:mb-0'>Subscribe to our email<br className='hidden md:block' /> newsletter and get 15% off</h1>
            <p className='text-gray-500'>Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing to our newsletter.</p>
            <div className=' mt-4 flex flex-col md:flex-row gap-4'>
                <input className='bg-white px-4 py-3 md:px-8 md:py-4 rounded-full placeholder:text-gray-400 w-full md:w-auto' type="email" placeholder="Enter your email" />
                <button className='bg-black text-white px-8 py-3 md:px-12 md:py-4 rounded-full w-full md:w-auto mt-2 md:mt-0'>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe