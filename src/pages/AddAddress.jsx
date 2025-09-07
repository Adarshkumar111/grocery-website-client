import React, { useState } from "react";
import { assets } from "../assets/assets";

const InputField = ({ type, placeholder, handleChange, address, name }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-[#4fbf8b] transition"
    type={type}
    placeholder={placeholder}
    name={name}
    value={address[name]}
    onChange={handleChange}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 pb-16 px-4 md:px-10">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-[#4fbf8b]">Address</span>
      </p>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-10">
        <div className="flex-1 max-w-md w-full">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last name"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email address"
            />

            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="number"
                placeholder="Zip code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="number"
              placeholder="Phone"
            />

            <button className="w-full mt-6 bg-[#4fbf8b] text-white py-3 hover:bg-[#4fbf8c] transition cursor-pointer uppercase">
              Save Address
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            className="w-full max-w-xs md:max-w-full object-contain"
            src={assets.add_address_iamge}
            alt="Add Address"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
