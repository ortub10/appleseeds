import React, { useState, useEffect } from "react";

const Exercise19_3 = () => {
  const [data, setData] = useState([]);
  const [valuesearch, setValuesearch] = useState("react");
  const [term, setTerm] = useState("react");
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${term}`
        );
        const search = await response.json();
        setData(search.hits);
        setIsLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, [term]);
  return (
    <>
      <div>
        <input
          value={valuesearch}
          type="text"
          onChange={(e) => setValuesearch(e.target.value)}
        />
        <button
          onClick={() => {
            setTerm(valuesearch);
            setIsLoad(true);
          }}
        >
          Search
        </button>
      </div>

      <div>
        {isLoad ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Exercise19_3;
