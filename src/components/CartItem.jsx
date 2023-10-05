import React from "react";
import { formatPrice } from "../utils";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/CartSlice";

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, color } = cartItem;

  const dispatch = useDispatch();
  const removeItemFromThecart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    console.log(e);
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
      key={cartID}
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content"></h4>

        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: color }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24 ">
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="amount">
            <h4 className="text-md font-medium -tracking-wider capitalize">
              amount
            </h4>
          </label>
          <select
            name="amount"
            className="select select-base select-bordered select-xs"
            id="amount"
            value={amount}
            onChange={(e) => {
              handleAmount(e);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromThecart}
        >
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
