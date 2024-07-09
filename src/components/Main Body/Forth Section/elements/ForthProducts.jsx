import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import IndividualForthProduct from "./IndividualForthProduct";

const ForthProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApiData = async () => {
    setLoading(true);
    let response = await axios.get(
      "https://oneclickmart.onrender.com/api/oneClickMart/admin/getProduct"
    );
    setLoading(false);

    // console.log("REsponse: ", response);

    let res = response.data.data;
    let someData = res.slice(0, 8);
    setData(someData);
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  if (loading) {
    return (
      <div
        style={{
          fontSize: "1.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <ul className="products-ul">
        {data.map((item, index) => (
          <li key={index}>
            <IndividualForthProduct
              name={item.name}
              image={item.mainImg}
              price={item.price}
              id={item._id}
              desc={item.description}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default ForthProducts;
