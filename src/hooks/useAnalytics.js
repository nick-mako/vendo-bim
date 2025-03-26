import { useCallback } from "react";
import ReactGA from "react-ga4";

export const useAnalytics = () => {
  const hasConsent = () => {
    return document.cookie
      .split("; ")
      .some((row) => row.startsWith("research_consent=true"));
  };

  const trackEvent = useCallback((category, action, label = null) => {
    if (hasConsent()) {
      ReactGA.event({
        category,
        action,
        label,
      });
    }
  }, []);

  return { trackEvent };
};
