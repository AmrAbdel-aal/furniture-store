import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";
import hero4 from "../assets/images/hero4.webp";
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque
          quidem sapiente eius ab facilis at veniam deserunt dignissimos esse.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className=" hidden lg:carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-[28rem]">
        <div className="carousel-item">
          <img src={hero1} className="w-80 rounded-box h-[100%] object-cover" />
        </div>
        <div className="carousel-item">
          <img
            src={hero2}
            className=" w-80 rounded-box h-[100%] object-cover"
          />
        </div>
        <div className="carousel-item">
          <img src={hero3} className="w-80 rounded-box h-[100%] object-cover" />
        </div>
        <div className="carousel-item">
          <img src={hero4} className="w-80 rounded-box h-[100%] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
