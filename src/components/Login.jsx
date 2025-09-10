import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { setShowUserLogin, setUser, axios, navigate } = useAppContext();

  const [state, setState] = useState("login"); // "login" or "register"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(`/api/v1/user/${state}`, {
        name,
        email,
        password,
      });
      if (data.success) {
        navigate("/");
        setUser(data.user);
        setShowUserLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 text-sm text-gray-600 px-4"
    >
      {/* Modal */}
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 w-full max-w-sm sm:max-w-md p-6 sm:p-10 rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        {/* Title */}
        <p className="text-2xl font-medium text-center mb-2">
          <span className="text-[#4fbf8b]">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {/* Name Field (only for register) */}
        {state === "register" && (
          <div className="w-full">
            <p className="text-gray-700">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type here"
              className="border border-gray-300 rounded w-full p-2 mt-1 outline-[#4fbf8b]"
              type="text"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="w-full">
          <p className="text-gray-700">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Type here"
            className="border border-gray-300 rounded w-full p-2 mt-1 outline-[#4fbf8b]"
            type="email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="w-full">
          <p className="text-gray-700">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Type here"
            className="border border-gray-300 rounded w-full p-2 mt-1 outline-[#4fbf8b]"
            type="password"
            required
          />
        </div>

        {/* Switch between Login/Register */}
        {state === "register" ? (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-[#4fbf8b] cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-[#4fbf8b] cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
        )}

        {/* Submit Button */}
        <button className="bg-[#4fbf8b] hover:bg-[#3ca878] transition-all text-white w-full py-2 rounded-md font-medium">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
