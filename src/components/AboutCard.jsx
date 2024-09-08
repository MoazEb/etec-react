import React from 'react'

const AboutCard = ({ img, title, desc }) => {
    return (
        <div className='flex flex-col items-center gap-4 my-4'>
            <img src={img} alt="" className='h-full rounded-3xl object-cover' />
            <div className='flex-col gap-2  px-4'>
                <h1 className='text-2xl font-medium'>{title}</h1>
                <p className='text-gray-500'>{desc}</p>
            </div>
        </div>
    )
}

export default AboutCard