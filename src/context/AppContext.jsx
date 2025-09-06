import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{

    const currency=import.meta.env.VITE_CURRENCY

    const navigate=useNavigate();
    const [user,setUser]=useState(null)
    const [isSeller, setIsSeller]=useState(false)
    const [showUserLogin, setShowUserLogin]=useState(false)
    const [products, setProducts]=useState([])

    const[cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery]=useState({})

    // fetch all product

    const fetchProduct=async()=>{
        setProducts(dummyProducts)
    }

    // add rpoduct to cart
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId]=1
        }
        setCartItems(cartData);
        toast.success("Add to cart")
    }

    // update cart item quantity

    const updateCartItem=(itemId, quantity)=>{
        let cartData=structuredClone(cartItems)
    cartData[itemId]=quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    // remove product from cart

    const removeFromCart = (itemId) => {
  let cartData = structuredClone(cartItems); // clone current cart

  if (cartData[itemId]) {
    cartData[itemId] -= 1; // quantity -1
    if (cartData[itemId] === 0) {
      delete cartData[itemId]; // agar 0 ho gaya to hata do
    }
  }

  setCartItems(cartData); // state update
  toast.success("Removed from cart");
};

// Get Cart iteem count

const getCartCount=()=>{
    let totalCount=0;
    for(const item in cartItems){
        totalCount +=cartItems[item]
    }
    return totalCount;
}

// Get cart total amount

const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
        let itemInfo = products.find((product) => product._id === items);
        if (itemInfo && cartItems[items] > 0) {  // ✅ itemInfo undefined check
            totalAmount += itemInfo.offerPrice * cartItems[items];  // ✅ offerPrice typo fix
        }
    }
    return Math.floor(totalAmount * 100) / 100;
}



    useEffect(()=>{
        fetchProduct()
    },[])


    const value ={navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery, getCartAmount, getCartCount}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    return useContext(AppContext)
}

