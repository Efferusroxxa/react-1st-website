import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Product from "../assets/Componants/Product";
import CartModal from "../assets/Componants/CartModal";
import { ThemeContext } from "../context/ThemeContext";

const Products = () => {

  const { isCartModalOpen,
     setIsCartModalOpen ,
    handleCartModalClose ,
     handleCartModalOpen ,
     cartItems,
     setCartItems,
     fetchExistingCartList, } = useContext(ThemeContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response.data)
      setProducts(response.data);
    });
  }, []);

  console.log(products);


 


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products &&
            products.length > 0 &&
            products?.map((it) => {
              return (
                <Product
                  handleCartModalOpen={handleCartModalOpen}
                  key={it.id}
                  product={it}
                  fetchExistingCartList={fetchExistingCartList}
                ></Product>
              );
            })}
        </div>
      </div>
      <CartModal
        isCartModalOpen={isCartModalOpen}
        handleCartModalClose={handleCartModalClose}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></CartModal>
    </section>
  );
};

export default Products;
