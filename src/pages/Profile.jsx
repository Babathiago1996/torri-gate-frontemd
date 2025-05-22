import React from "react";
import { TbCircleDotFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
const phone_regex = /^\+234[789][01]\d{8}$/;

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Enter Your Full Name"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  tel1: yup
    .string()
    .matches(phone_regex, "phone number must be +234 and valid"),
  tel2: yup
    .string()
    .matches(phone_regex, "phone number must be +234 and valid "),
});

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [isEditable, setIsEditable] = useState(false);
  const {user}=useAppContext()

  const handleClick = () => {
    setIsEditable(true);
  };

  const login = (data) => {
    console.log("Saved Data", data);
    setIsEditable(false);
  };

  return (
    <div>
      <div className=" ">
        <div className="max-w-[121px] pt-4">
          <h1 className="w-full font-[500] font-[mona Sans] text-[22px] text-black capitalize">
            profile
          </h1>
          <div className="flex items-center  gap-2 capitalize text-[14px]">
            <h4 className="text-[#666666]">profile</h4>
            <h3 className="text-[#666666]">.</h3>
            <h3 className="text-black">overview</h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(login)}
          className="mx-auto xl:w-[804px] w-full p-3 bg-white mt-3 mb-7 shadow-lg rounded-lg"
        >
          <div className="lg:flex-row flex justify-between flex-col ">
            <img
              src={user.profilePicture}
              alt="picture"
              className="h-[140px] w-[142px] rounded-full object-cover"
            />
            <div className="flex flex-col justify-between  ">
              <h1></h1>
              {!isEditable && (
                <button
                  type="button"
                  onClick={handleClick}
                  className="text-black border cursor-pointer border-[#d9d9d9] rounded-lg w-[112px] h-[44px] mt-3 lg:mt-0"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          <div className="my-[20px] mx-3 ">
            <label htmlFor="Fullname" className="block text-black text-[14px]">
              Fullname
            </label>
            <input
              type="text"
              placeholder={user.fullName}
              className={`bg-[#fbfbfb] w-full h-[45px] text-black px-2 outline-0  ${
                errors.fullName ? "border border-red-500" : ""
              }`}
              {...register("fullName")}
              readOnly={!isEditable}
            />
            <p className="text-red-500">
              {errors.fullName && errors.fullName.message}
            </p>
          </div>

          <div className="my-[20px] mx-3">
            <label htmlFor="email" className="block text-black text-[14px]">
              Email
            </label>
            <input
              type="email"
              placeholder={user.email}
              className={`bg-[#fbfbfb] w-full h-[45px]  text-black px-2 outline-0 ${
                errors.email ? "border border-red-500" : ""
              }`}
              {...register("email")}
              readOnly={!isEditable}
            />
            <p className="text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>

          <div className="my-[20px] mx-3">
            <label htmlFor="phone" className="block text-black text-[14px]">
              Phone Number 1
            </label>
            <input
              type="tel"
              placeholder={user.phoneNumber}
              className={`bg-[#fbfbfb] w-full h-[45px]  text-black px-2 outline-0 ${
                errors.tel1 ? "border border-red-500" : ""
              }`}
              {...register("tel1")}
              readOnly={!isEditable}
            />
            <p className="text-red-500">{errors.tel1 && errors.tel1.message}</p>
          </div>

          {/* <div className="my-[20px] mx-3">
            <label htmlFor="phone2" className="block text-black text-[14px]">
              Phone Number2
            </label>
            <input
              type="tel"
              placeholder="--------"
              className={`bg-[#fbfbfb] w-full h-[45px]  text-black px-2 outline-0 ${
                errors.tel2 ? "border border-red-500" : ""
              }`}
              {...register("tel2")}
              readOnly={!isEditable}
            />
            {errors.tel2 && (
              <p className="text-red-500">{errors.tel2.message}</p>
            )}
          </div> */}
          {isEditable && (
            <div className="flex-gap-2 items-center">
              <button
                type="submit"
                className="mt-4 bg-black text-white py-2 px-4 rounded"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => {setIsEditable(false); reset()}}
                className="mt-4 bg-black text-white py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
