import React from "react";
import { MdDelete } from "../utils/icons";

const Cart = () => {
  return (
    <div className="w-full  sm:flex">
      <div className="sm:w-3/4    p-3 ">
        <div className="w-full h-[20vh] border mb-1 flex shadow-md">
          <img src="" alt="img" className="w-3/6 sm:w-1/6 border h-full" />
          <div className="w-3/6 sm:w-5/6 mx-5 mt-3">
            <p>Name</p>
            <p>category</p>
            <p>Price</p>
            <p className="flex gap-3 items-center">
              Quantity :
              <input type="number" name="" id="" min={1} className=" w-8" />
            </p>
            <p>rating</p>
          </div>
          <p className="p-1 rounded-full ">
            <MdDelete className="text-[1.5rem] border  " />
          </p>
        </div>
        
      </div>

      <div className="sm:w-1/4   p-3 ">
        <div className="p-6 border shadow-md">
          <p>Add items worth ₹359.00 for FREE Delivery <br /> View Products </p>
          <p>Subtotal of items (1) : <span className="font-bold">$ 144</span></p>
          <button className="bg-yellow-400 px-16 py-2 mt-4 rounded-full">Proceed to buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
