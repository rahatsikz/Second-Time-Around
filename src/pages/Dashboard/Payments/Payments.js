import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payments = () => {
  const orderData = useLoaderData();
  const { device, price } = orderData;
  return (
    <div>
      <div className="mb-8">
        <p className="text-lg">
          Payment for <span className="text-teal-600"> {device} </span>
        </p>
        <p className="text-base">
          Please pay{" "}
          <span className="text-teal-600 font-semibold">{price}</span> Taka to
          avail the product
        </p>
      </div>
      <div className="w-1/3">
        <Elements stripe={stripePromise}>
          <CheckoutForm orderData={orderData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
