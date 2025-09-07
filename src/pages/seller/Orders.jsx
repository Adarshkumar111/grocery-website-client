import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyOrders } from "../../assets/assets";

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-auto">
      <div className="md:p-10 p-4 space-y-6">
        <h2 className="text-2xl md:text-3xl font-medium">Orders List</h2>
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-between p-4 md:p-6 max-w-full md:max-w-4xl rounded-md border border-gray-300 mx-auto bg-white"
          >
            {/* Items */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 flex-1">
              <img
                className="w-12 h-12 object-cover opacity-60"
                src={assets.box_icon}
                alt="boxIcon"
              />
              <div className="flex flex-col gap-1">
                {order.items.map((item, i) => (
                  <p key={i} className="font-medium text-sm md:text-base">
                    {item.product.name}{" "}
                    <span className="text-[#4fbf8b]">x {item.quantity}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex-1 text-sm md:text-base text-black/70 mt-3 md:mt-0">
              <p className="text-black/80 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city}
              </p>
              <p>
                {order.address.state}, {order.address.zipcode},{" "}
                {order.address.country}
              </p>
              <p>{order.address.phone}</p>
            </div>

            {/* Amount */}
            <p className="font-medium text-lg my-2 md:my-auto">
              {currency}
              {order.amount}
            </p>

            {/* Payment info */}
            <div className="flex-1 flex flex-col text-sm md:text-base text-black/70 mt-2 md:mt-0">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
