import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{

    const currency=import.meta.VITE_CURRENCY

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

    const updatecartItem=(itemId, quantity)=>{
        let cartData=structuredClone(cartItems)
        setData[itemId]=quantity;
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



    useEffect(()=>{
        fetchProduct()
    },[])


    const value ={navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, products, currency, addToCart, updatecartItem, removeFromCart, cartItems, searchQuery, setSearchQuery}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    return useContext(AppContext)
}

