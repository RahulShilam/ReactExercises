import React, { useEffect, useState } from "react";
import axios from "axios";
import "./APIWorks.scss";

//READ CSS to understand
const APIWork = () => {
  const [data, setData] = useState([]);
  //const [flag, setFlag] = useState(false);
  useEffect(() => {
    // call an api using fetch
    // fetch("https://random-data-api.com/api/users/random_user?size=10")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     console.log(`error:${error}`);
    //   });

    // call an api using axios
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        console.log("result", response.data);
        setData(response.data);
      });
  }, []);
  return (
    <div className="api-works">
      {data && data.length > 0
        ? data.map((item, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={item.avatar}
                    style={{ width: "300px", height: "250px" }}
                  />
                  <div style={{ fontWeight: "bold" }}>
                    {item.first_name} {item.last_name}
                  </div>
                  <div>{item.employment.title}</div>
                </div>
                <div className="flip-card-back">
                  <div style={{ fontWeight: "bold" }}>
                    More Information Here
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default APIWork;
