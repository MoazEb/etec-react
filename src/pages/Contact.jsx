import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mt-10 lg:mt-20 ml-2'
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl lg:text-6xl font-semibold leading-tight'
            >
                Contact us
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-xl mt-4 max-w-2x text-gray-600 lg:max-w-4xl leading-relaxed'
            >
                We're here to assist you with any inquiries, feedback, or assistance you may need. Whether you have questions about products, orders, or general inquiries, our dedicated customer support team is ready to help.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='my-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4'
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-gray-100 p-4 md:p-8 rounded-2xl'
                >
                    <p className='text-2xl font-light'>Phone number <br /> + 123 456 789</p>
                    <p className='text-gray-600 font-light text-lg mt-10 lg:mt-20'>Call our team directly. We will provide information, answer technical questions, or schedule an appointment.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-gray-100 p-4 md:p-8 rounded-2xl col-span-2 row-span-2'
                >
                    <p className='text-2xl font-light'>Drop us a message</p>
                    <p className='text-gray-600 font-light text-lg my-4 max-w-2xl'>We're always here to assist you at Etec. Our customer support team is dedicated to addressing your inquiries.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 flex-col lg:flex-row'>
                            <input type="text" placeholder='Name' className='px-6 p-4 w-full rounded-full border border-gray-200' />
                            <input type="text" placeholder='Email' className='px-6 p-4 w-full rounded-full border border-gray-200' />
                        </div>
                        <textarea placeholder='Message' className='px-6 p-4 w-full rounded-2xl border border-gray-200 h-72 resize-none' />
                        <button className='bg-black text-white px-6 p-4 rounded-full'>Send message</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-gray-100 p-4 md:p-8 rounded-2xl'
                >
                    <p className='text-2xl font-light'>E-mail <br /> example@gmail.com</p>
                    <p className='text-gray-600 font-light text-lg mt-10 lg:mt-20'>Use email to provide information about the project. We will respond as soon as possible, providing comprehensive support.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Contact