import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useToast } from "@chakra-ui/react";

import { addToCart } from "../../../../CartSice/cartSlice";

const Card = ({ image, link, name, price, blur, desc, id }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addToCart({ name, id, price, desc, totalPrice: price }));
    console.log("totalQuantity");
    toast({
      title: "ITEM ADDED TO CART.",
      description: `${name} has been added to the cart`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Link
      to=""
      className={`whole card ${blur ? "blurred" : ""}`}
      style={{ filter: blur ? "blur(3px)" : "none" }}
    >
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h3>$ {price}</h3>
      {!blur && <button onClick={addCart}>Add to Cart</button>}
    </Link>
  );
};

export default Card;
