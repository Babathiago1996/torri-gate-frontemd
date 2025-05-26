import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppContext } from "../hooks/useAppContext";
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "react-toastify";

const phone_regex = /^\+?[1-9][0-9]{7,14}$/;

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Enter Your Full Name"),
  phoneNumber: yup
    .string()
    .matches(phone_regex, "Phone number must start with +234 and be valid"),
});

const Profile = () => {
  const { user, token , updateUser } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
    },
  });

  const [isEditable, setIsEditable] = useState(false);
  const [selectedImage, setSelectedImage] = useState(user.profilePicture);
  const[isSubmitting, setIsSubmitting]=useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const onSubmit = async(data) => {
    console.log("Saved Data:", data);
    setIsSubmitting(true)
    
    try {
      const response=await axiosInstance.patch("/auth/user",{...data},{headers:{Authorization:`Bearer ${token} `}})
      if (response.status===200){
        updateUser(response?.data?.user)
        setIsEditable(false)
        toast.success("profile updated successfully")
      }
    } catch (error) {
      console.log(error)
    }finally{
      setIsSubmitting(false)
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-[121px] pt-4">
        <h1 className="text-[22px] font-[500] capitalize">Profile</h1>
        <div className="flex items-center gap-2 text-[14px] capitalize text-[#666666]">
          <h4>Profile</h4>
          <span>.</span>
          <h3 className="text-black">Overview</h3>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full lg:w-[804px] p-4 bg-white mt-4 mb-8 shadow-lg rounded-lg"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="relative group">
            <img
              src={selectedImage}
              alt="profile"
              className="h-[140px] w-[142px] rounded-full object-cover border"
            />
            {isEditable && (
              <>
                <label
                  htmlFor="profileImage"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm rounded-full cursor-pointer opacity-0 group-hover:opacity-100"
                >
                  Change
                </label>
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </>
            )}
          </div>

          {!isEditable && (
            <button
              type="button"
              onClick={() => setIsEditable(true)}
              className="mt-4 lg:mt-0 border border-[#d9d9d9] text-black rounded-lg px-4 py-2 cursor-pointer"
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="my-5">
          <label className="block text-black text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder={user.fullName}
            defaultValue={user.fullName}
            {...register("fullName")}
            readOnly={!isEditable}
            className={`w-full h-[45px] px-3 rounded-lg bg-[#fbfbfb] text-black outline-none ${
              errors.fullName
                ? "border border-red-500"
                : "border border-[#f6f6f6]"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="my-5">
          <label className="block text-black text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder={user.email}
            value={user.email}
            readOnly
            className="w-full h-[45px] px-3 rounded-lg bg-[#fbfbfb] text-black border border-[#f6f6f6] outline-none"
          />
        </div>

        <div className="my-5">
          <label className="block text-black text-sm mb-1">
            Phone Number 1
          </label>
          <input
            type="tel"
            placeholder={user.phoneNumber}
            defaultValue={user.phoneNumber}
            {...register("phoneNumber")}
            readOnly={!isEditable}
            className={`w-full h-[45px] px-3 rounded-lg bg-[#fbfbfb] text-black outline-none ${
              errors.phoneNumber
                ? "border border-red-500"
                : "border border-[#f6f6f6]"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {isEditable && (
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white py-2 px-4 rounded cursor-pointer"
            >
              {
              isSubmitting?<span className="loading loading-spinner loading-md "></span>:"Save Changes"
              }
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditable(false);
                reset();
                setSelectedImage(user.profilePicture);
              }}
              className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile;
