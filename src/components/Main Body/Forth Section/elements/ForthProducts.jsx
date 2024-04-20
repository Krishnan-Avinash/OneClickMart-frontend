import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import IndividualForthProduct from "./IndividualForthProduct";

const ForthProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApiData = async () => {
    setLoading(true);
    let resp = await axios.get("http://localhost:3000/products");
    setLoading(false);
    let res = resp.data;
    console.log(res);
    let someData = res.slice(20, 28);
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
          <li key={item.id}>
            <IndividualForthProduct
              name={item.name}
              image={item.link}
              price={item.price}
              id={item.id}
              desc={item.desc}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default ForthProducts;
