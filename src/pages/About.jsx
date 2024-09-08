import React from 'react'
import { motion } from 'framer-motion'
import Adiv from '../components/Adiv'
import { FaShippingFast, FaCreditCard, FaUndo } from 'react-icons/fa'
import AboutCard from '../components/AboutCard'
import AboutGrid from '../components/AboutGrid'
import Subscribe from '../components/Subscribe'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='md:mt-20 mt-10'
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl lg:text-6xl leading-tight lg:leading-snug font-medium'
            >
                Accessible excellence:<br className='lg:block' /> Perfect tech for everyone!
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-base lg:text-lg text-gray-600 mt-4 max-w-5xl pr-5'
            >
                With over two decades of expertise, we've meticulously crafted collections that epitomize enduring quality and technological innovation, catering to the diverse needs of our clients.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mt-10'
            >
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='rounded-3xl max-h-[500px] xl:max-h-[650px] w-full object-cover'
                    src="https://framerusercontent.com/images/kd4S5H00asijIiOte7mbOgIxBGA.jpg?scale-down-to=2048"
                    alt=""
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col md:flex-row my-8 justify-center items-center w-full'
                >
                    <Adiv icon={<FaShippingFast className='text-4xl text-gray-900 mx-3' />} title="Free Shipping" desc="$24+ orders ship free" />
                    <Adiv icon={<FaCreditCard className='text-4xl text-gray-900 mx-3' />} title="Free Shipping" desc="$24+ orders ship free" />
                    <Adiv icon={<FaUndo className='text-4xl text-gray-900 mx-3' />} title="Free Shipping" desc="$24+ orders ship free" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-4'
                >
                    <AboutCard img="https://framerusercontent.com/images/MiV5wfTsEZQAcSVaX1laZOZkQc.jpg?scale-down-to=512"
                        title="Exclusive Range"
                        desc="Immerse yourself in our meticulously curated selection, backed by over 20 years of industry experience." />
                    <AboutCard img="https://framerusercontent.com/images/7IKyhgRDZPO1UJciT7DCqhB6lo.jpg?scale-down-to=512"
                        title="Enduring Innovation"
                        desc="Our products transcend fleeting trends, embodying timeless innovation that ensures they remain relevant and cutting-edge for years." />
                    <AboutCard img="https://framerusercontent.com/images/4WDC0QNCxFeWMJczI7Vj0MpK6M.jpg?scale-down-to=512"
                        title="Ethical Sourcing"
                        desc="Shop with confidence knowing that our products are sourced from reputable factories worldwide, adhering to stringent compliance standards" />
                </motion.div>

                <AboutGrid />

                <Subscribe />
            </motion.div>
        </motion.div>
    )
}

export default About