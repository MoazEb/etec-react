import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
    const { image, name, price } = product
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className='relative flex gap-4 flex-col my-4 lg:my-2 cursor-pointer'
        >
            <img
                className='rounded-2xl'
                src={image}
                alt={name}
                loading="lazy"
            />
            <div className='flex flex-col lg:flex-row justify-between items-center text-xl lg:mx-2 text-center'>
                <h3 className='mr-2'>{name}</h3>
                <p className='text-gray-500'>USD {price.toFixed(2)}</p>
            </div>
            {product.featured && (
                <div className='absolute top-5 bg-white left-5 border-2 border-gray-300 text-gray-700 px-4 py-1 rounded-full'>
                    <p>Featured</p>
                </div>
            )}
        </motion.div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool,
    }).isRequired,
}

export default ProductCard