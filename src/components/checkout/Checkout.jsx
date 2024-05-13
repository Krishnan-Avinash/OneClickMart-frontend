import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const Checkout = () => {
  const [couponCode, setCouponCode] = useState("");
  const toast = useToast();

  const handleCouponCodeChange = (event) => {
    let input = event.target.value.toUpperCase();
    input = input.replace(/[^A-Z]/g, "");
    let formattedInput = "";
    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += "-";
      }
      formattedInput += input[i];
    }
    formattedInput = formattedInput.slice(0, 14);

    setCouponCode(formattedInput);
  };
  return (
    <>
      <div className="checkout-container">
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="breadcrumb-acc">
              My Account
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">CheckOut</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="checkout-main">
          <div className="checkout-left">
            <h1>Billing Details</h1>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="State" required />
            <input type="text" placeholder="Street Address" required />
            <input
              type="text"
              placeholder="Apartment, floor, etc. (Optional)"
            />
            <input type="text" placeholder="Town/City" required />
            <input type="number" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="checkout-right">
            {/* {DATA FROM CART} */}
            <div className="coupons">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={handleCouponCodeChange}
              />
              <button
                onClick={() => {
                  if (couponCode.length < 14) {
                    toast({
                      title:
                        "Please enter a valid coupon code of 14 characters.",
                      status: "error",
                      duration: 6000,
                      isClosable: true,
                    });
                  }
                }}
              >
                Apply Coupon
              </button>
            </div>
            <div className="placeOrder">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
