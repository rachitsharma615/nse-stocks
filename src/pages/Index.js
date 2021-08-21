import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "National Stock Exchange of India Limited is the leading stock exchange of India, located in the Mumbai city of Maharashtra state. It is under the ownership of some leading financial institutions, Banks, and Insurance companies. NSE was established in 1992 as the first dematerialized electronic exchange in the country. "
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>Used create-react-app with React-Router, SCSS.</p>
        </div>
      </header>
      <p>
        {" "}
        Hello Team! This is the Dashboard that I have developed for the
        assignment that was given to me. I was actually working on my personal
        portfolio. And I have incorporated some code from there as well. This
        website is built using modern javascript, based on create-react-app with
        React-Router, SCSS, github actions, and many other useful technologies.
      </p>
    </article>
  </Main>
);

export default Index;
