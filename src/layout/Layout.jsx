import React from "react";
import Header from "../assets/Componants/Header";
import Footer from "../assets/Componants/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </>
    );
};

export default Layout;