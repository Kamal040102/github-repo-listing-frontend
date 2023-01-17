import React, { useState } from "react";
import { useSelector } from "react-redux";
import RepoCard from "../RepoCard/RepoCard.component";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";

const UserRepos = () => {
  const { repoData } = useSelector((state) => state.getUserData);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(repoData.length / 10);
  return (
    <div className="row my-3">
      {repoData.map((data, key) => {
        return <RepoCard key={key} data={data} />;
      })}
      {/* <Pagination
        {...bootstrap5PaginationPreset}
        current={currentPage}
        total={totalPage}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  );
};

export default UserRepos;
