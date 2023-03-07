import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],

    queryFn: () =>
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });
  return (
    <div>
      <p className="text-xl font-bold text-center mb-8">My Orders</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Paying Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id}>
                <th> {idx + 1} </th>
                <td>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={order.productPic} alt="" />
                    </div>
                  </div>
                </td>
                <td> {order.device} </td>
                <td> {order.price} </td>
                <td>
                  {order.paid === true ? (
                    <p className="text-green-600">Paid</p>
                  ) : (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-sm btn-ghost">Pay</button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
