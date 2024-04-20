// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import axios from "axios";

// const Example = () => {
//   return (
//     <div>
//       {/* <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div> */}
//       <HorizontalScrollCarousel />
//       {/* <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div> */}
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const [data, setData] = useState([]);
//   const getApiData = async () => {
//     const res = await axios.get("http://localhost:3000/products");
//     setData(res.data);
//   };
//   useEffect(() => {
//     getApiData();
//   }, []);
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[110vh]">
//       <div className="sticky top-0 flex h-fit items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {data.map((item) => {
//             return <Card card={item} key={item.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[250px] w-[250px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.link})`,
//           backgroundSize: "200px",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Example;

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

const Sale = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApiData = async () => {
    setLoading(true);
    let resp = await axios.get("http://localhost:3000/products");
    setLoading(false);
    let res = resp.data;
    console.log(res);
    let someData = res.slice(0, 6);
    setData(someData);
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <ul className="sale-ul">
        {data.map((item, index) => (
          <li key={item.id}>
            <Card
              name={item.name}
              image={item.link}
              price={item.price}
              blur={index === data.length - 1}
              id={item.id}
              desc={item.desc}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default Sale;
