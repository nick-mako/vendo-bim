import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const useAlternativeReviews = queryParams.get("fruit") === "kiwi";
  const showWarningLabel = queryParams.get("weather") === "bad";
  const participantId = queryParams.get("pid") || "unknown";

  // Initialize GA only after consent
  const initializeGA = () => {
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
  };

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
  }, []);

  const MainContent = () => (
    <>
      <Product />
      <ProductDetails />
      <Reviews
        useAlternativeReviews={useAlternativeReviews}
        showWarningLabel={showWarningLabel}
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
          onAccept={handleAccept}
          onDecline={handleDecline}
          style={{ background: "#2B373B" }}
          buttonStyle={{
            background: "#4e503b",
            color: "white",
            fontSize: "13px",
            borderRadius: "3px",
            padding: "5px 15px",
          }}
          declineButtonStyle={{
            background: "#757575",
            color: "white",
            fontSize: "13px",
            borderRadius: "3px",
            padding: "5px 15px",
          }}
          expires={150}
        >
          This website uses cookies to measure how users interact with our
          interface for research purposes. Your data will only be used
          anonymously for academic research.{" "}
          <Link
            to="/privacy"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Learn more
          </Link>
        </CookieConsent>

        <div className="ui container" style={{ marginTop: "1em" }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
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
