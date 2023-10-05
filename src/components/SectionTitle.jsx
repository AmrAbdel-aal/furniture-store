import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <>
      <h1 className="mt-11 text-2xl font-bold tracking-wide lg:text-4xl">
        {text}
      </h1>
      <div className="divider "></div>
    </>
  );
};

export default SectionTitle;
