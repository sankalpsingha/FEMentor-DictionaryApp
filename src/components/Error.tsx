import React from "react";

const Error = ({ faultyWord }: { faultyWord: string }) => {
  return (
    <div className=" text-center mt-10 md:mt-20 mx-auto max-w-xl">
      <h1 className=" text-5xl md:text-7xl ">😕</h1>
      <h2 className=" dark:text-white font-bold mt-5 text-darkGray">
        No Definitions Found for{" "}
        <span className="underline italic">{faultyWord}</span>
      </h2>
      <p className=" text-sm dark:text-white">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default Error;
