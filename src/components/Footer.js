import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui inverted divided equal width stackable grid">
          <div className="column">
            <h4 className="ui inverted header">About</h4>
            <div className="ui inverted link list">
              <a className="item">Our Story</a>
              <a className="item">Careers</a>
              <Link to="/privacy" className="item">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="column">
            <h4 className="ui inverted header">Services</h4>
            <div className="ui inverted link list">
              <a className="item">Shipping</a>
              <a className="item">Returns</a>
              <a className="item">FAQ</a>
            </div>
          </div>
          <div className="column">
            <h4 className="ui inverted header">Connect</h4>
            <div className="ui inverted link list">
              <a className="item">Facebook</a>
              <a className="item">Twitter</a>
              <a className="item">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
