import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import call from "../../assets/callus2png.png";
import mail from "../../assets/mail2png.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
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
          <div className="about-right">
            <div className="about-right-top">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="number" placeholder="Your Phone" required />
            </div>
            <div className="about-right-mid">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
              ></textarea>
              {/* <input type="text" placeholder="Your Message" required /> */}
            </div>
            <div className="about-right-bottom">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
