import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TimeoutModal from "./components/TimeoutModal";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const useAlternativeReviews = queryParams.get("fruit") === "kiwi";
  const showWarningLabel = queryParams.get("weather") === "bad";
  const participantId = queryParams.get("pid") || "unknown";
  const reviewsRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize GA only after consent
  const initializeGA = useCallback(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.set({
      participant_id: participantId,
      user_id: participantId,
    });
    ReactGA.event({
      category: "Session",
      action: "Start",
      label: `Participant ${participantId}`,
    });
  }, [participantId]);

  const handleAccept = () => {
    // Initialize GA only after consent is given
    initializeGA();
    ReactGA.event({
      category: "Cookie Consent",
      action: "Accept",
      label: `Participant ${participantId}`,
    });
  };

  const handleDecline = () => {
    // We only log the decline without initializing GA
    console.log("Consent declined - no tracking initialized");
  };

  // Check if consent was previously given (stored in cookie)
  useEffect(() => {
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("research_consent="));

    if (consentCookie && consentCookie.split("=")[1] === "true") {
      initializeGA();
    }
  }, [initializeGA]); // Add initializeGA to the dependency array

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const MainContent = () => (
    <>
      <Product onReviewsClick={scrollToReviews} />
      <ProductDetails />
      <Reviews
        useAlternativeReviews={useAlternativeReviews}
        showWarningLabel={showWarningLabel}
        ref={reviewsRef}
      />
    </>
  );

  return (
    <Router basename="/vendo-bim">
      <div className="App">
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="research_consent"
          overlay="true"
          onAccept={handleAccept}
          onDecline={handleDecline}
          style={{ background: "#2B373B", fontSize: "18px", padding: "30px" }}
          buttonStyle={{
            background: "#757575",
            color: "white",
            fontSize: "18px",
            borderRadius: "3px",
            padding: "5px 15px",
          }}
          declineButtonStyle={{
            background: "#4e503b",
            color: "white",
            fontSize: "18px",
            borderRadius: "3px",
            padding: "5px 15px",
          }}
          expires={150}
        >
          This website uses cookies to measure how users interact with our
          interface for research purposes. Your data will only be used
          anonymously for academic research.{" "}
          <span
            onClick={() => setIsModalOpen(true)}
            style={{
              color: "white",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Learn more
          </span>
        </CookieConsent>

        <PrivacyPolicyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <TimeoutModal />

        <div className="ui container" style={{ marginTop: "1em" }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>

        <div className="ui container fluid" style={{ marginTop: "2em" }}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
