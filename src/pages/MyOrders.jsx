import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext();

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-[#4fbf8b] rounded-full"></div>
      </div>

      {/* Orders List */}
      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-10 p-4 sm:p-5"
        >
          {/* Order Info */}
          <div className="flex flex-col md:flex-row justify-between text-gray-400 font-medium text-sm mb-4 sm:mb-6">
            <span>OrderId : {order._id}</span>
            <span>Payment : {order.paymentType}</span>
            <span>
              Total Amount : {currency}
              {order.amount}
            </span>
          </div>

          {/* Order Items */}
          {order.items.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-white text-gray-500/70 ${
                order.items.length !== idx + 1 && "border-b"
              } border-gray-300 flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4`}
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 mb-4 sm:mb-0 flex-1">
                <div className="bg-[#4fbf8b]/10 p-4 rounded-lg flex-shrink-0">
                  <img
                    src={item.product.image[0]}
                    alt=""
                    className="w-20 h-20 object-contain rounded"
                  />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-medium text-gray-800 truncate">
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Category: {item.product.category}
                  </p>
                </div>
              </div>

              {/* Item Details */}
              <div className="flex flex-col justify-center gap-1 text-sm sm:text-base mb-2 sm:mb-0 flex-shrink-0">
                <p>Quantity: {item.quantity || 1}</p>
                <p>Status: {item.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              {/* Amount */}
              <p className="text-[#4fbf8b] text-lg sm:text-xl font-medium flex-shrink-0">
                Amount: {currency}
                {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
