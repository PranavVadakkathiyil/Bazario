import React from "react";
import {FaStar} from '../utils/icons'
const img =
  "https://img.freepik.com/free-photo/man-pointing-his-left_1149-1062.jpg?ga=GA1.1.18459205.1736571984&semt=ais_hybrid";
const img2 =
  "https://img.freepik.com/free-photo/handsome-man-pointing-back_1368-68.jpg?ga=GA1.1.18459205.1736571984&semt=ais_hybrid";
const Product = () => {
  return (
    <div className="">
      <div className="m-2">
        <div className="w-full sm:flex flex-row">
          <div className="flex sm:w-2/5  sm:h-[90vh]">
            <div className="w-[18%] border h-full">
              <img src={img} alt="" className="w-full sm:h-[20%] h-16" />
              <img src={img} alt="" className="w-full sm:h-[20%] h-16" />
              <img src={img2} alt="" className="w-full sm:h-[20%] h-16" />
              <img src={img} alt="" className="w-full sm:h-[20%] h-16" />
              <img src={img} alt="" className="w-full sm:h-[20%] h-16" />
            </div>
            <div className="w-[80%] border h-full">
              <img
                src={img2}
                alt=""
                className="sm:w-full sm:h-full w-80 h-80"
              />
            </div>
          </div>
          <div className="sm:w-3/5 border sm:h-[90vh] p-5">
            <p className="sm:text-3xl text-2xl">Name</p>
            <p className="text-xl text-gray-500">Describe</p>
            <p className="">Special price <span className="text-2xl mr-3"> 144</span> <span className="text-2xl line-through text-gray-300"> 144</span></p>
            <div className="flex gap-2 mt-3">
              <p>Sizes : </p>
              <p className="px-2 border">1</p>
              <p className="px-2 border">1</p>
              <p className="px-2 border">1</p>
              <p className="px-2 border">1</p>
              <p className="px-2 border">1</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <p>Rating</p>
              <div className="flex gap-1">
              <FaStar className="text-yellow-300"/>
              <FaStar className="text-yellow-300"/>
              <FaStar className="text-yellow-300"/>
              <FaStar className="text-yellow-300"/>
              <FaStar className="text-yellow-300"/>
              </div>
            </div>
            <div className="w-full ">
            <button className="bg-yellow-400 px-4 py-2 rounded-full my-4  hover:bg-yellow-300 k">
              Add to cart
            </button>
            <button className="bg-red-400 px-4 py-2 rounded-full my-4 ml-3 hover:bg-red-300 k">
              Add to whishlist
            </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-center sm:text-2xl text-xl m-2">Reviews</p>
          <div className="m-1 border p-3">
            <p>Pranav V</p>
            <div className="flex items-center gap-2">
            <p>Rating </p>
            <FaStar className="text-yellow-300"/>
            <FaStar className="text-yellow-300"/>
            <FaStar className="text-yellow-300"/>
            <FaStar className="text-yellow-300"/>
            <FaStar className="text-yellow-300"/>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, commodi sapiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
