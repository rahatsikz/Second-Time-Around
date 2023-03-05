import React from "react";

const MyBuyers = () => {
  return (
    <div>
      <p className="text-xl font-bold md:text-center mb-8">My Buyers</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>

              <th>Product Name</th>
              <th>Price</th>
              <th>Paying Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {orders.map((order, idx) => (
              <tr key={order._id}>
                <th> {idx + 1} </th>

                <td> {order.device} </td>
                <td> {order.price} </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
