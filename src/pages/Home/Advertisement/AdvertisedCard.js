import React from "react";

const AdvertisedCard = ({ product }) => {
  const { name, picture } = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="ico" className="p-10 w-96" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl mb-4 font-medium"> {name} </h2>
          {/* <div className="card-actions justify-center mb-4"></div> */}
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
