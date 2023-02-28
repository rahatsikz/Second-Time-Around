import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const categorizedProduct = useLoaderData();
  return (
    <section className="container mx-auto">
      <div className="my-12">
        <h2 className="text-3xl font-semibold text-teal-500 text-center">
          {categorizedProduct[0].category} Devices
        </h2>
        <p className="text-lg text-center mt-2 max-w-sm mx-auto">
          Best Second hand devices you can get are here. Just Choose Wisely
        </p>
      </div>
      <div className="grid xl:grid-cols-2 gap-12 mb-12 xl:w-5/6 mx-auto">
        {categorizedProduct.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Products;
