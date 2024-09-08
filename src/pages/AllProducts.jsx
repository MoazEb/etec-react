import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import CategoryBtn from '../components/CategoryBtn'
import Subscribe from '../components/Subscribe'
import { motion } from 'framer-motion'

const AllProducts = () => {
    const productList = useSelector((state) => state.productList.products)
    const [selectedCategory, setSelectedCategory] = useState('All products')
    const categories = ['All products', ...new Set(productList.map(product => product.category))]

    const filteredProducts = selectedCategory === 'All products'
        ? productList
        : productList.filter(product => product.category === selectedCategory)

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
                className='text-4xl font-semibold md:text-5xl lg:text-6xl md:mt-20 mt-10 leading-normal'
            >
                Shop
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-md md:text-base lg:text-lg my-4 md:my-8 font-light'
            >
                Check out our full collection of products tailored to your needs
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex-wrap lg:flex-nowrap my-4 md:my-8 flex flex-row gap-2 md:gap-4'
            >
                {categories.map((category) => (
                    <CategoryBtn
                        key={category}
                        category={category}
                        isSelected={category === selectedCategory}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </motion.div>
            {filteredProducts.length === 0 ? (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    No products available for the selected category.
                </motion.p>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            )}
            <Subscribe />
        </motion.div>
    )
}

export default AllProducts