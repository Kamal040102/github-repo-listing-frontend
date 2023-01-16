import React from "react";
import { useSelector } from "react-redux";
import "./UserDetailsInformation.component.css";

const UserDetailsInformation = () => {
  const { data } = useSelector((state) => state.getUserData);

  return (
    <div className="d-flex flex-column mt-3 mt-sm-0 userInformationMain">
      {data.name && data.login ? (
        <h1 className="px-0">
          {data.name} @{data.login}
        </h1>
      ) : (
        <h1 className="px-0">@{data.login}</h1>
      )}
      <h4>{data.location}</h4>
      <h5>{data.bio}</h5>
      <h5>{data.twitter_username}</h5>
      <h5>
        <a href={data.html_url} target="_blank">
          {data.html_url}
        </a>
      </h5>
    </div>
  );
};

export default UserDetailsInformation;
