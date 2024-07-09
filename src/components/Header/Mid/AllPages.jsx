import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import IndividualName from "./IndividualName";

const AllPages = () => {
  const navigate = useNavigate();
  const { loginWithPopup, user, isAuthenticated } = useAuth0();
  const toast = useToast();

  const totalQuantity = useSelector((state) => state.reducer.totalQuantity);

  const elements = [
    { name: "Home", link: "/", id: 1, forlogin: false },
    { name: "Contact", link: "/contact", id: 2, forlogin: false },
    { name: "About", link: "/story", id: 3, forlogin: false },
    { name: "Sign Up / Log In", link: "/signup", id: 4, forlogin: true },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sendEmail = async (email) => {
    try {
      const response = await axios.post(
        `https://oneclickmart.onrender.com/api/oneClickMart/`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        toast({
          title: "New User Created.",
          description: "We've created your account.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/signup");
      } else {
        toast({
          title: "User Exists.",
          description: "An account with this email already exists.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        navigate("/signup");
      }
    } catch (error) {
      toast({
        // title: `${error.response.data.message}`,
        title: "Account found",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      sendEmail(user.email);
    }
  }, [isAuthenticated, user]);

  return (
    <div className="allpages-elements">
      <ul>
        {elements.map((item) => {
          if (item.forlogin === true) {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  style={({ isActive }) =>
                    isActive
                      ? { textDecoration: "underline" }
                      : { textDecoration: "none" }
                  }
                  onClick={async (e) => {
                    // e.preventDefault();
                    try {
                      await loginWithPopup({ prompt: "login" });
                    } catch (error) {
                      navigate("/");
                    }
                  }}
                >
                  <IndividualName
                    isAuthenticated={isAuthenticated}
                    name={item.name}
                  />
                </NavLink>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  style={({ isActive }) =>
                    isActive
                      ? { textDecoration: "underline" }
                      : { textDecoration: "none" }
                  }
                >
                  <IndividualName name={item.name} />
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default AllPages;
