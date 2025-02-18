import React from "react";
import { Link } from "react-router";

// const Product = (props) => {

const Product = (props) => {
  const { image, category, title, price,id } = props.product;
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
          <button className="border p-2 w-full rounded-md">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
