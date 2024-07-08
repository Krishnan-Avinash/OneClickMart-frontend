import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const MyOrders = () => {
  const { user, isAuthenticated } = useAuth0();

  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    console.log("email: ", user.email);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/oneCickMart/order/getIndividualOrder/${user.email}`
      );
      console.log("Response: ", response);
      setOrders(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      fetchData();
    }
  }, [isAuthenticated, user]);

  return (
    <div className="my-order-container">
      <h1 className="my-order-container-heading">My Orders</h1>
      <ul className="outer-ul">
        {orders.map((item, index) => (
          <li className="outer-li" key={index}>
            <div className="order-name">
              <h1>Name: {item.fullName}</h1>
              <h2>Mobile Number: {item.number}</h2>
            </div>
            <div className="order-address">
              <h2>
                Address:{" "}
                {item.apartment + " " + item.streetAddress + " " + item.town}
              </h2>
            </div>
            <div className="order-details">
              <table>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                </tr>
                {item.product.map((item2, index2) => (
                  <tr key={index2}>
                    <td>{item2.name}</td>
                    <td>{item2.price}</td>
                    <td>{item2.quantity}</td>
                  </tr>
                ))}
              </table>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
