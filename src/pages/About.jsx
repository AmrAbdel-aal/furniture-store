import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-21 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni
        distinctio commodi animi velit ea, aliquam doloremque cupiditate
        officiis laboriosam consectetur sint nihil voluptas perferendis
        accusamus in assumenda unde similique non totam vel. Veniam adipisci
        repellat accusamus ducimus similique nesciunt!
      </p>
    </>
  );
};

export default About;
