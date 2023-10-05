import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => {
      return customFetch(`/products/${id}`);
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    const data = response.data.data;

    return data;
  };

const SingleProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const { image, title, company, price, description, colors } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  console.log(useSelector((store) => store.CartState));

  const dispatch = useDispatch();
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <>
      <section>
        <div className="text-md breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="mt-6 grid gap-y-8 lg:grid-col-2 lg:gap-x-16 ">
          <img
            src={image}
            alt={title}
            className="w-96 object-cover rounded-lg lg:w-full"
          />
          <div>
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              {company}
            </h4>
            <p className="mt-3 text-xl">{formatPrice(price)}</p>
            <p className="mt-6 leading-8">{description}</p>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                colors
              </h4>
              <div className="mt-2">
                {colors.map((color) => {
                  return (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className={`badge w-6 h-6 mr-2 ${
                        color === productColor
                          ? "border-2 border-secondary"
                          : ""
                      }`}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={() => {
                  dispatch(
                    addItem({
                      productID: product.id,
                      cartID: product.id + productColor,
                      image: image,
                      price: price,
                      color: productColor,
                      amount: amount,
                      company: company,
                      title: title,
                    })
                  );
                }}
              >
                add to bag
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
