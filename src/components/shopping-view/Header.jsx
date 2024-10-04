import {   ShoppingCartIcon, User } from "lucide-react";
import "../../styles/shopping-view/header.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MineKart</div>
      <div className="left-content">
        <span className="user-btn">
          <User />
        </span>
        <span className="user-btn">
         <ShoppingCartIcon/>
        </span>
      </div>
    </nav>
  );
};

const ShoppingHeader = () => {
  return <Navbar></Navbar>;
};

export default ShoppingHeader;
