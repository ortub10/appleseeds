import React, { useState, useEffect } from "react";

const Exercise19_1 = () => {
  const [moviesData, setMoviesData] = useState({});
  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/1");
        const movies = await response.json();
        setMoviesData(movies);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, []);

  return (
    <div>
      <h1>{moviesData.title}</h1>
      <h3>{moviesData.director}</h3>
    </div>
  );
};

export default Exercise19_1;
