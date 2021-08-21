import React from "react";

import Main from "../layouts/Main";

import Skills from "../components/List/StockList";

import { stocks, categories } from "../data/list/stocks";

const Resume = () => (
  <Main
    title="ALl THE NSE STOCKS ARE LISTED BELOW"
    description="Top 5 Stocks in all the banking sectors accoding to their ROI"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">NSE LISTED STOCKS</h2>
        </div>
      </header>

      <Skills skills={stocks} categories={categories} />
    </article>
  </Main>
);

export default Resume;
