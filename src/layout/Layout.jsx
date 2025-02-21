import React, { useContext, useState } from "react";
import Header from "../assets/Componants/Header";
import Footer from "../assets/Componants/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import CartModal from "../assets/Componants/CartModal";
import { ThemeContext } from "../context/ThemeContext";

const Layout = () => {
  const { isCartModalOpen,
    setIsCartModalOpen ,
   handleCartModalClose ,
    handleCartModalOpen ,
    cartItems,
    setCartItems,
    fetchExistingCartList, } =
    useContext(ThemeContext);
  return (
    <>
      <Header handleCartModalOpen={handleCartModalOpen}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
      <CartModal
        handleCartModalClose={handleCartModalClose}
        isCartModalOpen={isCartModalOpen}
      ></CartModal>
    </>
  );
};

export default Layout;
