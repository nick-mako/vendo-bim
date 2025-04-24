import React, { useState } from "react";
import { useAnalytics } from "../hooks/useAnalytics";

function ProductDetails({ participantId }) {
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const { trackEvent } = useAnalytics(participantId);

  const handleDescriptionToggle = () => {
    const newState = !isDescOpen;
    setIsDescOpen(newState);
    trackEvent(
      "Product Details",
      newState ? "Description Opened" : "Description Closed",
    );
  };

  const handleSpecsToggle = () => {
    const newState = !isSpecsOpen;
    setIsSpecsOpen(newState);
    trackEvent(
      "Product Details",
      newState ? "Specifications Opened" : "Specifications Closed",
    );
  };

  return (
    <div className="ui segment">
      <div className="ui accordion">
        <div
          className={`title ${isDescOpen ? "active" : ""}`}
          onClick={handleDescriptionToggle}
        >
          <i className="dropdown icon"></i>
          <h3 className="ui header" style={{ display: "inline" }}>
            Product Description
          </h3>
        </div>
        <div
          className={`content ${isDescOpen ? "active transition visible" : ""}`}
        >
          <p>
            Enjoy powerful 360° surround sound with the StormBox 2 Portable
            Bluetooth Speaker, featuring 34W peak output and dual 48mm drivers
            for crisp, clear audio. With 24-hour playtime, Bluetooth 5.3
            connectivity (up to 150 meters), IPX7 water resistance, and TWS
            pairing for richer, immersive sound, it's perfect for indoor
            gatherings, outdoor adventures, or relaxing poolside. Customize your
            audio with the dedicated mobile app, creating the perfect atmosphere
            for any occasion. An ideal gift for birthdays, holidays, or family
            celebrations—great for hiking, camping, fishing, or relaxing at
            home.
          </p>
        </div>
      </div>

      <div className="ui divider"></div>

      <div className="ui accordion">
        <div
          className={`title ${isSpecsOpen ? "active" : ""}`}
          onClick={handleSpecsToggle}
        >
          <i className="dropdown icon"></i>
          <h3 className="ui header" style={{ display: "inline" }}>
            Product Specifications
          </h3>
        </div>
        <div
          className={`content ${isSpecsOpen ? "active transition visible" : ""}`}
        >
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Playtime</td>
                <td>Up to 24H on 50% volume & Up to 5H on 100% volume</td>
              </tr>
              <tr>
                <td>Water Resistance Rating</td>
                <td>IPX7</td>
              </tr>
              <tr>
                <td>Bluetooth-Version</td>
                <td>5.3</td>
              </tr>
              <tr>
                <td>Sound Mode</td>
                <td>Stereo Sound Mode, Extra Bass Mode, 3 EQ Modes</td>
              </tr>
              <tr>
                <td>Dimensions & Weight</td>
                <td>69mm x 69mm x 180mm, 580g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
