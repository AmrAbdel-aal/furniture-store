import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "/products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];
const NavbarLinks = () => {
  const user = localStorage.getItem("user");
  return (
    <>
      {links.map((link) => {
        if (!user && (link.text === "checkout" || link.text === "orders")) {
          return;
        }
        return (
          <li key={link.id} className="">
            <NavLink
              to={link.url}
              className="btn  btn-ghost text-xl capitalize  sm:flex align-middle"
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavbarLinks;
