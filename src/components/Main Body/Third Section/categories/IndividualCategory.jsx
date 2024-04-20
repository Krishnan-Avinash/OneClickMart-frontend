import React from "react";

const IndividualCategory = ({ name, imag }) => {
  return (
    <div className="individual-category-card">
      <img src={imag} alt="Error" className="imag-individualcategory" />
      <h1>{name}</h1>
    </div>
  );
};

export default IndividualCategory;
