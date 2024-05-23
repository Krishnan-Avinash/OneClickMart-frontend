import React from "react";
// import watch from "../../../../assets/watch.png";
import phone from "../../../../assets/smartphone-removebg-preview.png";
import computer from "../../../../assets/computers-removebg-preview.png";
import watch from "../../../../assets/smartWatch-removebg-preview.png";
import fashion from "../../../../assets/fashion3-removebg-preview.png";
import gaming from "../../../../assets/gaming2-removebg-preview.png";
import sofa from "../../../../assets/sofa2-removebg-preview.png";
import IndividualCategory from "./IndividualCategory";

const Categories = () => {
  const catg = [
    {
      name: "Phones",
      img: phone,
      id: 1,
    },
    {
      name: "Computers",
      img: computer,
      id: 2,
    },
    {
      name: "SmartWatch",
      img: watch,
      id: 3,
    },
    {
      name: "Fashion",
      img: fashion,
      id: 4,
    },
    {
      name: "Gaming",
      img: gaming,
      id: 5,
    },
    {
      name: "Sofa",
      img: sofa,
      id: 6,
    },
  ];
  return (
    <ul className="categories-ul">
      {catg.map((item) => (
        <li key={item.id}>
          <IndividualCategory name={item.name} imag={item.img} />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
