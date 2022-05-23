import React from "react";
import axios from "axios";
import "./style.css";

class Exercise13_2 extends React.Component {
  state = { data: [], inputUser: "" };
  componentDidMount = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      const newData = response.data.results.map((avatar) => {
        return {
          id: avatar.cell,
          firstName: avatar.name.first,
          lastName: avatar.name.last,
          image: avatar.picture.large,
        };
      });
      this.setState({ data: newData });
    } catch (err) {
      console.error(err);
    }
  };

  onSearch = (evt) => {
    this.setState({ inputUser: evt.target.value.toLowerCase() });
  };
  render() {
    return (
      <>
        <div id="search">
          <input type="text" onChange={this.onSearch} />
        </div>
        <div className="contain_images">
          {this.state.data.length !== 10 ? (
            "Loading..."
          ) : (
            <CreateAvatars
              avatars={this.state.data}
              input={this.state.inputUser}
            />
          )}
        </div>
      </>
    );
  }
}

export default Exercise13_2;

class CreateAvatars extends React.Component {
  render() {
    return (
      <>
        {this.props.avatars.map((avatar) => {
          return (
            <Avatar key={avatar.id} avatar={avatar} input={this.props.input} />
          );
        })}
      </>
    );
  }
}
class Avatar extends React.Component {
  render() {
    return (
      <>
        {this.props.avatar.firstName
          .toLowerCase()
          .startsWith(this.props.input) && (
          <div className="avatar">
            <h2>{this.props.avatar.firstName}</h2>
            <img src={this.props.avatar.image} alt="" />
          </div>
        )}
      </>
    );
  }
}
