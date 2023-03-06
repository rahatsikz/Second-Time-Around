import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

const AllBuyer = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: () =>
      fetch("http://localhost:5000/buyers").then((res) => res.json()),
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this buyer");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/buyers/${id}`)
        .then((response) => {
          console.log(response);
          toast.success("Deleted Successfully");
          refetch();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <p className="text-xl font-bold text-center mb-8">
        All Buyers of this site
      </p>
      <div className="overflow-x-auto">
        <table className="table lg:w-3/4 w-full mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Delete Buyer</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, idx) => (
              <tr key={buyer._id}>
                <th> {idx + 1} </th>
                <td> {buyer.name} </td>
                <td> {buyer.email} </td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
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

export default AllBuyer;
