import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserDetails from "../../Components/UserDetails/UserDetails.component";
import UserRepos from "../../Components/UserRepos/UserRepos.component";
import { actions } from "../../redux/index";

const Result = () => {
  const params = useParams();
  const disptach = useDispatch();

  useEffect(() => {
    disptach(actions.fetchUserData(params.username));
  }, []);

  return (
    <div className="container d-flex flex-column">
      <UserDetails />
      <UserRepos />
    </div>
  );
};

export default Result;
