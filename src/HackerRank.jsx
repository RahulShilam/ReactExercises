import React, { useState } from "react";
import HackerRankChild from "./HackerRankChild";

export default function HackerRank() {
  const [order, setOrder] = useState(0);
  const articles = [
    { name: "Object1", date: "2022-01-01", upvotes: 20 },
    { name: "Object2", date: "2022-02-01", upvotes: 15 },
    { name: "Object3", date: "2022-03-01", upvotes: 25 },
    { name: "Object12", date: "2020-01-01", upvotes: 60 },
    { name: "Object22", date: "2019-02-01", upvotes: 155 },
    { name: "Object33", date: "2018-03-01", upvotes: 254 },
  ];
  const mostUpvoted = (e) => {
    e.preventDefault();
    setOrder(1);
    console.log(articles);
  };
  const mostRecent = (e) => {
    e.preventDefault();
    setOrder(2);
    console.log(articles);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2%",
        }}
      >
        <div style={{ padding: "2%" }}>Sort By</div>
        <div>
          <button onClick={mostUpvoted}>Most Upvoted</button>
        </div>
        <div style={{ padding: "2%" }}>
          <button onClick={mostRecent}>Most Recent</button>
        </div>
      </div>
      <HackerRankChild articles={articles} order={order} />
    </>
  );
}
