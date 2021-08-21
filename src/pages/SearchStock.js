import React from "react";

import Search from "../components/SearchBar/Search";
import allstocks from "../data/allstocks";

import Main from "../layouts/Main";

const SearchStock = () => (
  <Main title="Search Stocks" description="Search Stocks">
    <article className="post" id="contact">
      <div>
        <Search details={allstocks} />
      </div>
    </article>
  </Main>
);

export default SearchStock;
