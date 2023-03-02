import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-96 flex justify-center items-center">
      <h2 className="text-center text-lg font-semibold">
        Hey... <span className="text-teal-600">{user.displayName}</span> <br />{" "}
        Welcome to Dashboard
      </h2>
    </div>
  );
};

export default Dashboard;
