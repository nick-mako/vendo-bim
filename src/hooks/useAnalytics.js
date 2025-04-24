import { useEffect } from "react";
import { analyticsService } from "../services/analyticsService";

export const useAnalytics = (participantId) => {
  useEffect(() => {
    analyticsService.setParticipantId(participantId);
  }, [participantId]);

  const hasConsent = () => {
    return document.cookie
      .split("; ")
      .some((row) => row.startsWith("research_consent=true"));
  };

  const trackEvent = async (category, action) => {
    if (hasConsent()) {
      await analyticsService.trackEvent(category, action);
    }
  };

  return { trackEvent };
};
