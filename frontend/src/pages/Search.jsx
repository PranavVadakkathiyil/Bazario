import React, { useState } from "react";
import { GoSearch, IoCloseSharp } from "../utils/icons";
const img =
  "https://img.freepik.com/free-photo/man-pointing-his-left_1149-1062.jpg?ga=GA1.1.18459205.1736571984&semt=ais_hybrid";

const Search = () => {
  const [value, setvalue] = useState("");
  const [data, setdata] = useState([]);
  const onChangeHandler = async (e) => {
    e.preventDefault();
    setvalue(e.target.value);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setdata(data);
  };
  
  return (
    <div>
      <div className="hidden lg:flex items-center justify-between border px-3  rounded-full hover:ring-1 ring-black bg-slate-50">
        <input
          type="text"
          className="  outline-none w-10/12 py-1 px-1 bg-slate-50 cursor-pointer"
          onChange={onChangeHandler}
          value={value}
        />
        <button
          aria-label="Search"
          className=" p-2 text-[1.3rem] rounded-full translate-x-3 text-white bg-black"
        >
          <GoSearch />
        </button>
      </div>
      <div className=" outline-none  absolute mt-1 w-96  z-50  bg-white divide-y divide-gray-100 rounded-md shadow-lg  ring-black ring-opacity-5 ">
        { value &&
          data.filter(item=>item.title.startsWith(value) && item.title !== value).slice(0,5).map((item,index)=>(
            <div key={item.id} onClick={(e)=>setvalue(item.title)} className="cursor-pointer  bg-slate-300 p-3 m-1">
                {item.title}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
<div className="w-full h-screen">
  <div className="w-full flex justify-center gap-3 px-3 py-2 ">
    <input
      type="text"
      id="search"
      name="search"
      placeholder="Search"
      className="w-[70%] border px-4 py-2 outline-none"
    />
    <button className="border p-3">
      <GoSearch className="text-2xl" />
    </button>
    <button className="border p-3">
      <IoCloseSharp className="text-2xl" />
    </button>
  </div>
  <div className="w-full grid sm:grid-cols-2 grid-cols-1 p-3 gap-1">
    <div className="border  flex">
      <div className="col-span-1 border sm:h-[200px]  h-[100px] w-[30%]">
        <img src={img} alt="" className="  h-full w-full" />
      </div>
      <div className="w-[70%] flex flex-col justify-center px-3">
        <p>Name</p>
        <p>price</p>
        <p>describe</p>
      </div>
    </div>
    <div className="border  flex">
      <div className="col-span-1 border sm:h-[200px]  h-[100px] w-[30%]">
        <img src={img} alt="" className="  h-full w-full" />
      </div>
      <div className="w-[70%] flex flex-col justify-center px-3">
        <p>Name</p>
        <p>price</p>
        <p>describe</p>
      </div>
    </div>
    <div className="border  flex">
      <div className="col-span-1 border sm:h-[200px]  h-[100px] w-[30%]">
        <img src={img} alt="" className="  h-full w-full" />
      </div>
      <div className="w-[70%] flex flex-col justify-center px-3">
        <p>Name</p>
        <p>price</p>
        <p>describe</p>
      </div>
    </div>
  </div>
</div>;
