import React, { useState } from "react";
import Header from "../assets/Componants/Header";
import Footer from "../assets/Componants/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import CartModal from "../assets/Componants/CartModal";

const Layout = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const handleCartModalClose = () =>{
    setIsCartModalOpen(false);
  }

 const handleCartModalOpen=()=>{
  setIsCartModalOpen(true)
 }
    return (
        <>
            <Header handleCartModalOpen={handleCartModalOpen}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            <CartModal handleCartModalClose={handleCartModalClose}isCartModalOpen={isCartModalOpen}></CartModal>
        </>
    );
};

export default Layout;