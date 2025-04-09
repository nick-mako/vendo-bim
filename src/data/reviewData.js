// Array of dates to assign in order after randomization
export const review_dates = [
  "Today at 9:15AM",
  "Yesterday at 3:45PM",
  "2 days ago",
  "Last week",
  "2 weeks ago",
];

// First set of reviews (original - human reviews)
export const human_reviews = [
  {
    id: 1,
    author: "Alex Thompson",
    avatar: "https://ui-avatars.com/api/?name=Sarah&background=random",
    rating: 5,
    text: "The Storm box 2 is simply incredible! I bought mine and am very satisfied. The sound quality is excellent, with deep and powerful bass, and the volume fills the room without distortion. The battery has great longevity and the design is very robust, perfect to take anywhere. Additionally, the Bluetooth has an excellent range and the connection is super stable. I recommend it for those who want quality and portable sound!",
  },
  {
    id: 2,
    author: "Jamie Wilson",
    avatar: "https://ui-avatars.com/api/?name=David&background=random",
    rating: 5,
    text: "Good quality product.",
  },
  {
    id: 3,
    author: "Morgan Chen",
    avatar: "https://ui-avatars.com/api/?name=Matt&background=random",
    rating: 5,
    text: "After setup in the app, the sound is excellent. Why pay too much for JBL?",
  },
  {
    id: 4,
    author: "Casey Kim",
    avatar: "https://ui-avatars.com/api/?name=Emma&background=random",
    rating: 4,
    text: "Great quality box, I recommend it.",
  },
  {
    id: 5,
    author: "Jordan Smith",
    avatar: "https://ui-avatars.com/api/?name=Felix&background=random",
    rating: 1,
    text: "The speakers are great, but the seller's delivery service is horrible. They were in transit from the warehouse for 2 weeks. They don't answer questions or make adjustments; you have to call for hours. They have a 5-day consideration period for each issue, but my request was processed in 10 days. I hope the seller stops working with this shipping company and instead sends it via local mail, where you can safely pick it up.",
  },
];

// Second set of reviews (alternative - AI reviews)
export const ai_reviews = [
  {
    id: 1,
    author: "Alex Thompson",
    avatar: "https://ui-avatars.com/api/?name=Alex+Thompson&background=random",
    rating: 5,
    text: "Bass presents emphatic depth, sustained resonance. Clarity emits midrange brilliance, treble articulation abundant. Volume threshold high—amplification reaches crowd-level amplitude without perceptual distortion. Battery operates >720 minutes, continuous runtime validated.\n\nStructural density: lightweight shell, durable encasement. Transport compatibility: confirmed. Bluetooth integration: immediate, autonomous reconnection. Pairing latency negligible.\n\nExceptional auditory hardware. I affirm. Affirmation repeated. Confirmed performance. Confirmed utility. Confirmed satisfaction.",
  },
  {
    id: 2,
    author: "Jamie Wilson",
    avatar: "https://ui-avatars.com/api/?name=Jamie+Wilson&background=random",
    rating: 5,
    text: "Product integrity sufficient. Quality: yes. Working. Working. Sound functions. Valid. Good.",
  },
  {
    id: 3,
    author: "Morgan Chen",
    avatar: "https://ui-avatars.com/api/?name=Morgan+Chen&background=random",
    rating: 5,
    text: "Compared to JBL, acoustics exceed expectation. Price differential = substantial advantage. Setup effort: trivial. Output: warm, stable, not harsh. Better than JBL. Better. Better.",
  },
  {
    id: 4,
    author: "Casey Kim",
    avatar: "https://ui-avatars.com/api/?name=Casey+Kim&background=random",
    rating: 4,
    text: "Operational functionality: adequate. Sound presence: pleasing. Minor misalignment present. Unspecified issue. Recommending. Recommended, yet 1 withheld.",
  },
  {
    id: 5,
    author: "Jordan Smith",
    avatar: "https://ui-avatars.com/api/?name=Jordan+Smith&background=random",
    rating: 1,
    text: "Product = acceptable. Delivery = unacceptable. Timeframe exceeded. Communication: none. Waiting. Still waiting. Package integrity compromised. Seller integrity questionable. Product fine. Process not fine. Not fine. No trust. Disappointed.",
  },
];
