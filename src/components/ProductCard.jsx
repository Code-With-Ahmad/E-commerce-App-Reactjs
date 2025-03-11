import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded w-100 shadow-lg bg-white dark:bg-slate-900 px-5">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold">${product.price}</span>
          <span className="text-sm text-gray-500">
            Rating: {product.rating.rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
