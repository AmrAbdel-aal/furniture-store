import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="font-bold text-8xl text-primary"> 404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            sorry we couldn't find the page you're looking for.
          </p>
          <Link to="/" className="btn btn-secondary mt-5">
            Back Home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h1 className="font-bold text-4xl  ">Unexpected Error!!</h1>
    </main>
  );
};

export default Error;
