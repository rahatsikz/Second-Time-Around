import React from "react";
import Category from "./Category";

const Categories = () => {
  const mobileCategories = [
    {
      id: 1,
      name: "Android",
      icon: "https://i.ibb.co/BGVbJTg/android-logo-640.png",
    },
    {
      id: 2,
      name: "iOS",
      icon: "https://i.ibb.co/T1yRnzn/apple-logo-640.png",
    },
    {
      id: 3,
      name: "KaiOS",
      icon: "https://i.ibb.co/NpDCxbm/kaios.png",
    },
  ];
  return (
    <div className="my-12 container mx-auto">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">
        Categories
      </h2>
      <p className="text-lg text-center mt-2 max-w-sm mx-auto">
        Our Expert panel has categorized mobile devices on based of 3 top
        Operating System
      </p>
      <div className="grid lg:grid-cols-3 gap-12 mt-8">
        {mobileCategories.map((cat) => (
          <Category key={cat.id} cat={cat}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
