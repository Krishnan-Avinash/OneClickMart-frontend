import { useAuth0 } from "@auth0/auth0-react";
import { textDecoration } from "@chakra-ui/react";
import React from "react";

//-----REDUX----
import { useDispatch } from "react-redux";
import { removeUser } from "../../../userSlice/userSlice";

const IndividualName = ({ name, isAuthenticated }) => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  return (
    <div className="individualname">
      {name == "Sign Up / Log In" && isAuthenticated ? (
        <p
          onClick={() => {
            logout();
            dispatch(removeUser());
          }}
        >
          Log Out
        </p>
      ) : (
        <p>{name}</p>
      )}
    </div>
  );
};

export default IndividualName;
