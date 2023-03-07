import { useQuery } from "@tanstack/react-query";
import React from "react";
import Carousel from "react-grid-carousel";

const Advertisement = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/advertisedproduct", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div className="my-12 container mx-auto">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">
        Latest Advertisement
      </h2>
      <p className="text-lg text-center mt-2 max-w-sm mx-auto">
        Our Sellers always upload quality product and our team ensures it
      </p>

      <div className="mt-8">
        <Carousel cols={1} rows={1} gap={10} autoplay={2500} loop>
          {products.map((product) => (
            <Carousel.Item>
              <img className="w-1/3 mx-auto" src={product.picture} alt="" />
              <h2 className="text-center text-2xl my-4 font-medium">
                {product.name}
              </h2>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisement;
