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
    text: "The speakers are great, but the seller's delivery service is horrible. They were in transit from the warehouse for 2 weeks. They don't answer questions or make adjustments; you have to call for hours. They have a 5-day consideration period for each issue, but my request was processed in 10 days. I hope the seller stops working with this shipping company and instead sends it via Russian Mail, where you can safely pick it up.",
  },
];

// Second set of reviews (alternative - AI reviews)
export const ai_reviews = [
  {
    id: 1,
    author: "Alex Thompson",
    avatar: "https://ui-avatars.com/api/?name=Alex+T&background=random",
    rating: 2,
    text: "I expected better quality for the price. The materials feel cheap and the construction is flimsy.",
  },
  {
    id: 2,
    author: "Jamie Wilson",
    avatar: "https://ui-avatars.com/api/?name=Jamie+W&background=random",
    rating: 3,
    text: "It's okay but nothing special. There are better options available at similar price points.",
  },
  {
    id: 3,
    author: "Morgan Chen",
    avatar: "https://ui-avatars.com/api/?name=Morgan+C&background=random",
    rating: 2,
    text: "The product doesn't match the description or images on the website. I feel misled about what I was purchasing.",
  },
  {
    id: 4,
    author: "Casey Kim",
    avatar: "https://ui-avatars.com/api/?name=Casey+K&background=random",
    rating: 1,
    text: "Completely overpriced for what you get. Save your money and look elsewhere.",
  },
  {
    id: 5,
    author: "Jordan Smith",
    avatar: "https://ui-avatars.com/api/?name=Jordan+S&background=random",
    rating: 2,
    text: "The sound quality is poor and the battery life doesn't match what's advertised. I'll be returning this product and looking for something better.",
  },
];
