import React from "react";
import { Link } from "react-router-dom";

const MainFirstLeftIndividual = ({ name, link }) => {
  return (
    <div className="mainfirstleftindividual">
      <Link to={link}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default MainFirstLeftIndividual;
