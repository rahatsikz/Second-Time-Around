import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/products?name=${user?.displayName}`
      ).then((res) => res.json()),
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete it?");
    if (proceed) {
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/products/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Deleted Successfully");
          refetch();
        });
    }
  };
  const handleAdvertise = (id) => {
    // console.log(id);
    axios
      .put(
        `https://second-time-around-server-rahatsikz.vercel.app/products/${id}`,
        {
          advertised: true,
        }
      )
      .then((response) => {
        console.log(response);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <p className="text-xl font-bold text-center mb-8">My Products</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Sale Status</th>
              <th>Advertise Item</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, idx) => (
              <tr key={item._id}>
                <th> {idx + 1} </th>
                <td>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={item.picture} alt="" />
                    </div>
                  </div>
                </td>
                <td> {item.name} </td>
                <td> {item.resalePrice} </td>
                <td>{item.isProductPurchased ? "Sold" : "Available"}</td>
                <td>
                  {!item.isProductPurchased && !item.isAdvertise && (
                    <button
                      onClick={() => handleAdvertise(item._id)}
                      className="btn btn-outline btn-sm"
                    >
                      Advertise
                    </button>
                  )}
                  {!item.isProductPurchased && item.isAdvertise && (
                    <p className="text-green-500">Advertised</p>
                  )}
                  {item.isProductPurchased && (
                    <p className="text-error">Not Applicable</p>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
