import React from 'react'


const Adiv = ({ icon, title, desc }) => {
    return (
        <div className=' mx-8 xl:mx-16 flex items-center gap-2 p-4 px-6 rounded-lg my-4 w-fit'>
            {/* <icon className='text-4xl text-gray-500 mx-3' /> */}
            {icon}
            <div>
                <h1 className='text-xl font-light text-gray-800 my-2'>{title}</h1>
                <p className='text-gray-500 font-light'>{desc}</p>
            </div>
        </div>
    )
}

export default Adiv