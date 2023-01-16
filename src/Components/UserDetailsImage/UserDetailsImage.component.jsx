import React from "react";
import image from "../../Assets/image.jpeg";
import "./UserDetailsImage.component.css";

const UserDetailsImage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        className="userAvatar"
        width={"250px"}
        height={"250px"}
        src={image}
        alt="UserImage"
      />
    </div>
  );
};

export default UserDetailsImage;
