import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/sellers").then((res) => res.json()),
  });
  const handleDelete = (name) => {
    const proceed = window.confirm("Do you want to delete this seller");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/sellers?name=${name}`)
        .then((response) => {
          console.log(response);
          toast.success("Deleted Successfully");
          refetch();
        })
        .catch((error) => console.log(error));
    }
  };

  const handleVerify = (name) => {
    axios
      .put(`http://localhost:5000/sellers?name=${name}`, {
        verification: true,
      })
      .then((response) => {
        console.log(response);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <p className="text-xl font-bold text-center mb-8">
        All Sellers of this site
      </p>
      <div className="overflow-x-auto">
        <table className="table lg:w-3/4 w-full mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Verification</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) => (
              <tr key={seller._id}>
                <th> {idx + 1} </th>
                <td> {seller.name} </td>
                <td> {seller.email} </td>
                <td>
                  {!seller.verified && (
                    <button
                      onClick={() => handleVerify(seller.name)}
                      className="btn btn-sm"
                    >
                      Verify
                    </button>
                  )}
                  {seller.verified && (
                    <p className="text-green-500">Verified</p>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller.name)}
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

export default AllSeller;
