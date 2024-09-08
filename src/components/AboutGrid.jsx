import React from 'react'


const Card = ({ title, desc, btnText }) => {
    return (
        <div className='h-full 2-full flex flex-col justify-center items-center p-8'>
            <h1 className='text-3xl text-center  lg:text-4xl font-medium '>{title}</h1>
            <p className='text-gray-700 text-lg font-light mx-w-xl text-center my-6'>{desc}</p>
            <button className='border border-gray-600 px-6 py-4 lg:px-16 lg:py-5 font-light bg-white rounded-full text-lg'>{btnText}</button>
        </div>
    )
}

const AboutGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 lg:gap-16 my-8 lg:my-16'>
            <img src={"https://framerusercontent.com/images/vQAxeXQWUx7aC8ULw9roRgdzE.jpg?scale-down-to=1024"}
                alt="" className='h-full rounded-3xl object-cover' />
            <Card btnText="Check our store" title="Premium Tech Selection" desc="Our pursuit of excellence involves extensive exploration of top-tier factories globally, ensuring our tech lineup mirrors the standards upheld by renowned brands. We forge strong partnerships with these facilities, prioritizing factors like sustainability and ethical production practices." />
            <img src={"https://framerusercontent.com/images/vQAxeXQWUx7aC8ULw9roRgdzE.jpg?scale-down-to=1024"}
                alt="" className='h-full rounded-3xl object-cover md:order-last' />
            <Card btnText="Check our blog" title="Timeless Tech Solutions" desc="At Etec, we eschew passing trends in favor of enduring value and utility. Our commitment? To offer tech solutions that seamlessly integrate into your life, promising years of reliable performance and timeless appeal." />
        </div>
    )
}

export default AboutGrid