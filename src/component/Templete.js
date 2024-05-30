import React from "react";
import backImage from "../asset/frame.png";
import SignupForm from "../component/SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Templete({ title, desc1, desc2, formType, image, setIsLoggedIn }) {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
      <div className="w-11/12 max-w-[490px]">
        <h1 className=" text-richblack-5 fon text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br></br>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2 ">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-white text-xl">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px]bg-richblack-800 text-richblack-100 py-[10px] px-[15px] rounded-[8px] border border-richblack-700 gap-x-5 ">
          <FcGoogle href="https://mail.google.com/" />
          <p>Sign In With Google</p>
        </button>
      </div>

      {/* image div */}
      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={backImage}
          alt="bacimage"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="frontImage"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
}

export default Templete;
