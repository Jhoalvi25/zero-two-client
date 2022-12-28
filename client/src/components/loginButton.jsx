import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Link to="/login">
        <button onClick={() => loginWithRedirect()}>Login</button>
      </Link>
    </div>
  );
};
export default Login;
