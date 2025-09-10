import React from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ProductList = () => {
  const { products, currency, axios, fetchProduct } = useAppContext();

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post("/api/v1/product/stock", {
        productId: id,
        inStock,
      });

      if (data.success) {
        fetchProduct();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-auto flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-2xl md:text-3xl font-medium">All Products</h2>
        <div className="w-full overflow-x-auto rounded-md border border-gray-300/20 bg-white">
          <table className="min-w-[600px] md:table-auto w-full">
            <thead className="text-gray-900 text-sm md:text-base text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Product</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate hidden md:table-cell">
                  Selling Price
                </th>
                <th className="px-4 py-3 font-semibold truncate">In Stock</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base text-gray-500">
              {products.map((product) => (
                <tr key={product._id} className="border-t border-gray-300/20">
                  <td className="px-2 md:px-4 py-3 flex items-center space-x-3 truncate min-w-[150px]">
                    <div className="border border-gray-300 rounded overflow-hidden w-16 h-16 flex-shrink-0">
                      <img
                        src={product.image[0]}
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="truncate">{product.name}</span>
                  </td>
                  <td className="px-4 py-3 truncate">{product.category}</td>
                  <td className="px-4 py-3 truncate hidden md:table-cell">
                    {currency}
                    {product.offerPrice}
                  </td>
                  <td className="px-4 py-3">
                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={product.inStock}
                        onChange={(e) =>
                          toggleStock(product._id, e.target.checked)
                        }
                      />

                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-[#4fbf8b] transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
