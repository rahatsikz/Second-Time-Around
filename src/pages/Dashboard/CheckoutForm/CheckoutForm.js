import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ orderData }) => {
  const { price, buyer, email, _id, device, Seller, meetingLocation, contact } =
    orderData;

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [clientSecretKey, setClientSecret] = useState("");
  const [transID, setTransID] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://second-time-around-server-rahatsikz.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }
    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecretKey,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer,
            email: email,
          },
        },
      }
    );
    if (confirmError) {
      setError(confirmError.message);
      return;
    }
    setTransID("");
    // console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        Seller,
        buyer,
        email,
        device,
        price,
        contact,
        buyerLocation: meetingLocation,
        transaction: paymentIntent.id,
        orderID: _id,
      };
      fetch("https://second-time-around-server-rahatsikz.vercel.app/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Payment Completed successfully");
            setTransID(paymentIntent.id);
          }
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="shadow-lg px-4 py-3 rounded-lg"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-[#14B8A6] border-0 px-8 ml-2 mt-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-error my-2"> {error} </p>}
      {transID && (
        <p className="my-2">
          Your transaction id <span className="text-green-600">{transID}</span>
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
