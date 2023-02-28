import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <UserReview></UserReview>
    </div>
  );
};

export default Home;
