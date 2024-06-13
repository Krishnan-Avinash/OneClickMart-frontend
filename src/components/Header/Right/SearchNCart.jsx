import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import img1 from "../../../assets/myAcc.png";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const SearchNCart = () => {
  const options = {
    "Dress for women": "Dress For Women",
    "clothes for women": "Clothes For Women",
    "dress for ladies": "Dress For Ladies",
    "clothes for ladies": "Clothes For Ladies",
    "dress for girls": "Dress For Girls",
    "clothes for girls": "Clothes For Girls",
    "Dress for men": "Dress For Men",
    "clothes for men": "Clothes For Men",
    "dress for gents": "Dress For Gents",
    "clothes for gents": "Clothes For Gents",
    "dress for boys": "Dress For Boys",
    "clothes for boys": "Clothes For Boys",
    playstation: "PlayStation 5",
    ps: "PlayStation 5",
    ps5: "PlayStation 5",
    controller: "Game Controller",
    "ps joystick": "Game Controller",
    "ps5 joystick": "Game Controller",
    "playstation joystick": "Game Controller",
    xbox: "XBox Series X",
    sofa: "Sofa And Chair",
    chair: "Sofa And Chair",
    "sofa and chair": "Sofa And Chair",
    monitor: "Monitor",
    monitors: "Monitor",
    tv: "Television",
    "gaming monitor": "Gaming Monitor",
    speaker: "Speaker",
    speakers: "Speaker",
    perfume: "Perfume",
    perfumes: "Perfume",
  };

  const optionKeys = Object.keys(options);

  const [searchData, setSearchData] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (searchData) {
      const filteredResults = optionKeys.filter((item) =>
        item.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilterData(filteredResults);
      if (filteredResults.length > 0) {
        onOpen();
      } else {
        onClose();
      }
    } else {
      setFilterData([]);
      onClose();
    }
  }, [searchData, optionKeys, onOpen, onClose]);

  return (
    <div className="header-right">
      <Box position="relative">
        <Input
          type="text"
          placeholder="What are you looking for?"
          // value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        {isOpen && (
          <Box position="absolute" width="100%" zIndex={1}>
            <Menu isOpen={isOpen}>
              <MenuList>
                {filterData.map((item, index) => (
                  <MenuItem key={index}>{options[item]}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        )}
      </Box>

      <Cart />
      <Menu>
        <MenuButton
          as={Button}
          _hover={{ bg: "gray.400" }}
          style={{
            height: "fit-content",
            width: "fit-content",
            padding: "0.75rem",
            borderRadius: "50%",
            border: "2px solid black",
          }}
          className="accaccacc"
        >
          <img
            src={img1}
            alt="Err"
            style={{
              height: "1.5rem",
            }}
          />
        </MenuButton>
        <MenuList style={{ backgroundColor: "#5858ff61" }}>
          <Link to="/myaccount">
            <MenuItem>My Account</MenuItem>
          </Link>
          <MenuItem>My Orders</MenuItem>
          <MenuItem>My Cancellations</MenuItem>
          <MenuItem>My Reviews</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SearchNCart;
