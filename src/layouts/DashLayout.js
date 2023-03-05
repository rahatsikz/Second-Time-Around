import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../pages/Shared/Loader/Loader";
import Navbar from "../pages/Shared/Navbar/Navbar";

const DashLayout = () => {
  const { user } = useContext(AuthContext);
  const { data: userrole = [], isLoading } = useQuery({
    queryKey: ["userrole", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/users?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(userrole);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile container mx-auto h-[90vh]">
        <input id="orderDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col px-8 py-12">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="orderDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            {userrole.role === "Buyer" && (
              <li>
                <Link
                  to="/dashboard/myorders"
                  className="text-lg font-semibold active:bg-teal-500"
                >
                  My Orders
                </Link>
              </li>
            )}
            {userrole.role === "Seller" && (
              <li>
                <Link
                  to="/dashboard/addproduct"
                  className="text-lg font-semibold active:bg-teal-500"
                >
                  Add a Product
                </Link>
              </li>
            )}
            {userrole.role === "Seller" && (
              <li>
                <Link
                  to="/dashboard/myproducts"
                  className="text-lg font-semibold active:bg-teal-500"
                >
                  My Products
                </Link>
              </li>
            )}
            {userrole.role === "Seller" && (
              <li>
                <Link
                  to="/dashboard/mybuyers"
                  className="text-lg font-semibold active:bg-teal-500"
                >
                  My Buyers
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
