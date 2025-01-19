import React, { useState } from "react";
import {
  GoSearch,
  CgProfile,
  CiHeart,
  MdOutlineShoppingBag,
  IoMenu,
  IoClose
} from "../utils/icons";
import Search from "../pages/Search";

const Header = () => {
  const [search, setsearch] = useState(false)
  return (
    <header className="w-full ">
      <nav className="flex items-center border justify-between sm:px-11 px-7 sm:py-2">
        <h1 className="logoFont text-2xl">BAZARIO</h1>
        <ul className="hidden xl:flex text-gray-600 gap-4">
          <li className="cursor-pointer group">
            Fashion
            <hr className="border-t-2 border-gray-800" />
            <div className="dropdowm-menu group-hover:block hidden transition-[3s]  absolute z-50 border  w-96">
              <div className=" bg-white  divide-gray-100 text-[1rem] text-black">
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Man
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Women
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Kid
                </p>
              </div>
            </div>
          </li>
          <li className="cursor-pointer group">
            Electronics
            <hr className="border-t-2 border-red-500" />
            <div className="dropdowm-menu group-hover:block hidden transition-[3s]  absolute z-50 border  w-96">
              <div className=" bg-white  divide-gray-100 text-[1rem] text-black">
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  MobilePhone
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Laptop
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  HeadPhone
                </p>
              </div>
            </div>
          </li>
          <li className="cursor-pointer group">
            Groceries
            <hr className="border-t-2 border-green-600" />
            <div className="dropdowm-menu group-hover:block hidden transition-[3s]  absolute z-50 border  w-96">
              <div className=" bg-white  divide-gray-100 text-[1rem] text-black">
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Rice
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Oil
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  vegetables
                </p>
              </div>
            </div>
          </li>
          <li className="cursor-pointer group">
            Home & Essentials
            <hr className="border-t-2 border-teal-300" />
            <div className="dropdowm-menu group-hover:block hidden transition-[3s]  absolute z-50 border  w-96">
              <div className=" bg-white  divide-gray-100 text-[1rem] text-black">
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Washing Mechine
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Fridge
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Air conditioner
                </p>
              </div>
            </div>
          </li>
          <li className="cursor-pointer group">
            Health & Personal Care
            <hr className="border-t-2 border-purple-600" />
            <div className="dropdowm-menu group-hover:block hidden transition-[3s]  absolute z-50 border  w-96">
              <div className=" bg-white  divide-gray-100 text-[1rem] text-black">
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Hair care products
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Skin care products
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  Kids care
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="w-1/4">
          <Search />
        </div>

        <ul className="flex gap-5 mt-4">
          <li className="text-[1.6rem] sm:hidden">
            <GoSearch onClick={()=>setsearch(!search)}/>
            <div className="w-full ">
            <Search/>
            </div>
            
              {
                search ? <Search /> : ''
              }
          </li>
          <li className="text-[1.6rem] group">
            <CgProfile />
            <div className="dropdowm-menu group-hover:block hidden   absolute z-50  border ">
              <div className=" bg-white  divide-gray-100 text-[1rem] ">
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  My profile
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  My Orders
                </p>
                <p className="cursor-pointer border px-2 py-2 hover:bg-slate-300">
                  My Shop
                </p>
              </div>
            </div>
          </li>
          <li className="text-[1.6rem] ">
            <CiHeart className="text-red-600" />
            <p className="flex items-center justify-center  border border-gray-400 text-sm font-bold rounded-full h-4 w-4 translate-x-[15px] translate-y-[-36px] ">
              s
            </p>
          </li>
          <li className="text-[1.6rem]">
            <MdOutlineShoppingBag />
            <p className="flex items-center justify-center  border border-gray-400 text-sm font-bold rounded-full h-4 w-4 translate-x-[15px] translate-y-[-36px] ">
              s
            </p>
          </li>
          
        </ul>
      </nav>
      {
        search && 
        (<div className="w-full h-screen absolute bg-white  z-50 text-black">
          <Search/>

        </div>)

      }
    </header>
  );
};

export default Header;
