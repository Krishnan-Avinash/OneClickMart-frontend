import React from "react";
import em from "../../assets/email logo.avif";
import { useAuth0 } from "@auth0/auth0-react";

const VerifyEmail = () => {
  const { user } = useAuth0();
  return (
    <div>
      <div className="verify-email-container">
        <img src={em} alt="" />
        <h1>Verify your email address</h1>
        <h5>
          We have sent a verification link to{" "}
          <b style={{ color: "#5858ff" }}>{user.email}</b>{" "}
        </h5>
        <h5>Click on the link to complete the verification process.</h5>
        <h5>You might need to check your spam folder.</h5>
      </div>
    </div>
  );
};

export default VerifyEmail;
