import React from "react";
import Header from "../assets/Componants/Header";
import Footer from "../assets/Componants/Footer";
import { Outlet } from "react-router";
const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;