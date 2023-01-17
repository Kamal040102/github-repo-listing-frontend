import React from "react";
import { useHref, useNavigate } from "react-router-dom";

const Error = () => {
  const page = useHref();
  const navigate = useNavigate();

  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <h1>
        Error <span className="text-danger">404</span>
      </h1>
      <h2>
        Page <span className="text-primary">'{page}'</span> not found
      </h2>
      <button
        className="btn btn-success mt-5"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        Go To Home
      </button>
    </div>
  );
};

export default Error;
