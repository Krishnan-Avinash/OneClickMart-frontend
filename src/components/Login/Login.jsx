import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/signup2.jpg";

const Login = () => {
  return (
    <div className="signup-main">
      <div className="signup-left">
        <img src={img1} alt="" />
      </div>
      <div className="signup-right">
        <h1>Login to OneClickMart</h1>
        <h3>Enter your details below</h3>
        <input type="number" placeholder="Enter mobile number" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <div className="signup-right-end">
          <h4>Don't have an account</h4>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
