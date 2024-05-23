import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../../CartSice/cartSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const IndividualCompleteProducts = () => {
  const params = useParams();

  const [data, setData] = useState(null);
  const [requiredData, setRequiredData] = useState([]);
  const [ind, setInd] = useState(0);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/products");
        const res = resp.data;
        setRequiredData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApiData();
  }, []);

  useEffect(() => {
    if (requiredData.length > 0) {
      const filteredData = requiredData.find((item) => item.id === params.id);
      setData(filteredData);
    }
  }, [requiredData, params.id]);

  const dispatch = useDispatch();
  const toast = useToast();

  const addCart = () => {
    dispatch(
      addToCart({
        name: data.name,
        id: data.id,
        price: data.price,
        desc: data.desc,
        totalPrice: data.price,
        img: data.link,
      })
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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="individual-complete-products-top">
        <ul className="individual-complete-products-top-left">
          {data.images &&
            data.images.map((item, index) => (
              <li key={index}>
                <img
                  src={item}
                  alt="Err"
                  style={{ height: "8rem", cursor: "pointer" }}
                  onClick={() => {
                    setInd(index);
                  }}
                />
              </li>
            ))}
        </ul>
        <div className="individual-complete-products-top-mid">
          {data.link && (
            <img src={data.images[ind]} alt="Err" style={{ height: "15rem" }} />
          )}
        </div>
        <div className="individual-complete-products-top-right">
          <div>{data.name}</div>
          <div>{data.price}</div>
          <div>{data.desc}</div>
          <button onClick={addCart}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default IndividualCompleteProducts;
