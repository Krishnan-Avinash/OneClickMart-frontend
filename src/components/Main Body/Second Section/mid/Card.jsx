import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useToast } from "@chakra-ui/react";

import { addToCart } from "../../../../CartSice/cartSlice";

const Card = ({ image, link, name, price, blur, desc, id }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(
      addToCart({ name, id, price, desc, totalPrice: price, img: image })
    );
    console.log("totalQuantity");
    toast({
      title: "ITEM ADDED TO CART.",
      description: `${name} has been added to the cart`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div
      className={`whole card ${blur ? "blurred" : ""}`}
      style={{ position: "relative", filter: blur ? "blur(3px)" : "none" }}
    >
      {blur && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            cursor: "not-allowed",
            zIndex: 1,
          }}
        ></div>
      )}
      <Link to={`/sale/${id}`} style={{ position: "relative", zIndex: 0 }}>
        <img src={image} alt="" />
      </Link>
      <Link to={`/sale/${id}`} style={{ position: "relative", zIndex: 0 }}>
        <h1>{name}</h1>
      </Link>
      <h3>$ {price}</h3>
      {!blur && <button onClick={addCart}>Add to Cart</button>}
    </div>
  );
};

export default Card;
