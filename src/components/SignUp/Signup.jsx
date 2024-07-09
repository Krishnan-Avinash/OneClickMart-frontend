import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/signup2.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import VerifyEmail from "../verifyEmail/VerifyEmail";

//Axios
import axios from "axios";

//------REDUX-----
//------REDUX-----
//------REDUX-----
//------REDUX-----
import { useDispatch } from "react-redux";
import { addUser } from "../../userSlice/userSlice";
//------REDUX-----
//------REDUX-----
//------REDUX-----
//------REDUX-----

const Signup = () => {
  //------REDUX------
  const dispatch = useDispatch();

  //------useNavigate------
  const navigate = useNavigate();

  //----DATA STATES---
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAddress] = useState("");

  //----FETCH DATA----
  const [data, setData] = useState({});
  const [emailState, setEmail] = useState("");

  //------AUTH0----
  const { isAuthenticated, user, isLoading, loginWithPopup } = useAuth0();

  //----FETCH DATA----
  const fetchUser = async () => {
    try {
      // console.log("Email: ", emailState);
      const response = await axios.get(
        `https://oneclickmart.onrender.com/api/oneClickMart/getUser/${emailState}`
      );
      setData(response.data.user);
      //----REDUX------
      //----REDUX------
      //----REDUX------
      dispatch(addUser({ newUser: response.data.user }));
      //----REDUX------
      //----REDUX------
      //----REDUX------
      // localStorage.setItem(
      //   "userLocalStorage",
      //   JSON.stringify(response.data.user)
      // );
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  // console.log("authenticated: ", isAuthenticated);

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user, isAuthenticated]);
  useEffect(() => {
    if (emailState.length > 0) {
      fetchUser();
    }
  }, [emailState]);
  if (isLoading) {
    return <h1>LOADING....</h1>;
  }

  //----------------------------------
  //----------------------------------
  //----------------------------------
  const obj = {
    firstName: fName,
    lastName: lName,
    mobile: mob,
    email: user?.email,
    address: address,
  };
  const submitHandler = async () => {
    const response = await axios.patch(
      "https://oneclickmart.onrender.com/api/oneClickMart/updateUserData",
      obj
    );
    navigate("/");
  };
  if (isAuthenticated && data.dataSet != true) {
    return (
      <div className="signup-main">
        <div className="signup-left">
          <img src={img1} alt="" />
        </div>
        <form className="signup-right" onSubmit={submitHandler}>
          <h1>Enter few Details</h1>
          <h3>Enter your details below</h3>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email address"
            value={user.email}
            readOnly
          />
          <input
            type="number"
            placeholder="Enter mobile number"
            onChange={(e) => setMob(e.target.value)}
          />
          <input
            type="test"
            placeholder="Enter your Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  } else if (isAuthenticated && !user.email_verified) {
    return (
      <>
        <VerifyEmail />
      </>
    );
  } else if (isAuthenticated == false) {
    return (
      <>
        <h1
          style={{
            fontSize: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700",
          }}
        >
          Kindly{" "}
          <span
            style={{ color: "#5858ff", cursor: "pointer" }}
            onClick={loginWithPopup}
          >
            &nbsp;Login&nbsp;
          </span>{" "}
          To Continue
        </h1>
      </>
    );
  } else {
    navigate(window.location.origin);
  }
};

export default Signup;
