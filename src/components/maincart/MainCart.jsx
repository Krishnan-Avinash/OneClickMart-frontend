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

const MainCart = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const data = useSelector((state) => state.reducer);
  console.log(data);

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
                {data.itemList.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <div>{item.name}</div>
                      <img
                        src={item.img}
                        alt="Err"
                        style={{ height: "5rem" }}
                      />
                      {/* <div>{item.img}</div> */}
                    </Td>
                    <Td>{item.price}</Td>
                    <Td>{item.quantity}</Td>
                    <Td>{item.totalPrice}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot bg="#dcdcfc" mt="3rem">
                <Tr>
                  <Th>Total</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th style={{ fontSize: "1.1rem" }}>{totalValue}</Th>
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
