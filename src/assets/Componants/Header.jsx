 import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";
const Header = () => {
const {cartItems,handleCartModalOpen} = useContext(ThemeContext);

    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className={({isActive})=> isActive ? "mr-5 text-blue-700 font-bold" : "mr-5 hover:text-gray-900" }>Home</NavLink>
            <NavLink to="about" className={({isActive})=> isActive ? "mr-5 text-blue-700 font-bold" : "mr-5 hover:text-gray-900" }>About</NavLink>
            <NavLink to="blog" className={({isActive})=> isActive ? "mr-5 text-blue-700 font-bold" : "mr-5 hover:text-gray-900" }>Blog</NavLink>
            <NavLink to={"products"} className={({isActive})=> isActive ? "mr-5 text-blue-700 font-bold" : "mr-5 hover:text-gray-900" } >Products</NavLink>
            <NavLink to="contact" className={({isActive})=> isActive ? "mr-5 text-blue-700 font-bold" : "mr-5 hover:text-gray-900" }>Contact</NavLink>
          </nav>
         <div>
         <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button onClick={handleCartModalOpen} className="p-5 border text-2xl">
            <Icon icon={"vaadin:cart"}></Icon>
            {cartItems?.length}
          </button>
         </div>
        </div>
      </header>
    );
};

export default Header;