import React from 'react'

const CategoryBtn = ({ category, isSelected, onClick }) => {
    return (
        <button
            className={`py-3 px-4 rounded-full ${isSelected ? 'bg-neutral-800 text-white' : 'bg-gray-200'
                }`}
            onClick={onClick}
        >
            {category}
        </button>
    )
}

export default CategoryBtn