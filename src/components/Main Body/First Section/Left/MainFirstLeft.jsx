import React from "react";
import MainFirstLeftIndividual from "./MainFirstLeftIndividual";

const MainFirstLeft = () => {
  const elements = [
    { name: "Women's Fashion", link: "/women", id: 1 },
    { name: "Men's Fashion", link: "/men", id: 2 },
    { name: "Electronics", link: "/electronics", id: 3 },
    { name: "Home & Lifestyle", link: "/homeandlifestyle", id: 4 },
    { name: "Sports & Outdoor", link: "/sports", id: 5 },
    { name: "Kids Toys", link: "/kids", id: 6 },
    { name: "Groceries & Pets", link: "/groceries", id: 7 },
    { name: "Health & Beauty", link: "/health", id: 8 },
  ];
  return (
    <ul className="mainfirstleft-ul">
      {elements.map((item) => (
        <li key={item.id}>
          <MainFirstLeftIndividual name={item.name} link={item.link} />
        </li>
      ))}
    </ul>
  );
};

export default MainFirstLeft;
