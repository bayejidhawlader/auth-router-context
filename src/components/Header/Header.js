import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserConext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("context", user);

  const handleSingout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Awesome Auth
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        {user?.email ? (
          <button onClick={handleSingout} className="btn btn-sm">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-small">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
