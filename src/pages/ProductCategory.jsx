import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {
  const { products } = useAppContext()
  const { category } = useParams()

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  )

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  )

  return (
    <div className="mt-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Category Title */}
      {searchCategory && (
        <div className="flex flex-col items-end w-max mb-6">
          <p className="text-2xl md:text-3xl font-medium">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-[#4fbf8b] rounded-full ml-auto mt-1"></div>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-2xl md:text-3xl font-medium text-[#4fbf8b] text-center">
            No products found in this category
          </p>
        </div>
      )}
    </div>
  )
}

export default ProductCategory
