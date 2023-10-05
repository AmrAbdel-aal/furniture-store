import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Navbar />
      {navigation.state === "loading" ? (
        <Loading />
      ) : (
        <section className="align-elements py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
