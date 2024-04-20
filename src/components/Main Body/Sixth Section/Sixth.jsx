import React from "react";
import IndividualSixth from "./IndividualSixth";

import img1 from "../../../assets/delivery.png";
import img2 from "../../../assets/customer-service-removebg-preview.png";
import img3 from "../../../assets/money-back-removebg-preview.png";

const Sixth = () => {
  const elements = [
    {
      images: img1,
      mainTxt: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $10",
      id: 1,
    },
    {
      images: img2,
      mainTxt: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer service",
      id: 2,
    },
    {
      images: img3,
      mainTxt: "MONEY BACK GUARANTEE",
      desc: "Money return within 2 days",
      id: 3,
    },
  ];
  return (
    <ul className="sixth-ul">
      {elements.map((item) => (
        <li key={item.id}>
          <IndividualSixth
            image={item.images}
            mainTxt={item.mainTxt}
            desc={item.desc}
          />
        </li>
      ))}
    </ul>
  );
};

export default Sixth;
