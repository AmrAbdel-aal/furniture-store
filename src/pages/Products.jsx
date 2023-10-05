import React from "react";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { Filters, ProductsContainer, PaginationContainer } from "../components";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 1000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch("/products", { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );

    return { response, params };
  };
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
