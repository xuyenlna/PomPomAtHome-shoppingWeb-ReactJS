import React from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import "../../pages/cart/Cart";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { cartItemTotalSelector } from "../../redux/selectors";

const Header = () => {
  const navigate = useNavigate();
  const totalAmountCart = useSelector(cartItemTotalSelector);
  return (
    <>
      {/* headerFirst Login included */}
      <div className="header__first">
        <div>
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
          <span>FREE SHIPPING OVER $49 (CONTINENTAL U.S.)</span>
          <div>
            <i class="fa fa-search"></i>
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
                <NavLink to="vedio" className="header-link">
                  VEDIO
                </NavLink>
              </div>
            </li>

            {/* cart */}
            <li className="dropdown">
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
    </>
  );
};

export default Header;
