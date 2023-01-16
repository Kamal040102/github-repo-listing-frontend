import React from "react";
import { useHref } from "react-router-dom";

const Error = () => {
  const page = useHref();

  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Error 404</h1>
      <h2>Page '{page}' not found</h2>
    </div>
  );
};

export default Error;
