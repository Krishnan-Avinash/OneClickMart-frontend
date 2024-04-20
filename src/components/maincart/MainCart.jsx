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

const MainCart = () => {
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
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                  <Td>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th>multiply by</Th>
                  <Th>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <div className="buttons">
            <button className="return-to-shop">Return To Shop</button>
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
