import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineBathtub } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen } from "react-icons/tb";
import { FaEllipsis } from "react-icons/fa6";

const AdminPropertyCard = ({
  _id,
  image,
  title,
  kitchen,
  bedrooms,
  bathrooms,
  tag,
  price,
  address,
  status,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    setShowDropdown(false);
    //trigger api call here
  };

  const statusStyle =
    currentStatus === "rented"
      ? "bg-[#f6f6f6] text-[#0c0c0c]"
      : "bg-[#EEFCEC] text-[#24D50B]";

  return (
    <div className="bg-white rounded-lg flex items-center justify-between p-2.5">
      <div className="flex items-center gap-2 relative">
        <img
          src={image}
          alt={title}
          className="w-[129px] h-[102px] md:w-[80px] md:h-[74.55px] object-cover rounded-md"
        />
        <p
          className={`capitalize px-2.5 py-1 text-[15px] md:hidden absolute bottom-6 left-2 rounded-lg ${statusStyle}`}
        >
          {currentStatus}
        </p>

        <div className="max-w-[355px]">
          <h1 className="font-medium text-[15px] text-[#0c0c0c]">{title}</h1>
          <p className="flex items-center gap-2 font-medium text-[#666] text-sm mb-2">
            <FaMapMarkerAlt className="hidden lg:block" />
            {address}
          </p>
          <div className="flex items-center gap-[22px] text-[#363636] text-sm flex-wrap">
            <p className="flex items-center gap-2">
              <LiaBedSolid /> {bedrooms} Beds
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineBathtub /> {bathrooms} Baths
            </p>
            <p className="flex items-center gap-2">
              <TbToolsKitchen /> {kitchen} Kitchen
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[22px] items-end relative">
        <button onClick={toggleDropdown} className="cursor-pointer">
          <FaEllipsis />
        </button>

        {showDropdown && (
          <div className="absolute top-8 right-0 bg-white border rounded-md shadow-md z-10">
            <button
              onClick={() => handleStatusChange("rented")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Rented
            </button>
            <button
              onClick={() => handleStatusChange("available")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Available
            </button>
          </div>
        )}

        <p
          className={`capitalize px-2.5 py-1 text-[15px] hidden md:block rounded-lg ${statusStyle}`}
        >
          {currentStatus}
        </p>
      </div>
    </div>
  );
};

export default AdminPropertyCard;
