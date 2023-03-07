import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const { data: userrole = [] } = useQuery({
    queryKey: ["userrole", user?.email],
    queryFn: () =>
      fetch(
        `https://second-time-around-server-rahatsikz.vercel.app/users?email=${user?.email}`
      ).then((res) => res.json()),
  });

  // console.log(userrole);

  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product = form.product.value;
    const productIMG = form.productIMG.files[0];
    const category = form.category.value;
    const year = form.year.value;
    const orgPrice = form.orgPrice.value;
    const resalePrice = form.resalePrice.value;
    const location = form.location.value;
    const condition = form.condition.value;
    const mobileNo = form.mobileNo.value;
    const date = new Date();
    console.log(e.target.productIMG.files[0]);
    const catID =
      (category === "Android" && 1) || (category === "iOS" && 2) || 3;

    const imgbbApi = process.env.REACT_APP_IMGBB;
    console.log(imgbbApi);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbApi}`;
    const formdata = new FormData();
    formdata.append("image", productIMG);
    console.log(formdata);

    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log(data.data.url);

          const add = {
            name: product,
            picture: data.data.url,
            category: category,
            categoryID: catID,
            yearOfUse: year,
            orginalPrice: orgPrice,
            resalePrice: resalePrice,
            timeOfSellPost: date,
            Seller: user.displayName,
            isSellerVerified: userrole.verified ? true : false,
            location: location,
            productCondition: condition,
            isProductPurchased: false,
            contact: mobileNo,
          };
          axios
            .post(
              "https://second-time-around-server-rahatsikz.vercel.app/products/add",
              {
                add,
              }
            )
            .then((response) => {
              console.log(response);
              toast.success("Product added successfully");
              navigate("/dashboard/myproducts");
            })
            .catch((error) => console.log(error));
          // console.log(add);
        }
      });

    // console.log(
    //   product,
    //   productIMG,
    //   category,
    //   catID,
    //   year,
    //   orgPrice,
    //   resalePrice,
    //   location,
    //   condition,
    //   mobileNo,
    //   date
    // );
  };
  return (
    <div>
      <p className="text-xl font-bold md:text-center mb-8">
        Add Your Desired selling Product
      </p>
      <form onSubmit={handleSumbit}>
        <div className="my-8 grid lg:grid-cols-3 md:grid-cols-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="product"
              className="input focus:outline-none input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload Product Image</span>
            </label>
            <input
              type="file"
              name="productIMG"
              className="file-input file-input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Category</span>
            </label>
            <select
              name="category"
              className="select focus:outline-none select-bordered"
            >
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value="kaiOS">KaiOS</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Years of use</span>
            </label>
            <select
              name="year"
              className="select focus:outline-none select-bordered"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Orginal Price</span>
            </label>
            <input
              type="number"
              name="orgPrice"
              className="input focus:outline-none input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="number"
              name="resalePrice"
              className="input focus:outline-none input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input focus:outline-none input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Condition</span>
            </label>
            <select
              name="condition"
              className="select focus:outline-none select-bordered"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Mobile No</span>
            </label>
            <input
              type="text"
              name="mobileNo"
              className="input focus:outline-none input-bordered w-full max-w-xs"
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn">
            Add the Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
