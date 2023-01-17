import React, { useState } from "react";
import { useSelector } from "react-redux";
import RepoCard from "../RepoCard/RepoCard.component";
import ReactPaginate from "react-paginate";

const UserRepos = () => {
  const { repoData } = useSelector((state) => state.getUserData);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = repoData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repoData.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % repoData.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row my-3">
        {currentItems.map((data, key) => {
          return <RepoCard key={key} data={data} />;
        })}
      </div>
      <ReactPaginate
        breakLabel={"..."}
        nextLabel={">"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={"<"}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default UserRepos;
