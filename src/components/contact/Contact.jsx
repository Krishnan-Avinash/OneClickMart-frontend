import React, { useEffect, useState, useRef } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useToast,
} from "@chakra-ui/react";
import call from "../../assets/callus2png.png";
import mail from "../../assets/mail2png.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

//---REDUX---
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../userSlice/userSlice";

const Contact = () => {
  //----AUTH0-----
  const { user: auth0User, isAuthenticated } = useAuth0();

  //-----TOAST-------
  const toast = useToast();
  //-----MESSAGE-----
  const msg = useRef("");

  //----REDUX---
  const dispatch = useDispatch();
  const userDataOut = useSelector((state) => state.userR.user);
  const userData = userDataOut.newUser;

  //------SUBMIT HANDLER------
  const submitHandler = async (e) => {
    e.preventDefault();

    if (isAuthenticated && msg.current.value.length > 0) {
      const response = await axios.patch(
        "http://localhost:8080/api/oneClickMart/sendMessage",
        {
          email: userData.email,
          message: msg.current.value,
        }
      );
      if (response.data.success) {
        toast({
          title: "Message sent",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Some Error occured",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      msg.current.value = "";
    } else if (isAuthenticated && msg.current.value.length < 1) {
      toast({
        title: "Message should not be empty",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (!isAuthenticated) {
      toast({
        title: "Kindly Login To Send Message",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
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
      <div className="about-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="about-main">
          <div className="about-left">
            <section className="about-left-top">
              <section className="about-left-top-one">
                <img src={call} alt="Err" />
                <h2>Call Us</h2>
              </section>
              <p className="removeCall">We are available 24/7</p>
              <p>Phone: +919191919191</p>
            </section>
            <section className="about-left-bottom">
              <div className="about-left-bottom-one">
                <img src={mail} alt="Err" />
                <h2>Write To US</h2>
              </div>
              <p className="removeMail">
                Fill out the form and we will contact you within 24 hours
              </p>
              <p>Email: avinash.krishnan1605@gmail.com</p>
            </section>
          </div>
          <form className="about-right" onSubmit={submitHandler}>
            <div className="about-right-top">
              <input
                type="text"
                placeholder="Your Name"
                readOnly
                value={
                  userData ? `${userData.firstName} ${userData.lastName}` : ""
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                readOnly
                value={userData?.email}
              />
              <input
                type="number"
                placeholder="Your Phone"
                readOnly
                value={userData?.mobile}
              />
            </div>
            <div className="about-right-mid">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                ref={msg}
                // onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              {/* <input type="text" placeholder="Your Message" required /> */}
            </div>
            <div className="about-right-bottom">
              <button type="send">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
