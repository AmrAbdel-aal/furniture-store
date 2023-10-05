import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  ComplexPaginationContainer,
  PaginationContainer,
  SectionTitle,
} from "../components";
import OrdersList from "../components/OrdersList";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.error("you must log in first");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get("/orders", {
        params: params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      return { response };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Check your credintials, please ";
      toast.error(errorMessage);
      return null;
    }
  };

const Orders = () => {
  const { response } = useLoaderData();

  if (response.data.meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
