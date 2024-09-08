import React from 'react'
import { motion } from 'framer-motion'
const NewsCart = ({ news }) => {
    const { image, desc } = news
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className='cursor-pointer flex gap-4 flex-col my-4 lg:my-2 w-full max-w-lg '>
                <div className='w-full h-80 overflow-hidden rounded-2xl'>
                    <img className='w-full h-full object-cover' src={image} alt={desc} />
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-center text-xl lg:mx-2 h-24'>
                    <p className='text-gray-800 line-clamp-3 overflow-hidden text-center '>{desc}</p>
                </div>
            </motion.div>
        </>
    )
}

export default NewsCart