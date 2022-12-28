import React from "react";

import Login from "./loginButton";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  console.log("logout", isAuthenticated);
  return <div>{!!isAuthenticated ? <LogoutButton /> : <Login />}</div>;
};

export default AuthenticationButton;
