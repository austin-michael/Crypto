import React from "react";
import { Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/useLogin";

const NavBar = () => {
  const { user } = useAuthContext();
  const { logOut } = useLogout();

  return (
    <nav className="navbar">
      <Link className="navbar-home-link" to="/">
        Home
      </Link>
      <ul className="navbar-sub-links">
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <button onClick={() => logOut()}>Logout</button>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
