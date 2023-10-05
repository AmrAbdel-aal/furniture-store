import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductsGrid = () => {
  const { response } = useLoaderData();

  const products = response.data.data;
  return (
    <div className="grid card md:grid-cols-2 lg:grid-cols-3 gap-x-3 ">
      {products.map((item) => {
        return (
          <Link to={`/products/${item.id}`} key={item.id}>
            <div className="card w-98 bg-base-100 shadow-xl hover:shadow-2xl mb-2">
              <figure className="px-5 pt-5 ">
                <img
                  src={item.attributes.image}
                  className="rounded-xl w-full h-[20rem]  lg:h-[24rem]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title"> {item.attributes.title}</h2>
                <p>{formatPrice(item.attributes.price)}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
