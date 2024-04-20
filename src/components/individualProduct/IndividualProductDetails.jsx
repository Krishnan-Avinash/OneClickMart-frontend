import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import delivery from "../../assets/delivery.png";
import returnImg from "../../assets/return2.jpg";
import Footer from "../Footer/Footer";

const IndividualProductDetails = () => {
  return (
    <>
      <div className="individual-product-details-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Product</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Name of Product</BreadcrumbLink>{" "}
            {/* TO BE CHANGED ACCORDING TO CLICK */}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="individual-product-details-main">
          {/* {ITEMS FROM CART} */}
          <div className="individual-product-details-left">
            <div className="individual-product-left-left">
              <img src="" alt="err" />
              <img src="" alt="err" />
              <img src="" alt="err" />
            </div>
            <div className="individual-product-left-right">
              <img src="" alt="ERR" />
            </div>
          </div>
          <div className="individual-product-details-right">
            <h1>ITEM NAME</h1>
            <h2>ITEM PRICE</h2>
            <p>ITEM DESCRIPTION</p>
            <div className="buttons">
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
            <div className="individual-product-delivery">
              <div className="individual-product-delivery-top">
                <img src={delivery} alt="Err" />
                <div className="individualproduct-delivery-top-right">
                  <h3>Free Delivery</h3>
                  <h5>Enter your postal code for Delivery Availability</h5>
                </div>
              </div>
              <div className="individual-product-delivery-bottom">
                <img src={returnImg} alt="Err" />
                <div className="individualproduct-delivery-bottom-right">
                  <h3>Return Delivery</h3>
                  <h5>Free 7 Days Delivery Returns </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualProductDetails;
