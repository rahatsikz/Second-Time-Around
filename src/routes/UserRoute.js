import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const UserRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { data: userrole = [] } = useQuery({
    queryKey: ["userrole", user?.email],
    queryFn: () =>
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/users?email=${user?.email}`
      ).then((res) => res.json()),
  });

  if (user?.uid && userrole.role === "Buyer") {
    return children;
  }
  return <Navigate to="/" />;
};

export default UserRoute;
