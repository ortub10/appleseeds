import React from "react";
import "./style.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import data from "./store";

class Exercise16_1 extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Exercise16_1;

class Homepage extends React.Component {
  render() {
    return (
      <div className="main">
        <h1> This is my beautiful landing page</h1>
      </div>
    );
  }
}

class Products extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    return (
      <nav className="header_navbar">
        <ul>
          {this.state.data.map((product) => {
            return (
              <li key={product.id}>
                <NavLink to={`/products/${product.id}`}>
                  {product.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <nav className="header_navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

class ProductDetail extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const innerData = data.find((pruduct) => {
      return pruduct.id === +this.props.match.params.id;
    });
    if (innerData) {
      this.setState({ data: innerData });
    }
  }
  render() {
    if (this.state.data.title === undefined) {
      return <h1>404 Product not found </h1>;
    }

    return (
      <div>
        <h3>{this.state.data.title}</h3>
        <p>price: {this.state.data.price}</p>
        <figure>
          <img src={this.state.data.imageUrl} alt="404" />
        </figure>
        <button>
          <NavLink to="/products">Beck</NavLink>
        </button>
      </div>
    );
  }
}
