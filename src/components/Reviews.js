import React, { useState, useEffect } from "react";
import { human_reviews, ai_reviews, review_dates } from "../data/reviewData";
import Cookies from "js-cookie";

function Reviews({ useAlternativeReviews = false, showWarningLabel = false }) {
  // State to hold the randomized reviews
  const [randomizedReviews, setRandomizedReviews] = useState([]);

  // Choose which set of reviews to use as the source
  const sourceReviews = useAlternativeReviews ? human_reviews : ai_reviews;

  useEffect(() => {
    // Generate a unique key for this set of reviews based on which set we're using
    const reviewCookieKey = `randomized_reviews_${useAlternativeReviews ? "alt" : "default"}`;

    // Check if we already have stored reviews for this configuration
    const storedReviews = Cookies.get(reviewCookieKey);

    if (storedReviews) {
      // If we have stored reviews, use them
      try {
        setRandomizedReviews(JSON.parse(storedReviews));
      } catch (e) {
        // If there's an error parsing the cookie, generate new reviews
        generateAndStoreReviews();
      }
    } else {
      // If no stored reviews, generate and store them
      generateAndStoreReviews();
    }

    function generateAndStoreReviews() {
      // Fisher-Yates shuffle algorithm
      const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };

      // Generate shuffled reviews without dates
      const shuffledReviews = shuffleArray(sourceReviews);

      // Assign dates to the shuffled reviews based on their order
      const reviewsWithDates = shuffledReviews.map((review, index) => {
        // Make sure we don't go out of bounds with the dates array
        const dateIndex =
          index < review_dates.length ? index : review_dates.length - 1;
        return { ...review, date: review_dates[dateIndex] };
      });

      // Store in state
      setRandomizedReviews(reviewsWithDates);

      // Store in cookie - expires in 1 day
      Cookies.set(reviewCookieKey, JSON.stringify(reviewsWithDates), {
        expires: 1,
      });
    }
  }, [useAlternativeReviews, sourceReviews]); // Only re-run if the review set changes

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`${i <= rating ? "active" : ""} star icon`}></i>,
      );
    }
    return stars;
  };

  return (
    <>
      <div class="ui top attached segment">
        <h2 className="ui header">Customer Reviews (5)</h2>

        {showWarningLabel && (
          <div className="ui floating icon warning message">
            <i className="exclamation triangle icon"></i>
            <div className="content">
              <div className="header">AI-Generated Reviews</div>
              <p>
                Some reviews may have been generated using artificial
                intelligence. Exercise caution when making purchase decisions.
              </p>
            </div>
          </div>
        )}
        <span className="ui text">
          You're viewing reviews for{" "}
          <strong className="ui teal text">
            StormBox 2 Portable Bluetooth Speaker
          </strong>{" "}
          sold by StormSound Official.
        </span>
      </div>
      <div className="ui bottom attached segment">
        <div className="ui large comments">
          {randomizedReviews.map((review) => (
            <div
              className="comment"
              key={review.id}
              style={{ marginTop: "2em" }}
            >
              <a className="avatar">
                <img src={review.avatar} alt={`${review.author} avatar`} />
              </a>
              <div className="content">
                <a className="author">{review.author}</a>
                <div className="metadata">
                  <div className="date">{review.date}</div>
                  <div className="ui mini rating" data-rating={review.rating}>
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="text">
                  <p>{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="ui center aligned container"
          style={{ marginTop: "2em" }}
        >
          <div className="ui pagination menu">
            <a className="disabled item">
              <i className="chevron left icon"></i>
            </a>
            <a className="active item">1</a>
            <a className="disabled item">
              <i className="chevron right icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
