import React, { useState } from "react";
import { ProductsList, ProductsGrid } from "./";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";
const ProductsContainer = () => {
  const { response } = useLoaderData();

  const total_products = response.data.meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn   btn-circle btn-sm  ${
      pattern === layout ? "btn-primary text-primary-content" : "btn-ghost"
    }`;
  };
  return (
    <>
      {/**Header */}
      <div className="flex justify-between items-center border-b border-base-300 pb-5 mt-5">
        <h4 className="font-medium text-md">
          {total_products} product{total_products > 1 ? "s" : ""}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => {
              setLayout("grid");
            }}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => {
              setLayout("list");
            }}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/** Products */}

      <div>
        {total_products === 0 ? (
          <h4 className="text-2xl mt-16 ">
            Sorry, no products matches your search
          </h4>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
