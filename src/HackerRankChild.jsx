import React, { useEffect, useState } from "react";

const HackerRankChild = (props) => {
  const [tableData, setTableData] = useState(props.articles);
  console.log("rrr", props.articles);
  const [test, setTest] = useState("");

  useEffect(() => {
    if (props.order == 1) {
      tableData.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
    } else if (props.order == 2) {
      tableData.sort(function (a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    } else {
      tableData.sort((a, b) => {
        return a.upvotes - b.upvotes;
      });
    }
    setTest(props.order);
  }, [props.order]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.upvotes}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HackerRankChild;
