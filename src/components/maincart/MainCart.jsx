import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const MainCart = () => {
  const data = useSelector((state) => state.reducer);
  console.log(data);

  return (
    <>
      <div className="cart-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Cart</BreadcrumbLink>
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
                {data.itemList.map((item, index) => (
                  <Tr>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>{item.quantity}</Td>
                    <Td>{item.totalPrice}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <div className="buttons">
            <Link to="/">
              <button className="return-to-shop">Return To Shop</button>
            </Link>
          </div>
          <div className="maincart-left">
            <div className="coupons">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="main-cart-right">
              <h3>Cart Total</h3>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>$ temp</p>
                {/* <p>PRICE FROM STORE</p> */}
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>$ temp</p>
                {/* <p>PRICE FROM STORE</p> */}
              </div>
              <Link to="/checkout">
                <button className="checkout">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainCart;
