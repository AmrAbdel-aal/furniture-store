import React from "react";
import { Hero, FeaturedProducts } from "../components";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => {
    return customFetch("/products?featured=true");
  },
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  return { response };
};

const Landing = () => {
  return (
    <>
      <Hero />

      <FeaturedProducts />
    </>
  );
};

export default Landing;
