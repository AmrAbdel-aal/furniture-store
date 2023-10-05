import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/CartSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const user = useSelector((state) => state.userState.user);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className="align-elements flex  justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.user.username}</p>
            <button
              className="btn btn-primary btn-xs btn-outline"
              onClick={() => {
                navigate("/");
                dispatch(clearCart());
                dispatch(logoutUser());
              }}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="login" className="link link-hover text-xs sm:text-sm">
              sign in/Guest
            </Link>
            <Link
              to="register"
              className="ml-4 link link-hover text-xs sm:text-sm"
            >
              Create an account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
