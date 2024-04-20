import React from "react";
import Cart from "./Cart";
import img1 from "../../../assets/myAcc.png";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const SearchNCart = () => {
  return (
    <div className="header-right">
      <input type="text" placeholder="What are you looking for?" />
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
