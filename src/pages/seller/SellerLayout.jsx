import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";

const SellerLayout = () => {
  const { setIsSeller } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    setIsSeller(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden px-2 py-1 border rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <Link to="/">
            <img
              src={assets.logo}
              alt="logo"
              className="cursor-pointer w-28 md:w-36"
            />
          </Link>
        </div>

        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-full z-40 bg-white border-r border-gray-300 pt-4
            transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-300 md:translate-x-0 md:relative md:w-64 w-64
          `}
        >
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-[#4fbf8b]/10 border-[#4fbf8b] text-[#4fbf8b]"
                    : "hover:bg-gray-100/90 border-white"
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <img src={item.icon} alt="" className="w-6 h-6" />
              <p className="md:block hidden">{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Overlay for mobile when sidebar open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 md:ml-64 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SellerLayout;
