import axios from "axios";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { HiCheckCircle } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const ProductCard = ({ product, refetch }) => {
  const [items, setItems] = useState(product);
  const handleClose = () => {
    setItems(null);
  };

  const {
    picture,
    name,
    Seller,
    timeOfSellPost,
    isSellerVerified,
    location,
    yearOfUse,
    productCondition,
    orginalPrice,
    resalePrice,
    _id,
  } = product;
  const time = format(parseISO(timeOfSellPost), "PP");
  // console.log(time);

  const handleReport = (id) => {
    // console.log(id);
    axios
      .put(
        `https://second-time-around-server-rahatsikz.vercel.app/products/${id}`,
        {
          reported: true,
        }
      )
      .then((response) => {
        console.log(response);
        toast.success("Reported to admin successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <div className="flex flex-col items-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={picture}
            alt="mobile"
            className="object-cover min-h-full aspect-auto py-8"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">{name}</h3>
              <p className="text-sm text-slate-400 mt-4 flex items-center">
                Posted By {Seller}
                {isSellerVerified && (
                  <span className="text-blue-600 text-xl ml-1" title="Verified">
                    <HiCheckCircle />
                  </span>
                )}
              </p>
              <p className="text-sm text-slate-400">
                {/* on {timeOfSellPost.slice(0, 10)} */}
                on {time}
              </p>
              <p className="flex items-center mt-2">
                <span className="text-teal-600">
                  <MdLocationOn />
                </span>
                {location}
              </p>
            </div>
          </header>
          <p>
            Product used for {yearOfUse} {yearOfUse > 1 ? "years" : "year"}
          </p>
          <p>Device Condition is {productCondition}</p>
          <p className="mt-4 flex items-center">
            Market Price
            <span className="text-teal-600 font-semibold ml-1">
              {orginalPrice}
            </span>
            <TbCurrencyTaka />
          </p>
          <p className="flex items-center">
            Resale Price
            <span className="text-teal-600 font-semibold ml-1">
              {resalePrice}
            </span>
            <TbCurrencyTaka />
          </p>
          <label
            htmlFor={_id}
            className="btn btn-xs border-0 inline-flex items-center mt-8 justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-gray-300 disabled:shadow-none"
          >
            <span>Purchase Now</span>
          </label>
          <br />
          <button
            onClick={() => handleReport(_id)}
            className=" inline-flex h-10 items-center mt-2 justify-center gap-2 whitespace-nowrap rounded border border-red-500 px-5 text-sm font-medium tracking-wide text-red-500 transition duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white focus:border-red-700  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:text-red-300 disabled:shadow-none"
          >
            <span>Report to Admin</span>
          </button>
        </div>
      </div>
      {items && (
        <PurchaseModal
          items={items}
          handleClose={handleClose}
          refetch={refetch}
        ></PurchaseModal>
      )}
    </section>
  );
};

export default ProductCard;
