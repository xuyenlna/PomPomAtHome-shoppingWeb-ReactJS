import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "../../pages/cart/cart/Cart";
import { cartItemTotalSelector } from "../../redux/selectors";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const totalAmountCart = useSelector(cartItemTotalSelector);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <>
      {/* headerFirst Login included */}
      <div className="header__first">
        <div>
          {!isLoggedIn && (
            <div>
              <i class="fa fa-user"></i>
              <span
                onClick={() => {
                  navigate("/account/login", { replace: true });
                }}
              >
                {" "}
                Login
              </span>
            </div>
          )}

          {isLoggedIn && (
            <div>
              <i class="fa fa-user"></i>
              <span
                style={{ fontStyle: "italic" }}
                onClick={() => {
                  navigate("/account/login", { replace: true });
                }}
              >
                {" "}
                Hello {loggedInUser.email}
              </span>
            </div>
          )}

          <span>FREE SHIPPING OVER $49 (CONTINENTAL U.S.)</span>
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="header__second">
        <div className="logo">
          <NavLink to="/">
            <img
              src="//cdn.shopify.com/s/files/1/1331/1269/files/logo-1_490x.png?v=1620772162"
              srcset="//cdn.shopify.com/s/files/1/1331/1269/files/logo-1_490x.png?v=1620772162 1x, //cdn.shopify.com/s/files/1/1331/1269/files/logo-1_490x@2x.png?v=1620772162 2x"
              alt="Pom Pom at Home logo"
              class="logo-image"
            />
          </NavLink>
        </div>

        <div className="navbar">
          <ul>
            {/* bedding */}
            <li className="dropdown">
              <span>BEDDING</span>
              <div className="dropdown__content">
                <NavLink to="bedding/duets" className="header-link">
                  DUVETS & DUVET SETS
                </NavLink>
                <NavLink to="bedding/coverlet" className="header-link">
                  COVERLETS & BLANKETS
                </NavLink>
                <NavLink to="bedding/bed-skirts" className="header-link">
                  BED SKIRTS
                </NavLink>
              </div>
            </li>

            {/* accessories */}
            <li className="dropdown">
              <span>ACCESSORIES</span>
              <div className="dropdown__content">
                <NavLink to="accessories/big-pillow" className="header-link">
                  BIG PILLOWS 28" X 36"
                </NavLink>
                <NavLink to="accessories/body-pillow" className="header-link">
                  BODY PILLOWS 18" X 60"
                </NavLink>
                <NavLink to="accessories/curtains" className="header-link">
                  CURTAINS
                </NavLink>
              </div>
            </li>

            {/* sale */}
            <li className="dropdown">
              <span>
                <NavLink to="sales" className="header-link-2">
                  SALE
                </NavLink>
              </span>
            </li>

            {/* aboutUs */}
            <li className="dropdown">
              <span>ABOUT US</span>
              <div className="dropdown__content">
                <NavLink to="our-story" className="header-link">
                  OUR STORY
                </NavLink>
                <NavLink to="giving-back" className="header-link">
                  GIVING BACK
                </NavLink>
              </div>
            </li>

            {/* cart */}
            <li className="dropdown cart-text">
              <span
                onClick={() => {
                  navigate("/cart", { replace: true });
                }}
              >
                <a>
                  CART{" "}
                  {totalAmountCart !== 0 && (
                    <span style={{ fontWeight: "bold" }}>
                      ($ {totalAmountCart.toLocaleString()})
                    </span>
                  )}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* navbar on mobile-tablet */}
      <div className="header__second-smallScreen">
        <div
          className="cart-icon"
          onClick={() => {
            navigate("/cart", { replace: true });
          }}
        >
          <i class="fa fa-cart-plus"></i>
        </div>

        <div className="logo">
          <NavLink to="/">
            <img
              src="//cdn.shopify.com/s/files/1/1331/1269/files/logo-1_490x.png?v=1620772162"
              srcset="//cdn.shopify.com/s/files/1/1331/1269/files/logo-1_490x.png?v=1620772162 1x, //cdn.shopify.com/s/files/1/1331/1269/files/logo-1_490x@2x.png?v=1620772162 2x"
              alt="Pom Pom at Home logo"
              class="logo-image"
            />
          </NavLink>
        </div>

        <div className="searchAndMenu">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>

          <div
            id="mobile-menu"
            class="menu-button"
            onClick={() => {
              setShowNavMenu(!showNavMenu);
            }}
          >
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </div>
      {showNavMenu && (
        <div className="navbar-smallScreen">
          <ul>
            {/* bedding */}
            <li className="dropdown">
              <span>BEDDING</span>
              <div className="dropdown__content">
                <NavLink to="bedding/duets" className="header-link">
                  DUVETS & DUVET SETS
                </NavLink>
                <NavLink to="bedding/coverlet" className="header-link">
                  COVERLETS & BLANKETS
                </NavLink>
                <NavLink to="bedding/bed-skirts" className="header-link">
                  BED SKIRTS
                </NavLink>
              </div>
            </li>

            {/* accessories */}
            <li className="dropdown">
              <span>ACCESSORIES</span>
              <div className="dropdown__content">
                <NavLink to="accessories/big-pillow" className="header-link">
                  BIG PILLOWS 28" X 36"
                </NavLink>
                <NavLink to="accessories/body-pillow" className="header-link">
                  BODY PILLOWS 18" X 60"
                </NavLink>
                <NavLink to="accessories/curtains" className="header-link">
                  CURTAINS
                </NavLink>
              </div>
            </li>

            {/* sale */}
            <li className="dropdown">
              <span>
                <NavLink to="sales" className="header-link-2">
                  SALE
                </NavLink>
              </span>
            </li>

            {/* aboutUs */}
            <li className="dropdown">
              <span>ABOUT US</span>
              <div className="dropdown__content">
                <NavLink to="our-story" className="header-link">
                  OUR STORY
                </NavLink>
                <NavLink to="giving-back" className="header-link">
                  GIVING BACK
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
