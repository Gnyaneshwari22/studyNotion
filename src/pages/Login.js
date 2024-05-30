import React from "react";
import Templete from "../component/Templete";
import LoginImage from "../asset/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Templete
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={LoginImage}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
