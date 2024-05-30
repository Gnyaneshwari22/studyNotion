import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setshowCnfPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [formData, setformData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.cnfPassword) {
      toast.error("Password Do not match");
      return;
    }

    toast.success("Account Created Sucessfully");
    let accountData = {
      ...formData,
    };
    let finalData = {
      ...accountData,
      accountType,
    };
    setIsLoggedIn(true);
    console.log("Account Data is...", finalData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 my-6 gap-x-1 rounded-full max-w-max ">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Instructor")}
        >
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        // className="flex flex-col w-full h-full gap-y-4 mt-6"
      >
        {/* frst &last names */}
        <div className="flex gap-4 mt-[10px]">
          <lable className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-[20px]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              onChange={changeHandler}
              value={formData.fname}
              name="fname"
              placeholder="enter Your Frst Name"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
          </lable>
          <lable>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-[20px]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              onChange={changeHandler}
              value={formData.lname}
              name="lname"
              placeholder="enter Your last Name"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
          </lable>
        </div>
        {/* email adress */}
        <lable className="mt-[20px]">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-[20px]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
            placeholder="enter Your Email"
            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
          />
        </lable>
        {/*   cnf & password*/}
        <div className="flex gap-x-4 mt-[20px]">
          <lable className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              onChange={changeHandler}
              name="password"
              value={formData.password}
              placeholder="Enter Your Password"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
            <span
              className="absolute right-3 top-[50px] cursor-pointer"
              onClick={() => setShowPassword((pre) => !pre)}
            >
              {showPassword ? (
                <AiOutlineEye fontSize={30} fill="red" />
              ) : (
                <AiOutlineEyeInvisible fontSize={30} fill="red" />
              )}
            </span>
          </lable>
          <lable className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showCnfPassword ? "text" : "password"}
              onChange={changeHandler}
              name="cnfPassword"
              placeholder="ConfirmYour Password"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
            <span
              className="absolute right-3 top-[50px] cursor-pointer"
              onClick={() => setshowCnfPassword((pre) => !pre)}
            >
              {showCnfPassword ? (
                <AiOutlineEye fontSize={30} fill="red" />
              ) : (
                <AiOutlineEyeInvisible fontSize={30} fill="red" />
              )}
            </span>
          </lable>
        </div>

        <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
