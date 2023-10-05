import React from "react";
import { SubmitBtn, FormInput } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      toast.success("logged in successfully");
      store.dispatch(loginUser(response.data));

      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Check your credintials, please ";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logAsguestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome as guest user");
      navigate("/");
    } catch (error) {
      toast.error("guest user login error. try again, please");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card shadow-lg w-96 flex flex-col gap-y-4 p-8 bg-base-100"
      >
        {/*bg-base-100 for the form (not purple)*/}
        <h1 className="text-center text-4xl">Login</h1>

        <FormInput
          label="Email"
          name="identifier"
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
          <SubmitBtn text="login" />
          <button
            type="button"
            className="btn btn-secondary btn-block mt-2"
            onClick={() => {
              logAsguestUser();
            }}
          >
            guest user
          </button>
        </div>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
