import React from "react";
// import watch from "../../../../assets/watch.png";
import IndividualCategory from "./IndividualCategory";

const Categories = () => {
  const catg = [
    {
      name: "Phones",
      img: "https://img.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_90220-957.jpg?t=st=1713267202~exp=1713270802~hmac=c05b5217475583b025134327afcfd97ad392c86830243669a5b632fc86930fb3&w=740",
      id: 1,
    },
    {
      name: "Computers",
      img: "https://img.freepik.com/free-vector/computer-design_1156-101.jpg?t=st=1713267318~exp=1713270918~hmac=747a5fecbeeb21630ca3ed83b404931dfbe0e3d6a94c33138c9127e0341ac964&w=740",
      id: 2,
    },
    {
      name: "SmartWatch",
      img: "https://cdn4.vectorstock.com/i/1000x1000/69/88/smart-watch-isolated-on-white-logo-stainless-vector-19006988.jpg",
      id: 3,
    },
    {
      name: "Fashion",
      img: "https://marketplace.canva.com/EAFCbKLQ_LE/1/0/1600w/canva-white-black-minimalist-fashion-store-logo-FBKZMKJ8Vpw.jpg",
      id: 4,
    },
    {
      name: "Gaming",
      img: "https://www.shutterstock.com/image-vector/console-icon-logo-isolated-sign-260nw-1893419791.jpg",
      id: 5,
    },
    {
      name: "Sofa",
      img: "https://www.shutterstock.com/image-vector/sofa-icon-260nw-441974299.jpg",
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
