import React from "react";
import { FaStarOfLife , BiSolidOffer ,PiDressBold,AiTwotoneHome ,IoPhonePortraitOutline,GiFruitBowl,GiLipstick,LuShoppingCart,BiSolidCoupon} from "../utils/icons";
import img from "../assets/images/trimmer.png";
import img1 from "../assets/images/download.png";
import img2 from "../assets/images/images1.png";

 
const UserSuggest = () => {
  return (
    <div className=" w-full ">
      <div className=" sm:hidden  overflow-x-auto   overflow-y-hidden  whitespace-nowrap px-2  no-scrollbar ">
        <div className=" border   h-[60px]  w-[60px]    flex-col  rounded-xl inline-block sm:inline-flex m-1 justify-center items-center">
        <BiSolidOffer className="w-full h-full p-3 "/>
        </div>
        <div className=" border  h-[60px]  w-[60px]   flex-col  rounded-xl inline-block sm:inline-flex m-1 bg-amber-300 ">
          
            <PiDressBold className="w-full h-full p-3 "/>
         
        </div>
        
        <div className=" border  h-[60px]  w-[60px]   flex-col  rounded-xl inline-block sm:inline-flex m-1 bg-[#a78bfa]">
          
            <IoPhonePortraitOutline className="w-full h-full p-3 text-gray-200"/>
         
        </div>
        <div className=" border  h-[60px]  w-[60px]   flex-col  rounded-xl inline-block sm:inline-flex m-1 bg-green-400">
          
            <GiFruitBowl className="w-full h-full p-3"/>
         
        </div>
        <div className=" border  h-[60px]  w-[60px]   flex-col  rounded-xl inline-block sm:inline-flex m-1 bg-red-400">
          
            <AiTwotoneHome className="w-full h-full p-3"/>
         
        </div>
        <div className=" border  h-[60px]  w-[60px]   flex-col  rounded-xl inline-block sm:inline-flex m-1 bg-blue-300">
          
            <GiLipstick className="w-full h-full p-4"/>
         
        </div>
        
      </div>
      <div className=" w-full border h-[70px] flex items-center justify-center sm:justify-items-start ">
      
        <BiSolidCoupon className=" h-20 w-1/4 "/>
        <div className="text-center sm:flex gap-2">
        <p> New Deals – Up to 50% OFF! </p>
        <p> Use Coupen code : NEWYEAR25</p>
        </div>
      
      </div>
    </div>
  );
};

export default UserSuggest;
