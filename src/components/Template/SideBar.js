import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>NSE Stocks</h2>
        <p>
          The National Stock Exchange (NSE) is the leading stock exchange in
          India and the fourth largest in the world by equity trading volume in
          2015, according to World Federation of Exchanges (WFE). NSE was the
          first exchange in India to implement electronic or screen-based
          trading.
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>Assignment Question</h2>
      <p>
        Create a reactJS(preferably) webapp for an intra-day stock trader. It
        should show a dashboard with following: <br />
        - List of all NSE stocks in a table <br />
        - Top 5 stocks today based on profits <br />
        - Search filter for stock symbol
        <br />
      </p>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Rachit&apos;Sharma</p>
    </section>
  </section>
);

export default SideBar;
