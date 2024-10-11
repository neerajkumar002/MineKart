import { HammerIcon, ShoppingCartIcon, SquareMenu, User } from "lucide-react";
import "../../styles/shopping-view/header.css";
import { Link } from "react-router-dom";

const navList = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/electronics",
    name: "Electronics",
  },
  {
    path: "/jewelery",
    name: "Jewelery",
  },
  {
    path: "/men's clothing",
    name: "Men's clothing",
  },
  {
    path: "/women's clothing",
    name: "Women's clothing",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MineKart</div>

      <div className="nav-items">
        <ul>
          {navList.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="left-content">
        <span className="user-btn">
          <User />
        </span>
        <span className="user-btn">
          <ShoppingCartIcon />
        </span>
      </div>

      <button className="hamburger-btn">
        <SquareMenu size={40} />
      </button>
    </nav>
  );
};

const ShoppingHeader = () => {
  return <Navbar></Navbar>;
};

export default ShoppingHeader;
