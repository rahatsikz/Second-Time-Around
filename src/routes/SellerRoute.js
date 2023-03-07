import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SellerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { data: userrole = [] } = useQuery({
    queryKey: ["userrole", user?.email],
    queryFn: () =>
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/users?email=${user?.email}`
      ).then((res) => res.json()),
  });

  if (user?.uid && userrole.role === "Seller") {
    return children;
  } else {
    toast.error("You are not a Seller", {
      id: "not duplicate",
    });
    return <Navigate to="/" />;
  }
};

export default SellerRoute;
