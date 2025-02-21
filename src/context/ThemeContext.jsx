import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

import React from "react";

const ThemeComponant = ({children}) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const handleCartModalClose = () => {
    setIsCartModalOpen(false);
  };

  const handleCartModalOpen = () => {
    setIsCartModalOpen(true);
  };

  const [cartItems, setCartItems] = useState([]);
  const fetchExistingCartList = () => {
    const parsedProduct = JSON.parse(localStorage.getItem("cart"));
    // console.log(parsed Product)
    setCartItems(parsedProduct);
    console.log("Okay i am in the cart modal useeffect");
   };
 
  useEffect(()=>{
   fetchExistingCartList();
  },[]);

 const value ={isCartModalOpen ,
     setIsCartModalOpen ,
      handleCartModalClose ,
       handleCartModalOpen ,
       cartItems,
       setCartItems,
       fetchExistingCartList
    };

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeComponant;
