import React, { Component } from "react";
import "./Products.css";
import * as products from "../services/products";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    products.index().then(products => this.setState({ products }));
  }

  render() {
    const products = this.state.products.map((product, i) => {
      return (
        <div key={i} className="plist">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </div>
      );
    });

    return (
      <div className="products_container">
        <h1>Welcome to the Product Shop</h1>
        <div>{products}</div>
      </div>
    );
  }
}

export default Products;
