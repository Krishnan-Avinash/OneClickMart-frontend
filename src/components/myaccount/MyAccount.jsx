import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useToast,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

//------AXIOS-----
import axios from "axios";

//----REDUX-----
//----REDUX-----
//----REDUX-----
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../userSlice/userSlice";

import { useAuth0 } from "@auth0/auth0-react";
//----REDUX-----
//----REDUX-----
//----REDUX-----

const Contact = () => {
  const toast = useToast();
  //----AUTH0----
  const { user: auth0User, isAuthenticated } = useAuth0();

  //----REDUX-----
  //----REDUX-----
  //----REDUX-----
  const dispatch = useDispatch();

  const userDataOut = useSelector((state) => state.userR.user);
  const userData = userDataOut.newUser;

  //----REDUX-----
  //----REDUX-----
  //----REDUX-----

  //------DATA TO SEND AT BACKEND-------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  //-----CANCEL BUTTON------
  const clear = () => {
    setFirstName("");
    setLastName("");
    setMobile("");
    setAddress("");
  };

  //------SEND DATA TO DB FOR ACCOUNT DETAILS UPDATE------
  const submitHandler = async (e) => {
    //----------------------------------------
    //----------------------------------------
    e.preventDefault();
    //----------------------------------------
    //----------------------------------------
    const obj = {
      email: userData.email,
      firstName,
      lastName,
      mobile,
      address,
    };
    const response = await axios.patch(
      "http://localhost:8080/api/oneClickMart/updateUserData",
      obj
    );
    if (response.status == 204) {
      toast({
        title: "Data Updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      fetchUser();
      setFirstName("");
      setLastName("");
      setMobile("");
      setAddress("");
    } else {
      toast({
        title: "Couldn't Update Data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (!isAuthenticated) {
    toast({
      title: "Kindly login to access this page",
      status: "error",
      duration: 10000,
      isClosable: false,
    });
  }

  //------GET UPDATED DATA-------
  const [emailState, setEmail] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/oneClickMart/getUser/${emailState}`
      );
      // setData(response.data.user);
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
  useEffect(() => {
    if (auth0User && auth0User.email) {
      setEmail(auth0User.email);
    }
  }, [auth0User, isAuthenticated]);
  useEffect(() => {
    if (emailState.length > 0) {
      fetchUser();
    }
  }, [emailState]);
  return (
    <>
      <div className="account-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <div>
              <Link to="/">Home</Link>
            </div>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <div>My Account</div>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="account-main">
          <div className="account-left">
            <section className="account-left-top">
              <h1 className="account-left-heading">My Profile</h1>
              <p>Address Book</p>
              <p>My Payment Options</p>
            </section>
            <section className="account-left-bottom">
              <h1>My Orders</h1>
              <p>My Returns</p>
              <p>My Cancellations</p>
            </section>
          </div>
          <div className="account-right">
            <h1 className="account-right-heading">Old Details</h1>
            <div className="account-right-top">
              <input
                type="text"
                placeholder="First Name"
                value={userData?.firstName}
                readOnly
              />
              <input
                type="text"
                placeholder="Last Name"
                value={userData?.lastName}
                readOnly
              />
            </div>
            <div className="account-right-mid">
              <input
                type="email"
                placeholder="Your Email ID"
                value={userData?.email}
                readOnly
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={userData?.mobile}
                readOnly
              />
            </div>
            <div className="account-right-mid">
              <input
                type="text"
                style={{ width: "94%" }}
                placeholder="Address"
                value={userData?.address}
                readOnly
              />
            </div>
            <h1>New Details</h1>
            {/* <div className="account-right-bottom">
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
            </div> */}
            <form
              onSubmit={submitHandler}
              style={{ width: "100%" }}
              className="account-right"
            >
              <div className="account-right-top">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </div>
              <div className="account-right-mid">
                <input
                  type="email"
                  placeholder="Your Email ID"
                  value={userData?.email}
                  readOnly
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  required
                />
              </div>
              <div className="account-right-mid">
                <input
                  type="text"
                  style={{ width: "94%" }}
                  placeholder="Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </div>
              {isAuthenticated && (
                <div className="account-right-last">
                  <button className="account-cancel" onClick={clear}>
                    Cancel
                  </button>
                  <button className="account-save" type="submit">
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
