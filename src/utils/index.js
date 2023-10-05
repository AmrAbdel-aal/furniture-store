const BaseUrl = "https://strapi-store-server.onrender.com/api";

import axios from "axios";

export const customFetch = axios.create({
  baseURL: BaseUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return dollarsAmount;
};
