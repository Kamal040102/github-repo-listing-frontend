import React from "react";
import "./UserDetailsInformation.component.css";

const UserDetailsInformation = () => {
  return (
    <div className="d-flex flex-column mt-3 mt-sm-0 userInformationMain">
      <span className="row align-items-end">
        <h1 className="col-12 col-sm-7 px-0">Name Goes Here...</h1>
        <h5 className="col-12 col-sm-5">(Username Goes Here....)</h5>
      </span>
      <h4>Location Goes Here......</h4>
      <h5>Bio Goes Here....</h5>
      <h5>Twitter Handle Goes Here....</h5>
      <h5>Profile Url Goes Here...</h5>
    </div>
  );
};

export default UserDetailsInformation;
