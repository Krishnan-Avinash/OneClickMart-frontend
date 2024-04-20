import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import img1 from "../../assets/story2.jpg";
import Sixth from "../Main Body/Sixth Section/Sixth";
import Footer from "../Footer/Footer";

const Story = () => {
  return (
    <>
      <div className="story-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Story</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="story-main">
          <div className="story-left">
            <h1>My Story</h1>
            <p>
              Hi, I'm Palaghat Murali Krishnan Avinash. A passionate Front-end
              React Developer. I have built this platform and put much efforts.
              Hope you guys like it.
            </p>
            <div className="secondP">
              <h6>The Tech Stack used is</h6>
              <div>
                <p>ReactJS</p>
                <p>Chakra UI</p>
                <p>NodeJS + ExpressJS</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <div className="story-right">
            <img src={img1} alt="Error" />
          </div>
        </div>
      </div>
      <Sixth />
      <Footer />
    </>
  );
};

export default Story;
