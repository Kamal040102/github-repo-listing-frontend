import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserDetails from "../../Components/UserDetails/UserDetails.component";
import UserRepos from "../../Components/UserRepos/UserRepos.component";
import { actions } from "../../redux/index";
import Loader from "react-fullscreen-loading";
import Error from "../Error/Error.page";

const Result = () => {
  const params = useParams();
  const disptach = useDispatch();
  const { loading, error } = useSelector((state) => state.getUserData);

  useEffect(() => {
    disptach(actions.fetchUserData(params.username));
  }, []);

  return (
    <div className="h-100 container d-flex flex-column">
      {loading === null || loading === true ? (
        <Loader loading={true} loaderColor={"#OD6EFD"} />
      ) : error !== null && loading === false ? (
        <Error user={params.username} />
      ) : (
        <>
          <Loader loading={false} />
          <UserDetails />
          <UserRepos />
        </>
      )}
    </div>
  );
};

export default Result;
