import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const IndividualCompleteProducts = () => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState([]);
  const [requiredData, setRequiredData] = useState([]);

  const fetchApiData = async () => {
    let resp = await axios.get("http://localhost:3000/products");
    let res = resp.data;
    setData(res);
    console.log(res);
    let temp = res.filter((data) => data.id == params.id);
    setRequiredData(temp);
    console.log("requiredData ", temp);
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {requiredData.length > 0 ? (
        <>
          <h1>{requiredData[0].price}</h1>
          <h1>{requiredData[0].name}</h1>
          <h1>{requiredData[0].type}</h1>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualCompleteProducts;
