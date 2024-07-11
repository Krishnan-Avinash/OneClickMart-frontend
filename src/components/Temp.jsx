import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Temp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <div></div>;
};

export default Temp;
