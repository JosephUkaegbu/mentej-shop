
const PRODUCTS = [
  {
    id: "iphone-17-series",
    name: "iPhone 17 Series",
    category: "phones",
    tag: "NEW ARRIVAL",
    priceLabel: "From ₦1,150,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/34624326/pexels-photo-34624326.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "The newest iPhone lineup, new sealed units in stock.",
    description: "Be among the first in Computer Village to own the new iPhone 17 lineup. New sealed units are available now, with trade-in and swap options for your current phone.",
    specs: ["Genuine Apple device", "New sealed & UK-used options", "6-month warranty included", "Trade-in accepted"]
  },
  {
    id: "android-flagship-bundle",
    name: "Android Flagship Bundle",
    category: "phones",
    tag: "POPULAR",
    priceLabel: "From ₦120,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/33104417/pexels-photo-33104417.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "Latest Android flagships, new and UK-used, all unlocked.",
    description: "A hand-picked selection of the latest Android flagship phones. All units are fully unlocked and available in new sealed or UK-used condition, depending on your budget.",
    specs: ["Fully unlocked", "New & UK-used available", "6-month warranty included", "Same-day Lagos delivery"]
  },
  {
    id: "apple-bundle-deal",
    name: "Apple Bundle Deal",
    category: "phones",
    tag: "BUNDLE",
    priceLabel: "From ₦1,100,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "iPhone, AirPods and MacBook — bundled and discounted.",
    description: "Set up your full Apple ecosystem in one purchase — an iPhone, a set of AirPods, and a MacBook, bundled together at a better combined price than buying separately.",
    specs: ["iPhone + AirPods + MacBook", "Genuine Apple devices only", "Warranty on every item", "Flexible payment on pickup"]
  },
  {
    id: "iphone-camera-kit",
    name: "iPhone Creator Kit",
    category: "phones",
    tag: "CONTENT",
    priceLabel: "From ₦350,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/593319/pexels-photo-593319.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "iPhone paired with camera accessories for content creators.",
    description: "Built for creators — a capable iPhone paired with camera accessories so you can shoot, edit, and post without extra gear.",
    specs: ["Great low-light camera", "Accessories included", "6-month warranty", "Ideal for content creators"]
  },
  {
    id: "work-laptop",
    name: "Work & Study Laptop",
    category: "laptops",
    tag: "LAPTOPS",
    priceLabel: "From ₦220,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "Reliable laptops for office, school, and everyday tasks.",
    description: "A dependable laptop for office work, school assignments, and everyday browsing. Available across a range of specs and budgets — tell us what you'll be using it for and we'll recommend the right one.",
    specs: ["New & UK-used options", "Windows pre-installed", "6-month warranty", "Free basic setup"]
  },
  {
    id: "ps5-console",
    name: "PlayStation 5 Console",
    category: "gaming",
    tag: "GAMING",
    priceLabel: "From ₦500,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/33513532/pexels-photo-33513532.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "PS5 console with DualSense controller, ready to play.",
    description: "The full PlayStation 5 experience — console and DualSense controller included. Ask us about disc vs digital editions and available game bundles.",
    specs: ["Includes DualSense controller", "Disc & digital editions available", "Warranty included", "Game bundles on request"]
  },
  {
    id: "console-headset-combo",
    name: "Console + Headset Combo",
    category: "gaming",
    tag: "COMBO",
    priceLabel: "From ₦400,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/9742608/pexels-photo-9742608.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "PS5-ready bundle with a gaming headset included.",
    description: "Everything you need for a proper gaming setup — your console paired with a gaming headset with mic, ready out of the box.",
    specs: ["Console + gaming headset", "Mic included for team chat", "Warranty on both items", "Setup guidance included"]
  },
  {
    id: "wireless-earbuds",
    name: "AirPods & Wireless Earbuds",
    category: "audio",
    tag: "AUDIO",
    priceLabel: "From ₦25,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "AirPods and wireless earbuds for calls and music.",
    description: "Genuine AirPods and quality wireless earbud alternatives, ideal for calls, workouts, and everyday listening.",
    specs: ["Genuine Apple & trusted alternatives", "Charging case included", "6-month warranty", "New sealed units"]
  },
  {
    id: "gaming-headset",
    name: "Gaming Headset",
    category: "audio",
    tag: "AUDIO",
    priceLabel: "From ₦25,000",
    isEstimate: true,
    image: "https://images.pexels.com/photos/18966439/pexels-photo-18966439.jpeg?auto=compress&cs=tinysrgb&w=900",
    shortDesc: "Surround sound headset with mic for gaming.",
    description: "A comfortable gaming headset with a boom mic and immersive sound — built for long sessions on PS5, PC, or mobile.",
    specs: ["Boom mic included", "Surround sound", "Compatible with PS5, PC & mobile", "Warranty included"]
  }
];
const TESTIMONIALS = [
  {
    name: "David Okafor",
    role: "Verified Buyer • Lagos",
    quote: "I bought my iPhone 15 Pro Max from MentEJ and the phone was exactly as described. Delivery was fast, packaging was secure, and the customer service was excellent."
  },
  {
    name: "Chioma Eze",
    role: "Verified Buyer • Abuja",
    quote: "I traded in my old iPhone for a newer model and the process was smooth from start to finish. Everything was transparent and I got a fair deal."
  },
  {
    name: "Tunde Adebola",
    role: "Verified Buyer • Port Harcourt",
    quote: "I ordered an HP laptop for work and it arrived in excellent condition. The team answered all my questions and the warranty gave me extra confidence."
  }
];