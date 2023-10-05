import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { response } = useLoaderData();

  const products = response.data.data;
  return (
    <div className="mt-12 grid gap-y-8  ">
      {products.map((item) => {
        return (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="p-8 rounded-lg bg-base-100 shadow-xl flex flex-col  sm:flex-row  hover:shadow-2xl duration-300 group "
          >
            <div className=" flex  flex-col  sm:flex-row w-full ">
              <img
                src={item.attributes.image}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className=" ml-0 sm:ml-16 mt-3 sm:mt-0">
                <h2 className="capitalize font-medium text-lg">
                  {item.attributes.title}
                </h2>
                <h2 className="capitalize font-medium text-lg">
                  {item.attributes.company}
                </h2>
              </div>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {formatPrice(item.attributes.price)}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
