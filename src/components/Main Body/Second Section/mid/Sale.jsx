import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

const Sale = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApiData = async () => {
    setLoading(true);
    let resp = await axios.get("http://localhost:3000/products");
    setLoading(false);
    let res = resp.data;
    let someData = res.slice(0, 6);
    setData(someData);
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <ul className="sale-ul">
        {data.map((item, index) => (
          <li key={item.id}>
            <Card
              name={item.name}
              image={item.link}
              price={item.price}
              blur={index === data.length - 1}
              id={item.id}
              desc={item.desc}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default Sale;
