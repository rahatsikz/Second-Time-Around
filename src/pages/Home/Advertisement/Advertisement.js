import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedCard from "./AdvertisedCard";

const Advertisement = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/advertisedproduct").then((res) =>
        res.json()
      ),
  });
  return (
    <div className="my-12 container mx-auto">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">
        Latest Advertisement
      </h2>
      <p className="text-lg text-center mt-2 max-w-sm mx-auto">
        Our Sellers always upload quality product and our team ensures it
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <AdvertisedCard key={product._id} product={product}></AdvertisedCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
