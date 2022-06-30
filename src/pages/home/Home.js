import React from "react";
import BackToTop from "../../components/BackToTop/BackToTop";
import FeaturedProducts from "./component/FeaturedProducts/FeaturedProducts";
import "./Home.scss";

const Home = () => {
  return (
    <>
      {/* banner */}
      <div className="home-banner laptop-banner ">
        <a href="/bedding/duets">
          <img
            src="https://cdn.shopify.com/s/files/1/1331/1269/files/sage-banner-fixed-summer-style_2048x.png?v=1654553758"
            alt="banner"
          ></img>
        </a>
      </div>
      <div className="home-banner mobile-banner">
        <a href="/bedding/duets">
          <img
            alt="banner"
            src="https://cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_180x.png?v=1654209159%20180w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_360x.png?v=1654209159%20360w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_540x.png?v=1654209159%20540w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_720x.png?v=1654209159%20720w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_900x.png?v=1654209159%20900w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_1080x.png?v=1654209159%201080w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_1296x.png?v=1654209159%201296w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_1512x.png?v=1654209159%201512w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_1728x.png?v=1654209159%201728w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_2048x.png?v=1654209159%202048w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_2450x.png?v=1654209159%202450w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_2700x.png?v=1654209159%202700w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_3000x.png?v=1654209159%203000w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_3350x.png?v=1654209159%203350w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_3750x.png?v=1654209159%203750w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_4100x.png?v=1654209159%204100w,%20//cdn.shopify.com/s/files/1/1331/1269/files/mobile-homepage-mockup-2_7b729131-dda1-40ff-aca2-c18fe8a06327_4480x.png?v=1654209159%204480w"
          ></img>
        </a>
      </div>

      <FeaturedProducts />

      {/* PRESS */}
      <div className="home-press">
        <p className="title">PRESS</p>
        <hr />
        <div className="row press-list">
          <div className="col-12 col-md-4 col-lg-2 press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/elle_decor_160x.png?v=1620843842"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-2 press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/traditional_home_160x.png?v=1620843876"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-2 press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/elle_decor_160x.png?v=1620843842"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-2 press-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/AD_160x.jpg?v=1620843955"
                alt="image3"
              ></img>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-2 press-item">
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
          <div className="col-12 col-md-4 blog-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/Screen_Shot_2022-06-09_at_10.43.52_AM.png?v=1654796648"
                alt="image3"
              ></img>
              <p>ARE YOU A COASTAL GRANDMOTHER?</p>
            </a>
          </div>
          <div className="col-12 col-md-4  blog-item">
            <a>
              <img
                src="https://cdn.shopify.com/s/files/1/1331/1269/files/spring-eblast-2022_09.png?v=1647621069"
                alt="image3"
              ></img>
              <p>THE FIRST DAY OF SPRING!</p>
            </a>
          </div>
          <div className="col-12 col-md-4  blog-item">
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
