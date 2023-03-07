import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const { data: buyers = [] } = useQuery({
    queryKey: ["buyers"],
    queryFn: () =>
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/mybuyer?name=${user?.displayName}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });
  return (
    <div>
      <p className="text-xl font-bold text-center mb-8">My Buyers</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Sold Product</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Buyer Location</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, idx) => (
              <tr key={buyer._id}>
                <th> {idx + 1} </th>
                <td> {buyer.device} </td>
                <td> {buyer.buyer} </td>
                <td> {buyer.email} </td>
                <td> {buyer.buyerLocation} </td>
                <td> {buyer.contact} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
