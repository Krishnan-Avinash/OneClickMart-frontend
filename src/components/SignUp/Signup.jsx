import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/signup2.jpg";

const Signup = () => {
  return (
    <div className="signup-main">
      <div className="signup-left">
        <img src={img1} alt="" />
      </div>
      <div className="signup-right">
        <h1>Create an account</h1>
        <h3>Enter your details below</h3>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Enter email address" />
        <input type="number" placeholder="Enter mobile number" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
        <div className="signup-right-end">
          <h4>Already have account?</h4>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
