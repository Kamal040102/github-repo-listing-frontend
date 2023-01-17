import React from "react";
import RepoTopic from "../RepoTopic/RepoTopic.component";
import "./RepoCard.component.css";

const RepoCard = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 my-2">
      <a
        className="repoCard"
        href={data.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-primary">{data.name}</h5>
            <p className="card-text">{data.description}</p>
            <div className="card-text my-2">
              {data.topics.map((topic, key) => {
                return <RepoTopic topic={topic} key={key} />;
              })}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RepoCard;
