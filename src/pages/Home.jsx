import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/productActions";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="container max-w-screen  p-4 dark:bg-slate-900">
      <h1 className="text-4xl font-bold text-center mb-8">Product Store</h1>
      {/* {status === "loading" && <div>Loading...</div>} */}
      {status === "loading" && (
        <div className="loading_Container">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {status === "failed" && <div>Error: {error}</div>}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
