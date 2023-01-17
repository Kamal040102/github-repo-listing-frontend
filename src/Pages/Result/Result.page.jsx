import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserDetails from "../../Components/UserDetails/UserDetails.component";
import UserRepos from "../../Components/UserRepos/UserRepos.component";
import { actions } from "../../redux/index";
import Loader from "react-fullscreen-loading";

const Result = () => {
  const params = useParams();
  const disptach = useDispatch();
  const { loading } = useSelector((state) => state.getUserData);

  useEffect(() => {
    disptach(actions.fetchUserData(params.username));
  }, []);

  return (
    <div className="container d-flex flex-column">
      {loading === null || loading === true ? (
        <Loader loading={true} loaderColor={"#OD6EFD"} />
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
