import React from "react";
import { RiResetLeftFill } from "react-icons/ri";

const SearchForm = () => {
  return (
    <div className=" max-w-[500px]  lg:max-w-[1030px] mx-auto w-full bg-[#fdfdfd] rounded-2xl p-3 lg:px-[14px] lg:py-[14px] mt-10">
      <form className="flex flex-col lg:flex-row items-end gap-4">
        <div className="w-full lg:[w-221px]">
          <label htmlFor="type" className="labelhero">
            Type
          </label>
          <select id="type" className="select w-full bg-[#f6f6f6]">
            <option value="flat">Flat</option>
            <option value="duplex">Duplex</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="w-full lg:[w-221px]">
          <label htmlFor="budget" className="labelhero">
            Budget
          </label>
          <input
            type="text"
            id="budget"
            placeholder="Budget"
            className="input w-full bg-[#f6f6f6]"
          />
        </div>
        <div className="w-full lg:[w-221px]">
          <label htmlFor="location" className="labelhero">
            Location
          </label>
          <input
            type="text"
            id="budget"
            placeholder="Location"
            className="input w-full bg-[#f6f6f6]"
          />
        </div>
        <button
          type="submit"
          className="btn bg-black text-white w-full lg:w-[203px] rounded-xl"
        >
          Search For Property
        </button>
      </form>
      <button className="flex items-center gap-2 mt-2.5 cursor-pointer">
        <RiResetLeftFill /> Reset Filters
      </button>
    </div>
  );
};

export default SearchForm;
