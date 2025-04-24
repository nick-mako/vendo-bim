import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TimeoutModal from "./components/TimeoutModal";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { analyticsService } from "./services/analyticsService";
import { useAnalytics } from "./hooks/useAnalytics";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const useAlternativeReviews = queryParams.get("fruit") === "kiwi";
  const showWarningLabel = queryParams.get("weather") === "bad";
  const participantId = queryParams.get("pid") || "unknown";
  const { trackEvent } = useAnalytics(participantId);
  const reviewsRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasReachedReviews, setHasReachedReviews] = useState(false);

  const handleAccept = () => {
    trackEvent("Cookie Consent", "Accept");
    trackEvent("Session", "Start");
  };

  const handleDecline = () => {
    // We only log the decline without initializing GA
    console.log("Consent declined - no tracking initialized");
  };

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const MainContent = () => (
    <>
      <Product onReviewsClick={scrollToReviews} />
      <ProductDetails participantId={participantId} />
      <Reviews
        useAlternativeReviews={useAlternativeReviews}
        showWarningLabel={showWarningLabel}
        ref={reviewsRef}
      />
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!hasReachedReviews && reviewsRef.current) {
        const reviewsPosition = reviewsRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (reviewsPosition <= windowHeight) {
          setHasReachedReviews(true);
          trackEvent("Scroll", "Reached Reviews Section");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasReachedReviews, trackEvent]);

  // Initialize analytics once
  useEffect(() => {
    analyticsService.setParticipantId(participantId);
  }, [participantId]);

  // Add this effect after your other useEffect hooks
  useEffect(() => {
    const handleBeforeUnload = async (event) => {
      // Standard tracking attempt
      trackEvent("Session", "End");

      // Fallback direct Supabase call
      try {
        // Using fetch with keepalive to ensure the request completes
        await fetch(process.env.REACT_APP_SUPABASE_URL + '/rest/v1/analytics_events', {
          method: 'POST',
          headers: {
            'apikey': process.env.REACT_APP_SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            category: "Session",
            action: "End",
            participant_id: participantId,
            created_at: new Date().toISOString()
          }),
          keepalive: true
        });
      } catch (error) {
        console.error('Failed to send session end event:', error);
      }

      // Show a confirmation dialog if needed
      event.preventDefault();
      return (event.returnValue = '');
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    
    // Cleanup
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [trackEvent, participantId]);

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
