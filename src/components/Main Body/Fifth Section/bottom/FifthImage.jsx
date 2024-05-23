import React from "react";
import { Link } from "react-router-dom";
import imgL from "../../../../assets/playstation2.png";
import imgRT from "../../../../assets/fashion2.png";
import imgRBL from "../../../../assets/speaker2.png";
import imgRBR from "../../../../assets/perfume2.png";

const FifthImage = () => {
  return (
    <main className="fifth-image">
      <div className="fifth-left">
        <Link to={`products/21`}>
          <img src={imgL} alt="Error" />
        </Link>
      </div>
      <div className="fifth-right">
        <div className="fifth-right-top">
          <Link>
            <img src={imgRT} alt="Error" />
          </Link>
        </div>
        <div className="fifth-right-bottom">
          <div className="fifth-right-bottom-left">
            <Link>
              <img src={imgRBL} alt="Error" />
            </Link>
          </div>
          <div className="fifth-right-bottom-right">
            <Link>
              <img src={imgRBR} alt="Error" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FifthImage;
