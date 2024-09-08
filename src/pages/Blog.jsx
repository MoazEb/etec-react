import React from 'react'
import { motion } from 'framer-motion'
import News from '../components/News'
import { useSelector } from 'react-redux'
import Subscribe from '../components/Subscribe'
const Blog = () => {
    const newsList = useSelector((state) => state.newsList.news)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mt-10 lg:mt-20 ml-2'
        >
            <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl md:mt-20 mt-10 leading-normal'>Blog</h1>
            <p className='text-base md:text-lg text-gray-500 lg:text-xl leading-normal my-5'>Stay informed with our bite-sized articles.</p>
            <News newsList={newsList} />
            <Subscribe />
        </motion.div>
    )
}

export default Blog