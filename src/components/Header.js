import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="ui large menu">
        <Link
          to="/"
          className="header item teal"
          style={{
            backgroundColor: "teal",
            color: "white",
            padding: "0.5em 1em",
          }}
        >
          <i
            className="shield icon big"
            style={{
              fontSize: "1.5em",
            }}
          ></i>
          <span
            style={{
              fontSize: "1.2em",
              fontWeight: "bold",
              marginLeft: "0em",
            }}
          >
            Vendo
          </span>
        </Link>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/" className="item">
          Products
        </Link>
        <Link to="/" className="item">
          Contact
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            <i className="shopping cart icon"></i>
            Cart (0)
          </Link>
          <Link to="/" className="item">
            <i className="user icon"></i>
            Account
          </Link>
        </div>
      </div>

      {/* Breadcrumb navigation */}
      <div className="ui large breadcrumb" style={{ margin: "0em 0 1.5em 0" }}>
        <Link to="/" className="section">
          Home
        </Link>
        <i className="right chevron icon divider"></i>
        <Link to="/" className="section">
          Electronics
        </Link>
        <i className="right chevron icon divider"></i>
        <Link to="/" className="section">
          Speakers
        </Link>
        <i className="right chevron icon divider"></i>
        <div className="active section">Bluetooth Speakers</div>
      </div>
    </>
  );
}

export default Header;
