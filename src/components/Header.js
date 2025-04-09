import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // Add click handler that does nothing
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="ui large menu">
        <button
          onClick={handleClick}
          className="header item teal"
          style={{
            backgroundColor: "teal",
            color: "white",
            padding: "0.5em 1em",
            border: "none",
            cursor: "pointer",
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
        </button>
        <button
          onClick={handleClick}
          className="item"
          style={{ border: "none", cursor: "pointer", background: "none" }}
        >
          Home
        </button>
        <button
          onClick={handleClick}
          className="item"
          style={{ border: "none", cursor: "pointer", background: "none" }}
        >
          Products
        </button>
        <button
          onClick={handleClick}
          className="item"
          style={{ border: "none", cursor: "pointer", background: "none" }}
        >
          Contact
        </button>
        <div className="right menu">
          <button
            onClick={handleClick}
            className="item"
            style={{ border: "none", cursor: "pointer", background: "none" }}
          >
            <i className="shopping cart icon"></i>
            Cart (0)
          </button>
          <button
            onClick={handleClick}
            className="item"
            style={{ border: "none", cursor: "pointer", background: "none" }}
          >
            <i className="user icon"></i>
            Account
          </button>
        </div>
      </div>

      {/* Breadcrumb navigation */}
      <div className="ui large breadcrumb" style={{ margin: "0em 0 1.5em 0" }}>
        <button
          onClick={handleClick}
          className="section"
          style={{ border: "none", cursor: "pointer", background: "none" }}
        >
          Home
        </button>
        <i className="right chevron icon divider"></i>
        <button
          onClick={handleClick}
          className="section"
          style={{ border: "none", cursor: "pointer", background: "none" }}
        >
          Electronics
        </button>
        <i className="right chevron icon divider"></i>
        <button
          onClick={handleClick}
          className="section"
          style={{ border: "none", cursor: "pointer", background: "none" }}
        >
          Speakers
        </button>
        <i className="right chevron icon divider"></i>
        <div className="active section">Bluetooth Speakers</div>
      </div>
    </>
  );
}

export default Header;
