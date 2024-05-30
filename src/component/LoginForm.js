import React, { useState } from "react";

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const changeHandler = (event) => {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log("Login details are ", formData);
    toast.success("Logged In Sucessfully");
    navigate("/");
  }
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <lable className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
            placeholder="Enter your Email ID"
            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
          />
        </lable>
        <lable className="relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            onChange={changeHandler}
            name="password"
            value={formData.password}
            placeholder="Enter your  Password"
            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
          />
          <span
            className="absolute right-3 top-[53px] cursor-pointer"
            onClick={() => setShowPassword((pre) => !pre)}
          >
            {showPassword ? (
              <AiOutlineEye fontSize={30} fill="red" />
            ) : (
              <AiOutlineEyeInvisible fontSize={30} fill="red" />
            )}
          </span>
          <Link to="#">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </lable>

        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
