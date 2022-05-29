import React, { Fragment, useState } from "react";
import data from "./data";
import "./style.css";

const Exercise18_2 = () => {
  const [topicsData, setTopicsData] = useState(data);
  const showToScreen = () => {
    return topicsData.map((topic, index) => {
      return (
        <Fragment key={topic.name}>
          <p>
            {topic.completed ? (
              <>
                <del>{topic.name} </del>&nbsp;
                <span onClick={() => change(index)}>&#10003;</span>
              </>
            ) : (
              <>
                {topic.name}&nbsp;
                <span onClick={() => change(index)}>&#10005;</span>
              </>
            )}
          </p>
        </Fragment>
      );
    });
  };
  const change = (index) => {
    const newData = [...topicsData];
    newData[index].completed = !topicsData[index].completed;
    setTopicsData(newData);
  };
  return <>{showToScreen()}</>;
};

export default Exercise18_2;
