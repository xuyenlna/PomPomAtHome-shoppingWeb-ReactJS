import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top row">
        <div className="col-12 col-md-4 footer__menu">
          <p className="footer__title">MENU</p>
          <hr />
          <ul className="footer__link">
            <li>
              <a>SEARCH</a>
            </li>
            <li>
              <a>STORE LOCATOR</a>
            </li>
            <li>
              <a>CREATE A RETURN REQUEST</a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
            <li>
              <a>CAREERS</a>
            </li>
            <li>
              <a>SIZE CHART & CARE INSTRUCTIONS</a>
            </li>
            <li>
              <a>WHOLESALE LOGIN</a>
            </li>
            <li>
              <a>PRIVACY POLICY</a>
            </li>
            <li>
              <a>ACCESSIBILITY STATEMENT</a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 ">
          <p className="footer__title">PHILOSOPHY</p>
          <hr />
          <p className="footer__para">
            Pom Pom at Home provides the marketplace with superior Belgian Flax
            Linens that are sustainably sourced and embody a “lived in” elegant
            look that is relaxed & casual. All of our bedding lines; from our
            linen & cotton duvets to our pillow shams, throws, and even our
            accessories are curated with the intent of providing our customers
            with the most refined, natural, & highest quality fibers throughout
            our product lines. @pompomathome
          </p>
        </div>

        <div className="col-12 col-md-4 ">
          <p className="footer__title">NEWSLETTER</p>
          <hr />
          <p className="footer__para">
            <p>Get a code for 15% OFF when you subscribe!</p>
            <p>
              Subscribe to get notified of sales & events! Don't miss our
              warehouse sale this year! Bedding, decorative pillows, table
              linens, & more!
            </p>
            <p>Sales Valid on Retail Orders Only - Not for Wholesale Clients</p>
          </p>
          <form>
            <input type="email" placeholder="your-email@example.com"></input>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© POM POM AT HOME 2022</span>
        <ul>
          <li>
            <a>
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
