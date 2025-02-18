import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./layout/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Dhaka
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/home" element={<App></App>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      
    </Routes> */}

      <Routes>
        <Route path="/" element={<Layout></Layout>}>
        {/* <Route path="/home" element={<App></App>}></Route>  */}
        <Route path="/" element={<App></App>}></Route> 
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route> 
      </Routes>

      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
