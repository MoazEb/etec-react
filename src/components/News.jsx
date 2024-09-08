import React from 'react'
import { motion } from 'framer-motion'
import NewsCart from './NewsCart'
import { useSelector } from 'react-redux'

const News = () => {
    const newsList = useSelector((state) => state.newsList.news)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col lg:flex-row justify-between items-center gap-4'
        >
            {newsList.map((news) => (
                <NewsCart key={news.id} news={news} />
            ))}
        </motion.div>
    )
}

export default News