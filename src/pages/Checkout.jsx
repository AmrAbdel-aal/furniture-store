import React from "react";
import { useSelector } from "react-redux";
import { CartTotals, SectionTitle } from "../components";
import CheckoutForm from "../components/CheckoutForm";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("log in to complete checkout");
    return redirect("/login");
  }

  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((store) => store.CartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart Is Empty" />;
  }

  return (
    <>
      <SectionTitle text="place your items" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 ">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
