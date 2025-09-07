import { useState } from "react";
import { assets, categories } from "../../assets/assets";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-auto flex flex-col">
      <form
        onSubmit={onSubmitHandler}
        className="md:p-10 p-4 space-y-6 max-w-full md:max-w-lg mx-auto"
      >
        {/* Images */}
        <div>
          <p className="text-base font-medium">Product Images</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                  <input
                    type="file"
                    id={`image${index}`}
                    hidden
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                  />
                  <img
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md border border-gray-300"
                    src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                    alt="uploadArea"
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="product-description">
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none w-full"
          ></textarea>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 w-full"
          >
            <option value="">Select Category</option>
            {categories.map((item, index) => (
              <option key={index} value={item.path}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price + Offer Price */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[140px] flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              min="0"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 w-full"
              required
            />
          </div>
          <div className="flex-1 min-w-[140px] flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              min="0"
              placeholder="0"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 w-full"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button className="w-full px-8 py-2.5 bg-[#4fbf8b] hover:bg-[#44ae7c] text-white font-medium rounded-md transition">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
