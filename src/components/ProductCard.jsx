import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="rounded w-full shadow-lg bg-white dark:bg-slate-900 px-5 hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-64 object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 dark:text-white">
            {product.title}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-semibold dark:text-white">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Rating: {product.rating.rate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
