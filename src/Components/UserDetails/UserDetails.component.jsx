import React from "react";
import UserDetailsImage from "../UserDetailsImage/UserDetailsImage.component";
import UserDetailsInformation from "../UserDetailsInformation/UserDetailsInformation.component";

const UserDetails = () => {
  return (
    <div className="row my-3 my-sm-5">
      <div className="col-12 col-sm-4">
        <UserDetailsImage />
      </div>
      <div className="col-12 col-sm-6">
        <UserDetailsInformation />
      </div>
    </div>
  );
};

export default UserDetails;
