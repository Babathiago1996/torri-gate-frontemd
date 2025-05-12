import React from "react";
import { properties } from "../data";
import { IoTrendingUp } from "react-icons/io5";
import AdminPropertyCard from "../components/AdminPropertyCard";
import { Link } from "react-router-dom";
import { MdOutlineAddHome } from "react-icons/md";
import AdminPagination from "../components/AdminPagination";
const AdminProperty = () => {
  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <div>
          <h1 className="w-full font-[500] font-[mona Sans] text-[22px] text-black capitalize mb-2">
            Dashboard
          </h1>
          <div className="flex items-center  gap-2 capitalize text-[14px]">
            <h4 className="text-[#666666]">dashboard</h4>
            <h3 className="text-[#666666]">.</h3>
            <h4 className="text-black ">overview</h4>
          </div>
        </div>
        <div>
          <Link
            to="/dashboard/create"
            className="flex gap-3 items-center rounded-lg bg-black text-white px-3 py-4"
          >
            <span className="hidden md:block text-[16px] font-semibold">
              Create New Property
            </span>
            <MdOutlineAddHome size={25} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3.5 lg:flex-row items-center mt-6 mb-10">
        <div className="w-full lg:w-[274.25px] ">
          <h2 className="pl-3.5 mb-3 font-medium text-[16px] text-[#666]">
            Total Property
          </h2>
          <div className="w-full bg-white rounded-lg flex items-center h-[80px] pl-3.5">
            <h1 className="font-semibold text-2xl">05</h1>
          </div>
        </div>
        <div className="w-full lg:w-[274.25px] ">
          <h2 className="pl-3.5 mb-3 font-medium text-[16px] text-[#666]">
            Available Property
          </h2>
          <div className="w-full bg-white rounded-lg flex items-center h-[80px] pl-3.5">
            <h1 className="font-semibold text-2xl">03</h1>
          </div>
        </div>
        <div className="w-full lg:w-[274.25px] ">
          <h2 className="pl-3.5 mb-3 font-medium text-[16px] text-[#666]">
            Rented Property
          </h2>
          <div className="w-full bg-white rounded-lg flex items-center h-[80px] pl-3.5">
            <h1 className="font-semibold text-2xl">02</h1>
          </div>
        </div>
        <div className="w-full lg:w-[274.25px]">
          <h2 className="pl-3.5 mb-3 font-medium text-[16px] text-[#666]">
            Profile View
          </h2>
          <div className="w-full bg-white rounded-lg flex items-center h-[80px] px-3.5 justify-between ">
            <h1 className="font-semibold text-2xl">14</h1>
            <div className="flex items-center gap-2">
              <p className="bg-[#EEFCEC] rounded-md text-[#24D50B] w-20 p-1 flex items-center gap-2">
                <IoTrendingUp color="#24D50B" />
                +30%
              </p>
              <p className="text-[#666666] text-[16px]">vs last month </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {properties.slice(0, 5).map((property) => {
          return <AdminPropertyCard key={property._id} {...property} />;
        })}
      </div>
      <div>
        <AdminPagination />
      </div>
    </div>
  );
};

export default AdminProperty;
