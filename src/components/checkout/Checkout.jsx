import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Checkout = () => {
  const testCouponCodes = [
    "ABCD-EFGH-IJKL",
    "QWER-TYUI-ASDF",
    "ZXCV-FGDH-MGJF",
    "PIOU-HJGK-VBCN",
    "ZRXE-QVTH-DEGF",
    "FWTY-VDJE-XTIO",
    "JTXW-GHQS-TVYR",
    "NFAG-TWCY-UIVE",
    "TEOX-MEGV-OQZU",
    "MFHQ-RLLA-TWOO",
  ];
  const [couponValid, setCouponValid] = useState(false);
  const data = useSelector((state) => state.reducer);
  const [number, setNumber] = useState("");

  const [totalValue, setTotalValue] = useState(0);
  useEffect(() => {
    if (data.itemList.length > 0) {
      let sum = 0;
      for (let i = 0; i < data.itemList.length; i++) {
        sum = sum + data.itemList[i].totalPrice;
      }
      console.log(sum);
      setTotalValue(sum);
    }
  }, [data.itemList]);

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

  function checkValidity() {
    let c = testCouponCodes.find((item) => item === couponCode);
    if (c) {
      setCouponValid(true);
    } else {
      setCouponValid(false);
    }
  }
  return (
    <>
      <div className="checkout-container">
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink className="breadcrumb-acc">
              <Link to="/myaccount">My Account</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/cart">Cart</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link>CheckOut</Link>
            </BreadcrumbLink>
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
            <input
              type="number"
              placeholder="Phone Number"
              required
              onChange={(e) => setNumber(e.target.value.slice(0, 10))}
              value={number}
            />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="checkout-right">
            {/* {DATA FROM CART} */}
            <div className="maincart-left">
              <div className="main-cart-right">
                <h3>Cart Total</h3>
                <div className="subtotal">
                  <p>Subtotal</p>
                  <p
                    style={{
                      color: "#5858FF",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                    }}
                  >
                    {totalValue}
                  </p>
                  {/* <p>PRICE FROM STORE</p> */}
                </div>
                <div className="shipping">
                  <p>Shipping</p>
                  <p
                    style={{
                      color: "#5858FF",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                    }}
                  >
                    0
                  </p>
                </div>
                {couponValid && totalValue >= 700 && (
                  <div className="shipping">
                    <p>Coupon Discount</p>
                    <p
                      style={{
                        color: "#5858FF",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                      }}
                    >
                      - 500
                    </p>
                  </div>
                )}
                <div className="total">
                  <p>Total</p>
                  <p
                    style={{
                      color: "#5858FF",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                    }}
                  >
                    {couponValid && totalValue >= 700
                      ? totalValue - 500
                      : totalValue}
                  </p>
                  {/* <p>PRICE FROM STORE</p> */}
                </div>
              </div>
            </div>
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
                  } else if (couponCode.length == 14 && totalValue < 700) {
                    toast({
                      title: "Oops! Your cart total is below $700.",
                      description:
                        "Add a few more items to your cart to enjoy the discount!",
                      status: "error",
                      duration: 6000,
                      isClosable: true,
                    });
                  }
                  checkValidity();
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
