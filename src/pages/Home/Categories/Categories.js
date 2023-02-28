import React from "react";
import Category from "./Category";

const Categories = () => {
  const mobileCategories = [
    {
      id: 1,
      name: "Android",
      icon: "https://pixabay.com/get/g87cac2a0119472a774864f9831a98cc862b99fc6eb20866f5ec523ce268d5b89362aa99bcf6dbc07e0c79ca515c59491989c7b2b7884144c3e6a1fb0c8d42b82d96f20018147510884e0c72ac8f591bc_640.png",
    },
    {
      id: 2,
      name: "iOS",
      icon: "https://pixabay.com/get/g8cb094583e8a59a14743c6bbe9e1406eec13d6c71c6f202a4f34d4d6fdfe16cc84ee20cd8806bf27fdfbb04bb33554b878ee8ac8adcd59bc3a0ddec2381eb462e25c4d11e52cc2540d9fab3287c29f92_640.png",
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
