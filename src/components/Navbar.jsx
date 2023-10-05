import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "./";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");
  const dispatch = useDispatch();
  const { numItemsInCart } = useSelector((store) => {
    return store.CartState;
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "winter";
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className="bg-base-200">
      <div className="align-elements navbar">
        {/*Navbar start*/}
        <div className="navbar-start">
          {/** bars icon */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <FaBarsStaggered className="font-bold text-2xl  " />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavbarLinks />
            </ul>
          </div>
          {/**logo */}
          <button className="btn bg-primary hidden lg:block">
            <NavLink
              to="/"
              className="text-primary-content font-bold text-2xl "
            >
              C
            </NavLink>
          </button>
        </div>
        {/*Navbar center*/}
        <div className="navbar-center">
          <ul className=" hidden lg:flex">
            <NavbarLinks />
          </ul>
        </div>
        {/*Navbar end*/}
        <div className="navbar-end">
          {/**theme icons */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={changeTheme} />
            {}
            {/* sun icon */}

            <BsMoonFill className="swap-off w-8 h-8 " />

            <BsSunFill className="swap-on w-8 h-8 text-orange-300" />
          </label>
          {/** cart icon */}
          <div className="indicator ml-3">
            <span className="indicator-item badge badge-primary">
              {numItemsInCart}
            </span>
            <div className="grid text-3xl place-items-center">
              <NavLink to="cart">
                <BsCart3 />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
