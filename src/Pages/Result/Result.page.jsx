import React from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../../Components/UserDetails/UserDetails.component";
import UserRepos from "../../Components/UserRepos/UserRepos.component";

const Result = () => {
  const params = useParams();

  return (
    <div className="container d-flex flex-column">
      <UserDetails />
      <UserRepos />
    </div>
  );
};

export default Result;
