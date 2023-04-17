import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/checkout">Checkout</Link>

        {user && <span>{user.email}</span>}
      </div>
    </nav>
  );
};

export default Header;
