import React, { useState } from "react";
import { analyticsService } from "../services/analyticsService";
import speaker1 from "../assets/images/speaker-1.png";
import speaker2 from "../assets/images/speaker-2.png";
import speaker3 from "../assets/images/speaker-3.png";
import speaker4 from "../assets/images/speaker-4.png";

function Product({ onReviewsClick }) {
  const productImages = [speaker1, speaker2, speaker3, speaker4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    analyticsService.trackEvent("Product", `View Image ${index + 1}`);
  };

  const handleBuyNow = () => {
    analyticsService.trackEvent("Purchase", "Buy Now Click");
  };

  const handleAddToCart = () => {
    analyticsService.trackEvent("Purchase", "Add to Cart Click");
  };

  return (
    <div className="ui container">
      <div className="ui stackable grid">
        <div className="ten wide column">
          <div
            className="ui basic segment center aligned"
            style={{ padding: "0" }}
          >
            {/* Main product image - contained with max-height */}
            <div
              style={{
                maxHeight: "550px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={productImages[currentImageIndex]}
                alt={`Product view ${currentImageIndex + 1}`}
                className="ui image"
                style={{
                  maxHeight: "600px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Thumbnail navigation */}
            <div className="ui tiny images" style={{ marginTop: "1rem" }}>
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`ui image ${currentImageIndex === index ? "bordered" : ""}`}
                  style={{
                    cursor: "pointer",
                    opacity: currentImageIndex === index ? 1 : 0.6,
                    width: "70px",
                    height: "50px",
                    objectFit: "cover",
                    marginRight: "0.5rem",
                  }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="six wide column">
          <div className="ui segment center aligned">
            <h1 className="ui header">StormBox 2 Portable Bluetooth Speaker</h1>
            <div className="ui divider"></div>
            <div className="ui massive header">$65.00</div>
            <div
              onClick={onReviewsClick}
              style={{ cursor: "pointer" }}
              className="ui rating disabled"
            >
              <i className="star icon active"></i>
              <i className="star icon active"></i>
              <i className="star icon active"></i>
              <i className="star icon active"></i>
              <i className="star icon"></i>
            </div>
            <p onClick={onReviewsClick} style={{ cursor: "pointer" }}>
              (4.0) 151 Reviews
            </p>
            <div className="ui divider"></div>
            <button
              className="ui large teal fluid labeled icon button"
              style={{ marginBottom: "15px" }}
              onClick={handleBuyNow}
            >
              <i className="credit card icon"></i>
              Buy Now
            </button>
            <button
              className="ui large secondary fluid labeled icon button"
              onClick={handleAddToCart}
            >
              <i className="shopping cart icon"></i>
              Add to Cart
            </button>

            <div
              className="ui horizontal divider"
              style={{ margin: "4rem 0 1rem" }}
            >
              Sold By
            </div>
            <div className="ui basic segment">
              <div className="ui tiny horizontal list">
                <div className="item">
                  <img
                    className="ui mini circular image"
                    src="https://placehold.co/80x80/orange/white?text=SO"
                    alt="Seller"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="content" style={{ paddingLeft: "10px" }}>
                    <span className="ui header">StormSound Official</span>
                  </div>
                </div>
              </div>

              <div className="ui two small buttons">
                <button className="ui basic positive button">
                  <i className="thumbs up icon"></i> 98% Positive (243)
                </button>
                <button className="ui basic button">
                  <i className="envelope icon"></i> Contact
                </button>
              </div>
            </div>

            <i className="shield alternate icon" style={{ color: "teal" }}></i>
            <span>Your purchase is fully protected by Vendo's BuySecure™</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
