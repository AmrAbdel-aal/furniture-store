import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
  const { response, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      {/** Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={response.data.meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/** Companies */}
      <FormSelect
        label="Sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={company}
      />
      {/** Orders */}
      <FormSelect
        label="select company"
        name="company"
        list={response.data.meta.companies}
        size="select-sm"
        defaultValue={order}
      />
      {/**Price */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      <FormCheckBox
        name="shipping"
        label="free shiping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/*BUTTONS*/}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
