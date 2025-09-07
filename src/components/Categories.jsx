import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
  const { navigate } = useAppContext()

  return (
    <div className="mt-16">
      {/* Heading */}
      <p className="text-2xl md:text-3xl font-medium">Categories</p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center transition-transform"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`)
              scrollTo(0, 0)
            }}
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-110 transition-transform duration-300 w-20 sm:w-24 md:w-28"
            />

            {/* Text */}
            <p className="text-xs sm:text-sm md:text-base font-medium text-center mt-2">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
