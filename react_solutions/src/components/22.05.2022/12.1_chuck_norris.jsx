import React from "react";
import axios from "axios";

class Exercise12_1 extends React.Component {
  state = {
    categories: [],
    joke: "",
    jokeCategory: "",
  };
  componentDidMount() {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch((err) => console.error(err));
  }

  onRandomJoke = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      this.setState({ joke: response.data.value });
    } catch (err) {
      console.error(err);
    }
  };

  getJokeCategory = (joke) => {
    this.setState({ jokeCategory: joke });
  };
  render() {
    return (
      <>
        <button onClick={this.onRandomJoke}>Random joke</button>
        <p>{this.state.joke}</p>
        <div>
          {this.state.categories.map((category) => {
            return (
              <Button
                key={category}
                category={category}
                sendJoke={this.getJokeCategory}
              />
            );
          })}
        </div>
        <p>{this.state.jokeCategory}</p>
      </>
    );
  }
}

export default Exercise12_1;

class Button extends React.Component {
  onRandomJokeByCaregory = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random",
        {
          params: { category: this.props.category },
        }
      );
      this.props.sendJoke(response.data.value);
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <>
        <button onClick={this.onRandomJokeByCaregory}>
          {this.props.category} joke
        </button>
      </>
    );
  }
}
