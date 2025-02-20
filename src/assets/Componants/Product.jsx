import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router";

// const Product = (props) => {

const Product = (props) => {
  const { image, category, title, price, id } = props.product;

  const handleAddToCart = () => {
    const addToCartProduct = {
      name: title,
      price: price,
      id: id,
      image: image,
      qty: 1,
      total: 1* price,
    };
    const existingProduct = localStorage.getItem("cart");
    const parsedProduct = JSON.parse(existingProduct);

    // console.log(addToCartProduct)
    // console.log(parsedProduct)
    const isInCart =
      parsedProduct && parsedProduct.length > 0
        ? parsedProduct?.find((it) => it.id === id)
        : undefined;
    // console.log(isInCart);
    if (isInCart === undefined) {
      if (parsedProduct && parsedProduct.length > 0) {
        const newCart = [...parsedProduct, addToCartProduct];
        // console.log(newCart);
        const stringifyProduct = JSON.stringify(newCart);
        localStorage.setItem("cart", stringifyProduct);
      } else {
        const stringifyProduct = JSON.stringify([addToCartProduct]);
        localStorage.setItem("cart", stringifyProduct);
      }
    }
    // console.log(addToCartProduct)
    // const stringifyProduct = JSON.stringify([addToCartProduct]);
    // console.log(stringifyProduct)
    console.log(parsedProduct);
    // localStorage.setItem("cart", stringifyProduct);
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">{price}BDT</p>
        <Link to={`/products/${id}`}>
          <button className="border p-2 w-full rounded-md"> See More</button>
        </Link>
        <button
          onClick={handleAddToCart}
          className="border my-2 bg-gray-400 font-bold p-2 w-full rounded-md flex gap-2 items-center justify-center cursor-pointer"
        >
          <Icon className="text-2xl font-bold" icon={"mdi-light:cart"}></Icon>{" "}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
