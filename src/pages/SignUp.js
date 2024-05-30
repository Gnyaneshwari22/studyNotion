import React from "react";
import Templete from "../component/Templete";
import signupimage from "../asset/signup.png";

function SignUp({ setIsLoggedIn }) {
  return (
    <div>
      <Templete
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formType="signup"
        image={signupimage}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default SignUp;
