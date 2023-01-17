import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();
  return (
    <form
      className="p-5 border rounded"
      onSubmit={(e) => {
        username
          ? navigate(`/repos/${username}`)
          : window.alert("Github Username is a required field.");
      }}
    >
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Github Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-success w-100"
        onClick={(e) => {
          e.preventDefault();
          username
            ? navigate(`/repos/${username}`)
            : window.alert("Github Username is a required field.");
        }}
      >
        List Repos
      </button>
    </form>
  );
};

export default Form;
