import React from "react";
import RepoTopic from "../RepoTopic/RepoTopic.component";
import "./RepoCard.component.css";

const RepoCard = () => {
  return (
    <div className="col-12 col-sm-6 my-2">
      <a className="repoCard" href="/">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-primary">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="card-text my-2">
              <RepoTopic />
              <RepoTopic />
              <RepoTopic />
              <RepoTopic />
              <RepoTopic />
              <RepoTopic />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RepoCard;
