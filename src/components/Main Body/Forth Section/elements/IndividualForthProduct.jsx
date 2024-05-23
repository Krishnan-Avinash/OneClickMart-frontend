import React from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../CartSice/cartSlice";

const IndividualForthProduct = ({ image, link, name, price, desc, id }) => {
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
      duration: 9000,
      isClosable: true,
      bg: "blue",
    });
  };
  return (
    <div to="" className="product-image">
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
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
