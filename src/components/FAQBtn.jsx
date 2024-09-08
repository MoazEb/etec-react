import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { motion } from 'framer-motion'

const FAQBtn = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsOpen(!isOpen)}
      className='flex bg-gray-100 rounded-2xl my-4 flex-col gap-4 cursor-pointer overflow-hidden py-4 px-6'
    >
      <div className='flex justify-between items-center '>
        <h2 className='text-xl font-light mt-4'>{title}</h2>
        <motion.div
          initial={false}
          // animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus className='text-xl text-gray-900 mt-4' />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className='text-gray-400 mb-4 text-lg'>{description}</p>
      </motion.div>
    </motion.div>
  )
}

export default FAQBtn