import { textDecoration } from "@chakra-ui/react";
import React from "react";

const IndividualName = ({ name }) => {
  return (
    <div className="individualname">
      <p>{name}</p>
    </div>
  );
};

export default IndividualName;
