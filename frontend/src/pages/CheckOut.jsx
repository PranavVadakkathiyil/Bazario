import React from "react";
import { FaPlus, MdOutlineEdit } from "../utils/icons";
const CheckOut = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-sm  sm:flex items-center justify-center">
      
      <div className="border p-4 mx-4">
      <p className="text-center text-2xl p-3 sm:">CheckOut</p>
        <p className="my-2 text-[1.2rem]">Delivery address</p>
        <p className="flex items-center gap-3">
          <FaPlus className=" border text-3xl" /> Add Address
        </p>
        <p className="flex items-center gap-3">
          <MdOutlineEdit className=" border text-3xl" /> Edit Address
        </p>
        <div className="border my-5 p-5">
          <p>Name</p>
          <p>Address</p>
          <p>Phone</p>
        </div>

        <div className="w-full ">
          <p className="my-2">Have Coupen code </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter coupen code"
              className="px-4 py-2 border outline-none "
            />
            <button className="border p-2 bg-yellow-400">check</button>
          </div>
        </div>
        <div>
          
          <div>
            <p className="my-4 sm:text-2xl">Payment Mode</p>
            <div className="flex gap-4">
              <div className="">
                <input
                  type="checkbox"
                  name="payment"
                  id="cash"
                  className="mr-1"
                />
                <label for="cash">Cash</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="payment"
                  id="online"
                  className="mr-1"
                />
                <label for="online">Online</label>
              </div>
            </div>
          </div>
          <div className="border my-5 p-5">
            <p>Items: ₹399.00</p>
            <p>Delivery: ₹40.00</p>
            <p>Order Total: ₹439.00</p>
            <button className="bg-yellow-400 px-8 py-2 mt-3 rounded-full">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckOut;
