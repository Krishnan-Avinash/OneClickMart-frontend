import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="account-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">My Account</BreadcrumbLink>
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
            <h1 className="account-right-heading">Edit Your Profile</h1>
            <div className="account-right-top">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="account-right-mid">
              <input type="email" placeholder="Your Email ID" required />
              <input type="text" placeholder="Address" />
            </div>
            <h1>Password Changes</h1>
            <div className="account-right-bottom">
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
            </div>
            <div className="account-right-last">
              <button className="account-cancel">Cancel</button>
              <button className="account-save">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
