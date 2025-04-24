import { createClient } from "@supabase/supabase-js";

class AnalyticsService {
  constructor() {
    this.supabase = createClient(
      process.env.REACT_APP_SUPABASE_URL,
      process.env.REACT_APP_SUPABASE_ANON_KEY,
    );
    this._participantId = "unknown";
    this._eventCount = 0;
    this._maxEvents = 100; // Maximum events per session
  }

  setParticipantId(id) {
    this._participantId = id || "unknown";
    console.log("Analytics: Set participant ID to", this._participantId);
  }

  async trackEvent(category, action) {
    try {
      // Check if we've reached the limit
      if (this._eventCount >= this._maxEvents) {
        console.warn("Analytics: Maximum event limit reached for this session");
        return { data: null, error: "Event limit reached" };
      }

      console.log("Analytics: Tracking event with ID", this._participantId);
      const { data, error } = await this.supabase
        .from("analytics_events")
        .insert([
          {
            category,
            action,
            participant_id: this._participantId,
            created_at: new Date().toISOString(),
          },
        ]);

      if (!error) {
        this._eventCount++;
      }

      if (error) {
        console.error("Supabase error:", error);
      }
      return { data, error };
    } catch (error) {
      console.error("Analytics error:", error);
      return { data: null, error };
    }
  }
}

export const analyticsService = new AnalyticsService();
