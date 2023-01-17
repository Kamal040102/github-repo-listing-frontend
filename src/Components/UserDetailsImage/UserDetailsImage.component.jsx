import React from "react";
import "./UserDetailsImage.component.css";
import { useSelector } from "react-redux";

const UserDetailsImage = () => {
  const { data } = useSelector((state) => state.getUserData);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        className="userAvatar"
        width={"250px"}
        height={"250px"}
        src={data.avatar_url}
        alt="UserImage"
      />
    </div>
  );
};

export default UserDetailsImage;
