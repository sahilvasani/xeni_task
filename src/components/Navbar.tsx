import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type NavbarItem = {
  label: any;
  path: string;
};

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const navItems: NavbarItem[] = [
    //For Home page menu
    { label: <IoHome />, path: "/" },
    {
      // For Cart Menu
      label: (
        <div className="relative">
          <FaCartShopping />
          {cartItems?.length > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 text-xs bg-red-600 text-white rounded-full flex items-center justify-center">
              {cartItems?.length}
            </span>
          )}
        </div>
      ),
      path: "/cart",
    },
  ];

  return (
    <nav className="flex justify-between items-center p-2 bg-indigo-100 text-black fixed w-full z-50">
      <div className="text-md font-bold">
        <Link to="/" className="text-black">
          E-Commerce
        </Link>
      </div>
      <ul className="list-none flex m-0 p-0">
        {/* Navbar list item */}
        {navItems.map((item) => (
          <li key={item.path} className="mx-2">
            <Link to={item.path} className="text-black text-lg no-underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
