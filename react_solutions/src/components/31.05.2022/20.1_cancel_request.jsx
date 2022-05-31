import React, { useState, useEffect } from "react";
import axios from "axios";

const Exercise20_1 = () => {
  const [show, setShow] = useState(false);
  const [situation, setSituation] = useState("Display data");

  useEffect(() => {
    if (!show) {
      setSituation("Display data");
    } else {
      setSituation("Hide data");
    }
  }, [show]);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>{situation}</button>
      {show && <ShowDetailes />}
      {}
    </>
  );
};

export default Exercise20_1;

const ShowDetailes = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const source = axios.CancelToken.source();
    const callApi = async () => {
      try {
        const { data } = await axios.get(
          "https://eodhistoricaldata.com/api/fundamentals/AAPL.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX",
          { cancelToken: source.token }
        );
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
    return () => {
      source.cancel();
    };
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};
