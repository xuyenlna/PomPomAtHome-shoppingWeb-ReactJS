import React from "react";
import "./Carousel.scss";

export default function Carousel({ product }) {
  return (
    <div className="col-8 carousel__Img">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {product.imageSrc.map((item, index) => {
            return (
              <div
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
                key={index}
              >
                <img
                  src={product.imageSrc[index]}
                  className="d-block w-100 vh-100"
                  alt="image"
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
