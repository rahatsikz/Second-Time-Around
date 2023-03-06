import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { data: userrole = [] } = useQuery({
    queryKey: ["userrole", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/users?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (user?.uid && userrole.role === "Admin") {
    return children;
  } else {
    toast.error("You are not Admin", {
      id: "only once",
    });
    return <Navigate to="/" />;
  }
};

export default AdminRoute;
