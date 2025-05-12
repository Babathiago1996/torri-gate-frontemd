import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AdminPagination = ({ currentPage = 1, totalPages = 1 }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm">
      {/* Left Section: Arrows and Pages */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-md bg-[#f6f6f6] text-[#0c0c0c] disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <FaChevronLeft size={14} />
        </button>

        <button className="p-2 rounded-md text-black w-8 h-8 flex items-center justify-center border border-[#f6f6f6]">
          {currentPage}
        </button>

        <button className="p-2 rounded-md bg-[#f6f6f6] text-[#0c0c0c] w-8 h-8 flex items-center justify-center">
          ...
        </button>

        <button
          className="p-2 rounded-md bg-[#f6f6f6] text-[#0c0c0c] disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <FaChevronRight size={14} />
        </button>
      </div>

      {/* Right Section: Pages 1 of 1 */}
      <div className="flex items-center gap-4">
        <span className="text-[#595959] text-sm">Pages</span>
        <button className="p-2 rounded-md bg-black text-white w-8 h-8 flex items-center justify-center">
          {currentPage}
        </button>
        <span className="text-[#595959] text-sm">of</span>
        <button className="p-2 rounded-md bg-[#f6f6f6] text-[#0c0c0c] w-8 h-8 flex items-center justify-center">
          {totalPages}
        </button>
      </div>
    </div>
  );
};

export default AdminPagination;
