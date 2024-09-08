import React from 'react'

const Btn = ({ text }) => {
    return (
        <button className='bg-white text-black border font-light border-gray-300 hover:border-gray-400 hover:bg-gray-200 transition-all duration-300 px-8 py-4 lg:px-12 lg:py-5 h-fit rounded-full self-start'>{text ? text : 'Browse all products'}</button>
    )
}

export default Btn