import { useQuery } from "@tanstack/react-query";
import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("http://localhost:5000/advertisedproduct", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  console.log(product);
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <UserReview></UserReview>
      {product.length > 0 && <Advertisement></Advertisement>}
    </div>
  );
};

export default Home;
