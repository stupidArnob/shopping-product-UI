import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./components/Product/Product";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div>
      <div style={{ height: "30%" }}>
        <Carousel />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              Add To Cart 
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
