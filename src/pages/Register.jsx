import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("registered successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Check your credintials, please ";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card shadow-lg w-96 flex flex-col gap-y-4 p-8 bg-purple-500"
      >
        {/*bg-base-100 for the form (not purple)*/}
        <h1 className="text-center text-4xl">Register</h1>
        <FormInput
          label="username"
          name="username"
          type="text"
          defaultValue="Type your name"
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          defaultValue="Type your email"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          defaultValue="password"
        />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          You are a member?
          <Link
            to="/login"
            className="link link-hover link-primary capitalize ml-1"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
