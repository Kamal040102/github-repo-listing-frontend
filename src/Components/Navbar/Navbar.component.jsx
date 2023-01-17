import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Navbar.component.css";
import { actions } from "../../redux/index";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span
          className="navbar-brand cursor-pointer"
          onClick={() => {
            dispatch(actions.removeUserData());
            navigate("/");
          }}
        >
          Github Repository Listing
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
