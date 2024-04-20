import React from "react";

const IndividualSixth = ({ image, mainTxt, desc }) => {
  return (
    <div className="individual-sixth">
      <img src={image} alt="Error" className="individual-image" />
      <h1>{mainTxt}</h1>
      <h3>{desc}</h3>
    </div>
  );
};

export default IndividualSixth;
