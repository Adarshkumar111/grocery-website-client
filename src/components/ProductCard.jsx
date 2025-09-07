import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  if (!product) return null;

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-200 rounded-md p-3 md:p-4 bg-white w-full hover:shadow-md transition"
    >
      {/* Image */}
      <div className="group cursor-pointer flex items-center justify-center">
        <img
          className="group-hover:scale-105 transition w-full h-40 md:h-48 object-contain"
          src={product.image[0]}
          alt={product.name}
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="text-gray-500/70 text-sm mt-2">
        <p className="capitalize">{product.category}</p>
        <p className="text-gray-700 font-medium text-base md:text-lg truncate">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              className="md:w-3.5 w-3"
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              alt={i < 4 ? "filled star" : "empty star"}
            />
          ))}
          <p className="ml-1 text-xs md:text-sm">(4)</p>
        </div>

        {/* Price + AddToCart */}
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-[#4fbf8b]">
            {currency}
            {product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              {currency}
              {product.price}
            </span>
          </p>

          <div
            onClick={(e) => e.stopPropagation()}
            className="text-[#4fbf8b]"
          >
            {!cartItems[product._id] ? (
              <button
                className="flex items-center justify-center gap-1 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 w-[70px] md:w-[80px] h-[34px] rounded text-xs md:text-sm"
                onClick={() => addToCart(product._id)}
              >
                <img
                  src={assets.cart_icon}
                  alt="cart_icon"
                  className="w-3.5 md:w-4"
                />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-[#4fbf8b]/25 rounded select-none">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  -
                </button>
                <span className="w-5 text-center text-sm">
                  {cartItems[product._id]}
                </span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
