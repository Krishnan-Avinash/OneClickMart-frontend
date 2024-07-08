import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

import axios from "axios";

import { addUser } from "../../userSlice/userSlice";

const MainCart = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { user: auth0User, isAuthenticated } = useAuth0();
  // const data2 = useSelector((state) => state.reducer.itemList);
  // console.log("OLD WAY:   ", data2);
  const userDataOut = useSelector((state) => state.userR.user);
  const data = userDataOut.newUser;
  // console.log("REdux userdata: ", data?.cart);

  // const [totalValue, setTotalValue] = useState(0);
  // useEffect(() => {
  //   if (data.itemList.length > 0) {
  //     let sum = 0;
  //     for (let i = 0; i < data.itemList.length; i++) {
  //       sum = sum + data.itemList[i].totalPrice;
  //     }
  //     console.log(sum);
  //     setTotalValue(sum);
  //   }
  // }, [data.itemList]);

  const checkBeforeProceed = () => {
    if (isAuthenticated) {
      navigate("/checkout");
    } else {
      toast({
        title: "Kindly login to proceed",
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
      // console.log(auth0User.email);
      setEmail(auth0User.email);
    }
  }, [auth0User, isAuthenticated]);
  useEffect(() => {
    if (emailState.length > 0) {
      fetchUser();
    }
  }, [emailState]);

  async function fetchProductDetails(id) {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/oneClickMart/admin/getParticularProduct",
        { params: { id } }
      );
      if (!response.data.success) {
        throw new Error(`Failed to fetch product details for ID ${id}`);
      }
      const product = response.data.user;
      const quantity = data.cart[id];
      return { ...product, quantity };
    } catch (error) {
      console.error(`Error fetching product details for ID ${id}:`, error);
      throw error;
    }
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const ids = Object.keys(data.cart);
        const productDetails = await Promise.all(
          ids.map((id) => fetchProductDetails(id))
        );
        setProducts(productDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("products ", products);
  const totalVal = () => {
    // let sum=0;
    // let sum=products.reduce(acc,curr)=>{
    //   return acc+curr;
    // }
    let sum = products.reduce((acc, curr) => {
      return Number(acc) + Number(curr.price) * Number(curr.quantity);
    }, 0);
    return sum;
  };
  return (
    <>
      <div className="cart-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <div>
              <Link to="/">Home</Link>
            </div>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="cart-main">
          {/* {ITEMS FROM CART} */}
          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Subtotal</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  products.map((item, index) => (
                    <Tr key={index}>
                      <Td>
                        <div>{item.name}</div>
                        <img
                          src={`http://localhost:8080/images/${item.mainImg}`}
                          alt="Err"
                          style={{ height: "5rem" }}
                        />
                      </Td>
                      <Td>{item.price}</Td>
                      <Td>{item.quantity}</Td>
                      <Td>{item.quantity * item.price}</Td>
                    </Tr>
                  ))}
              </Tbody>
              <Tfoot bg="#dcdcfc" mt="3rem">
                <Tr>
                  <Th>Total</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th style={{ fontSize: "1.1rem" }}>{totalVal()}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <div className="buttons">
            <Link to="/">
              <button className="return-to-shop">Return To Shop</button>
            </Link>
            <div onClick={checkBeforeProceed}>
              <button className="checkout">Proceed to Checkout</button>
            </div>
          </div>
          {/* <div className="maincart-left">
            <div className="main-cart-right">
              <Link to="/checkout">
                <button className="checkout">Proceed to Checkout</button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainCart;
