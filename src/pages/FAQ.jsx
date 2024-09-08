import React from 'react'
import { motion } from 'framer-motion'
import Subscribe from '../components/Subscribe'
import FAQBtn from '../components/FAQBtn'
import { useSelector } from 'react-redux'
const FAQ = () => {
    const faq = useSelector((state) => state.FAQ.faq)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mt-10 lg:mt-20 ml-2'
        >
            <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl md:mt-20 mt-10 leading-normal'>FAQ</h1>
            <p className='text-base md:text-lg text-gray-500 lg:text-xl leading-normal my-5'>
                Shop our curated selection of premium products, designed to elevate your everyday experiences
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2  my-10 gap-4'>
                <div className='lg:pr-10 '>
                    <h2 className='text-4xl my-4 font-semibold lg:mb-8'>Need Help?</h2>
                    <p className='text-gray-800 my-4 text-lg'>If you have an issue or question that requires immediate assistance, you can click the button below to contact with a Customer Service representative.</p>
                    <p className='text-gray-800 my-4 text-lg'>Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.</p>
                </div>
                <div>
                    <h2 className='text-4xl my-4 font-semibold'>Shopping Information</h2>
                    {faq.map((item) => (
                        <FAQBtn key={item.id} title={item.title} description={item.description} />
                    ))}
                </div>

            </div>

            <Subscribe />
        </motion.div>
    )
}

export default FAQ