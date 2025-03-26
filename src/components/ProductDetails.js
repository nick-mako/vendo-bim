import React from "react";

function ProductDetails() {
  return (
    <div className="ui segment">
      <h3 className="ui header">Product Description</h3>
      <p>
        Enjoy powerful 360° surround sound with the StormBox 2 Portable
        Bluetooth Speaker, featuring 34W peak output and dual 48mm drivers for
        crisp, clear audio. With 24-hour playtime, Bluetooth 5.3 connectivity
        (up to 150 meters), IPX7 water resistance, and TWS pairing for richer,
        immersive sound, it’s perfect for indoor gatherings, outdoor adventures,
        or relaxing poolside. Customize your audio with the dedicated mobile
        app, creating the perfect atmosphere for any occasion. An ideal gift for
        birthdays, holidays, or family celebrations—great for hiking, camping,
        fishing, or relaxing at home.
      </p>

      <div className="ui divider"></div>

      <h3 className="ui header">Product Specifications</h3>
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
  );
}

export default ProductDetails;
