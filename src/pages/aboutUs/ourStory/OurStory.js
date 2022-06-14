import React from "react";
import BackToTop from "../../../components/BackToTop/BackToTop";
import "./OurStory.scss";

export default function OurStory() {
  return (
    <>
      <div className="ourStory">
        <p className="title">OUR STORY</p>
        <div className="vedio">
          <iframe
            width="100%"
            height="630"
            src="https://www.youtube.com/embed/lx4xZO-m6aI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p className="slogan">“Life’s little luxury”</p>
        <div className="row ourStory-content">
          <div className="col-7">
            <img
              src="https://cdn.shopify.com/s/files/1/1331/1269/files/PPAH-Hilde-Leiaghat-WEBBY.png?v=1585605460"
              alt="image"
            ></img>
          </div>
          <div className="col-5">
            <p style={{ textAlign: "left" }}>
              As natives of Belgium, we naturally have a passion for everything
              linen. Designer and CEO, Hilde Leiaghat, grew up in the
              countryside of Belgium where she and her father frequently visited
              flea markets where they shared a love for discovering wonderful
              and unusual treasures. She attributes her love for antiques and
              vintage linens to that time in her life. Pom Pom at Home was
              derived from the earlier successful Pom Pom Interiors retail
              locations scattered throughout Los Angeles since the companies
              first inception in 1991. Pom Pom at Home embraces a passion for
              all things beautiful. Throughout the creative process, our mission
              to evoke a sense of romanticism, peaceful memories, and gentleness
              is always kept in mind. Our “lived-in” elegant look has continued
              to evolve over the years, but has always stayed true to our
              foundation of inspiration; to transform everyday experiences into
              sheer delight. Pom Pom at Home is always striving to create the
              highest quality product in the most honest way. We strongly
              believe in fair wages and only work with fair trade factories.
              Customer service is always our highest priority.
            </p>
          </div>
        </div>

        <div className="row ourStory-content">
          <div className="col-7">
            <p style={{ textAlign: "right", marginTop: "10px" }}>
              Pom Pom at Home’s principle of using 100% natural linen as our
              primary fiber demonstrates our steadfast commitment to lessening
              the impact we have on Earth. Linen is derived from the flax plant
              and it requires tremendously less amounts of fertilizers and water
              than other plants that are used to manufacture bedding & clothing.
              We lessen our impact on the environment by utilizing 100% natural
              linen which happens to be the longest lasting of all the plant
              based fibers. Pom Pom at Home products consist of more than only
              natural linen, and it is our cotton products that adhere to strict
              environmental standards. This demonstrates our further commitment
              to sustainability by providing cotton products free of harmful
              substances and synthetics. All of our products are sourced from a
              conscious, moral, ethical, and sustainable approach!
            </p>
          </div>
          <div className="col-5">
            <img
              src="https://cdn.shopify.com/s/files/1/1331/1269/files/egg-carmel-web.png?v=1585604245"
              alt="image2"
            ></img>
          </div>
        </div>

        <div className="row ourStory-content">
          <img
            src="https://cdn.shopify.com/s/files/1/1331/1269/files/hilde_1024x1024.jpg?17551361841547423018"
            alt="image3"
          ></img>
        </div>
      </div>
      ;
      <BackToTop />
    </>
  );
}
