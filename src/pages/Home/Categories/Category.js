import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ cat }) => {
  const { name, icon, id } = cat;
  const navigate = useNavigate();
  const handleCategory = () => {
    navigate(`/category/${id}`);
  };
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={icon} alt="ico" className="bg-[#F0F0F0] p-10" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl mb-4 font-medium"> {name} </h2>
          <div className="card-actions justify-center">
            <button
              onClick={handleCategory}
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-teal-600 px-5 text-sm font-medium tracking-wide text-teal-600 shadow-md shadow-teal-200 transition duration-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:border-teal-700 focus:text-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:text-teal-300 disabled:shadow-none"
            >
              <span>Explore Products</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
