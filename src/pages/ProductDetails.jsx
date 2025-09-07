import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { products, navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (products.length > 0 && product) {
      const productsCopy = products.filter(
        (item) => product.category === item.category && item._id !== product._id
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, product]);

  useEffect(() => {
    setThumbnail(product?.image[0] || null);
  }, [product]);

  return (
    product && (
      <div className="mt-12 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm md:text-base text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link> / 
          <Link to="/products" className="hover:underline"> Products</Link> / 
          <Link to={`/products/${product.category.toLowerCase()}`} className="hover:underline">
            {product.category}
          </Link> / 
          <span className="text-[#4fbf8b] font-medium"> {product.name}</span>
        </p>

        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Thumbnails + Main Image */}
          <div className="flex gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border border-gray-300 rounded overflow-hidden cursor-pointer w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="object-contain w-full h-full"/>
                </div>
              ))}
            </div>
            <div className="border border-gray-300 rounded overflow-hidden flex-1 max-h-[400px] md:max-h-[500px]">
              <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover"/>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 text-sm md:text-base">
            <h1 className="text-2xl md:text-3xl font-medium">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              {Array(5).fill("").map((_, i) => (
                <img key={i} src={i < 4 ? assets.star_icon : assets.star_dull_icon} className="w-4 h-4 md:w-5 md:h-5" alt="star" />
              ))}
              <p className="ml-2 text-sm md:text-base">(4)</p>
            </div>

            {/* Price */}
            <div className="mt-4">
              <p className="text-gray-500 line-through">
                {currency}{product.price}
              </p>
              <p className="text-2xl md:text-3xl font-medium mt-1">
                {currency}{product.offerPrice}
              </p>
              <span className="text-gray-500/70 text-sm md:text-base">(inclusive of all taxes)</span>
            </div>

            {/* Description */}
            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70 mt-1">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3 mt-6">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full md:w-1/2 py-3 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition font-medium rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product._id);
                  navigate("/cart");
                }}
                className="w-full md:w-1/2 py-3 bg-[#4fbf8b] text-white hover:bg-[#4fbf8c] transition font-medium rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <p className="text-2xl md:text-3xl font-medium text-center">Related Products</p>
            <div className="w-20 h-0.5 bg-[#4fbf8b] rounded-full mx-auto mt-2"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
              {relatedProducts.filter(p => p.inStock).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <button
              onClick={() => { navigate("/products"); scrollTo(0, 0); }}
              className="mx-auto mt-8 px-6 py-2 border rounded text-[#4fbf8b] hover:bg-[#4fbf8b]/10 transition block"
            >
              See More
            </button>
          </div>
        )}
      </div>
    )
  )
}

export default ProductDetails;
