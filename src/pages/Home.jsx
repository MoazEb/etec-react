import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Btn from '../components/Btn'
import { motion } from 'framer-motion'
import News from '../components/News'
const Home = () => {
    const productList = useSelector((state) => state.productList.products)
    return (
        <>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='ml-4 text-4xl md:text-5xl lg:text-6xl md:mt-20 mt-10 leading-tight'
            >
                Elevate your lifestyle<br className='hidden md:block' /> with premium essentials.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col lg:flex-row justify-between items-center'
            >
                <p className='ml-4 my-4 md:my-8 text-lg md:text-base lg:text-lg'>Elevate your daily routine with our meticulously<br className='hidden lg:block' /> selected premium goods and curated essentials.</p>
                <div className='self-start md:ml-2 md:self-center ml-3 '><Btn /></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col lg:flex-row justify-between items-center gap-4'
            >
                {productList.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='text-center my-10 lg:text-left lg:ml-1'
            >
                <h1 className='text-3xl md:text-5xl lg:text-5xl md:mt-20 mt-5 leading-tight'>Browse by categories</h1>
                <p className='my-4 md:my-4 text-lg md:text-base lg:text-lg'>Explore our diverse range of categories tailored to<br className='hidden lg:block' /> meet your specific needs and interests.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4'
            >
                <div className='rounded-xl flex flex-col bg-gradient-to-b bg-gray-100 md:col-span-2 md:row-span-2 py-2 font-light'>
                    <div className='p-6 gap-4 flex flex-col'>
                        <h1 className='text-2xl '>All products</h1>
                        <p className='text-lg md:text-base lg:text-lg'>Discover endless possibilities with our All Products category.<br />
                            Shop now for everything you need in one convenient place.</p>
                        <div className='-ml-1'>
                            <Btn />
                        </div>
                    </div>
                    <img className='mx-2 ' src="https://framerusercontent.com/images/yD047Kl5EbewEFW5RyrRcTsrA.png?scale-down-to=1024" alt="All products"></img>
                </div>
                <div className='rounded-xl flex flex-wrap lg:flex-nowrap bg-gradient-to-b bg-gray-100 md:col-span-2 py-2 font-light'>
                    <div className='p-6 gap-4 flex flex-col'>
                        <h1 className='text-2xl'>Displays</h1>
                        <p className='text-lg md:text-base lg:text-lg'>Experience crystal-clear clarity and vibrant visuals with our Displays.</p>
                        <div className='-ml-1'>
                            <Btn text="Laptops" />
                        </div>
                    </div>
                    <img className='max-w-[300px] mix-blend-multiply self-center align-middle' src="https://framerusercontent.com/images/epvE5hFHNlkcGbnrpB2IayKiHUE.png" alt="Displays"></img>
                </div>
                <div className='relative rounded-xl flex flex-col bg-gradient-to-b bg-gray-100 py-2'>
                    <img className='-rotate-[7deg] mix-blend-multiply' src="https://framerusercontent.com/images/Q0vJfOd2ycuoBVOqcEeLEBIEHY.png?scale-down-to=512" alt="Headphones" />
                    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                        <Btn text="Headphones" />
                    </div>
                </div>
                <div className='relative rounded-xl flex flex-col bg-gray-100 py-2 font-light'>
                    <img className=' mix-blend-multiply' src="https://framerusercontent.com/images/R3ixekN751tQ9urOSnopl9GZo8.png?scale-down-to=512" alt="Headphones" />
                    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                        <Btn text="Phones" />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col md:flex-row justify-between items-start md:items-center my-8'
            >
                <h1 className='text-2xl md:text-4xl lg:text-4xl mt-10 md:mt-0 leading-tight mb-4 md:mb-0'>Our articles and news</h1>
                <Btn text="Check all" />
            </motion.div>
            <News />
        </>
    )
}
export default Home