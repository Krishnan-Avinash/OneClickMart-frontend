import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../CartSice/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import { addUser } from "../../../../userSlice/userSlice";

const IndividualForthProduct = ({ image, link, name, price, desc, id }) => {
  const { user: auth0User, isAuthenticated } = useAuth0();

  // console.log("data name", name);
  // console.log("data price", price);
  // console.log("data desc", desc);
  // console.log("data id", id);
  const userDataOut = useSelector((state) => state.userR.user);
  const userData = userDataOut.newUser;
  // console.log("REdux userdata: ", userData);
  const toast = useToast();
  const dispatch = useDispatch();

  const addCart = () => {
    toast({
      title: "ITEM ADDED TO CART.",
      description: `${name} has been added to the cart`,
      status: "success",
      duration: 9000,
      isClosable: true,
      bg: "blue",
    });
    fetchUser();
    dispatch(
      addToCart({
        name,
        id,
        price,
        desc,
        totalPrice: price,
        img: image,
        userId: userData._id,
      })
    );
    fetchUser();
    console.log("totalQuantity");
  };
  //------GET UPDATED DATA-------
  const [emailState, setEmail] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://oneclickmart.onrender.com/api/oneClickMart/getUser/${emailState}`
      );
      dispatch(addUser({ newUser: response.data.user }));
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
    <div to="" className="product-image">
      <Link to={`/products/${id}`}>
        <img src={`https://oneclickmart.onrender.com/images/${image}`} alt="" />
      </Link>
      <Link to={`/products/${id}`}>
        <h1>{name}</h1>
      </Link>
      <h3>$ {price}</h3>
      <button onClick={addCart}>Add to Cart</button>
    </div>
  );
};

export default IndividualForthProduct;
