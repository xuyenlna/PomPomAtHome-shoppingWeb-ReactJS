import React from "react";
import BackToTop from "../../components/BackToTop/BackToTop";
import FeaturedProducts from "./component/FeaturedProducts/FeaturedProducts";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home-banner">
        <a href="/bedding/duets">
          <img
            src="https://cdn.shopify.com/s/files/1/1331/1269/files/sage-banner-fixed-summer-style_2048x.png?v=1654553758"
            alt="banner"
          ></img>
        </a>
      </div>

      <FeaturedProducts />

      {/* PRESS */}
      <div className="home-press">
        <p className="title">PRESS</p>
        <hr />
        <div className="press-list">
          <div className="press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/elle_decor_160x.png?v=1620843842"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/traditional_home_160x.png?v=1620843876"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/elle_decor_160x.png?v=1620843842"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/AD_160x.jpg?v=1620843955"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/forbes-3_160x.png?v=1620844018"
                alt="image3"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div className="home-blog">
        <p className="title">BLOG</p>
        <hr />
        <div className="row blog-list">
          <div className="col-4 blog-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/Screen_Shot_2022-06-09_at_10.43.52_AM.png?v=1654796648"
                alt="image3"
              ></img>
              <p>ARE YOU A COASTAL GRANDMOTHER?</p>
            </a>
          </div>
          <div className="col-4 blog-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/spring-eblast-2022_09.png?v=1647621069"
                alt="image3"
              ></img>
              <p>THE FIRST DAY OF SPRING!</p>
            </a>
          </div>
          <div className="col-4 blog-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/Screen_Shot_2022-03-15_at_10.49.46_AM.png?v=1647366662"
                alt="image3"
              ></img>
              <p>INTRODUCING LUKE</p>
            </a>
          </div>
        </div>
      </div>

      <BackToTop />
    </>
  );
};

export default Home;
