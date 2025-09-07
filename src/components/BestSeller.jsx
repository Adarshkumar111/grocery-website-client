import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-16 px-4 md:px-8 lg:px-12">
      <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800">
        Best Seller
      </p>
      <div
        className="
          grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
        "
      >
        {products
          .filter((product) => product.inStock)
          .slice(0, 6) // extra responsive balance
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
