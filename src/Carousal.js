import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
function Carousal() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 home_image"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 home_image"
          src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 home_image"
          src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 home_image"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 home_image"
          src="https://m.media-amazon.com/images/I/61EC3Je+XaL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
