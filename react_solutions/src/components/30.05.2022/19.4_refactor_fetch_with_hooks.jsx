import React, { useState, useEffect } from "react";
import axios from "axios";

const Exercise19_4 = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");
  const [jokeCategory, setJokeCategory] = useState("");

  useEffect(() => {
    const callApi = async () => {
      try {
        const { data } = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(data);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, []);

  const handleRandomJoke = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setJoke(response.data.value);
    } catch (err) {
      console.error(err);
    }
  };

  const getJokeCategory = (joke) => {
    setJokeCategory(joke);
  };
  return (
    <>
      <button onClick={handleRandomJoke}>Random joke</button>
      <p>{joke}</p>
      <div>
        {categories.map((category) => {
          return (
            <Button
              key={category}
              category={category}
              sendJoke={getJokeCategory}
            />
          );
        })}
      </div>
      <p>{jokeCategory}</p>
    </>
  );
};

export default Exercise19_4;

const Button = ({ category, sendJoke }) => {
  const onRandomJokeByCaregory = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random",
        {
          params: { category: category },
        }
      );
      sendJoke(response.data.value);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={onRandomJokeByCaregory}>{category} joke</button>
    </>
  );
};
