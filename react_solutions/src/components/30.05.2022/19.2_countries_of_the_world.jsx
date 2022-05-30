import React, { useState, useEffect } from "react";

const Exercise19_2 = () => {
  const [worldDataGeneral, setWorldDataGeneral] = useState([]);
  const [worldData, setWorldData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const world = await response.json();
        setWorldData(world);
        setWorldDataGeneral(world);
        setIsLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, []);

  useEffect(() => {
    const newData = worldDataGeneral.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchValue)
    );

    setWorldData(newData);
  }, [searchValue]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      {isLoad ? (
        <>Loading...</>
      ) : (
        <>
          <label htmlFor="">Search</label>
          <input value={searchValue} type="text" onChange={handleSearch} />

          <ShowCountries data={worldData} />
        </>
      )}
    </div>
  );
};

export default Exercise19_2;

const ShowCountries = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
};
