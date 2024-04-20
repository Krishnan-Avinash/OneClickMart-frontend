import React from "react";

import img1 from "../../../../assets/img7.jpg";
import img2 from "../../../../assets/mainImg2.jpg";
import img3 from "../../../../assets/mainImg3.jpg";
import img4 from "../../../../assets/mainImg4.png";
import img5 from "../../../../assets/mainImg5.webp";
import img6 from "../../../../assets/mainImg6.jpg";

const CarouselDisplay = () => {
  return (
    <img src={img1} alt="" className="check4" />
    // <main className="main-check">
    //   <div className="slider">
    //     <div className="slides">
    //       <input type="radio" name="radio-btn" id="radio1" />
    //       <input type="radio" name="radio-btn" id="radio2" />
    //       <input type="radio" name="radio-btn" id="radio3" />
    //       <input type="radio" name="radio-btn" id="radio4" />
    //       <div className="slide first">
    //         <img src={img1} alt="" />
    //       </div>
    //       <div className="slide ">
    //         <img src={img2} alt="" />
    //       </div>
    //       <div className="slide ">
    //         <img src={img3} alt="" />
    //       </div>
    //       <div className="slide ">
    //         <img src={img4} alt="" />
    //       </div>
    //       <div className="slide ">
    //         <img src={img5} alt="" />
    //       </div>
    //       <div className="slide ">
    //         <img src={img6} alt="" />
    //       </div>
    //       <div className="navigation-auto">
    //         <div className="auto-btn1"></div>
    //         <div className="auto-btn2"></div>
    //         <div className="auto-btn3"></div>
    //         <div className="auto-btn4"></div>
    //       </div>
    //       <div className="navigation-manual">
    //         <label htmlFor="radio1" className="manual-btn"></label>
    //         <label htmlFor="radio2" className="manual-btn"></label>
    //         <label htmlFor="radio3" className="manual-btn"></label>
    //         <label htmlFor="radio4" className="manual-btn"></label>
    //         <label htmlFor="radio5" className="manual-btn"></label>
    //         <label htmlFor="radio6" className="manual-btn"></label>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default CarouselDisplay;
