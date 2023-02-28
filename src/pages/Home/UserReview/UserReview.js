import React from "react";
import SingleReview from "./SingleReview";

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Hujaifa Ahnaf",
      location: "Gulshan",
      photo:
        "https://images.pexels.com/photos/4691234/pexels-photo-4691234.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
      description:
        " Recently i got to know about this webiste which selling 2nd hand mobile phones. Their site is good. Even I ordered a mobile phone from here. Hope to have a good service always",
    },
    {
      id: 2,
      name: "Rubayet Kamal",
      location: "Mirpur",
      photo:
        "https://images.pexels.com/photos/4827572/pexels-photo-4827572.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
      description:
        "I was looking to buy a mobile phone. I was searching here and there for a lucrative deal. Finally I visited this website. And I got to bought one phone. This site is exceptional and trustworthy",
    },
  ];
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">
        User Reviews
      </h2>
      <p className="text-lg text-center mt-2 max-w-sm mx-auto">
        We care about our user and get connected to know their experience in
        shopping with us
      </p>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        {reviews.map((rev) => (
          <SingleReview key={rev.id} rev={rev}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
