import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const PurchaseModal = ({ product }) => {
  const { name, resalePrice, _id } = product;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-base-200">
          <h4 className="text-lg text-center font-semibold mb-4">
            Purchase Detail
          </h4>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="your name"
              defaultValue={user?.displayName}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="your email"
              defaultValue={user?.email}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="your selected device"
              defaultValue={name}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="selected device Price"
              defaultValue={resalePrice + " tk"}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Your Mobile Number"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Desired Meeting Location"
              className="input w-full"
            />
            <div className="modal-action !mt-2 !justify-center">
              <label htmlFor={_id} className="btn btn-block">
                Submit
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
