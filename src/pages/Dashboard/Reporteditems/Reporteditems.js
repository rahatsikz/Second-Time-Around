import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

const Reporteditems = () => {
  const { data: reported = [], refetch } = useQuery({
    queryKey: ["reported"],
    queryFn: () =>
      fetch(
        "https://second-time-around-server-rahatsikz.vercel.app/reportedproduct"
      ).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this reported item?");
    if (proceed) {
      axios
        .delete(
          `https://second-time-around-server-rahatsikz.vercel.app/reportedproduct/${id}`
        )
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
        Reported items by users
      </p>
      <div className="overflow-x-auto">
        <table className="table lg:w-3/4 w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Product image</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {reported.map((item, idx) => (
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
                <td> {item.Seller} </td>
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

export default Reporteditems;
