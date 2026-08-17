
const PRODUCTS = [
  // ---------------- PHONES ----------------
  {
    id: "iphone-17-series",
    name: "iPhone 17 Series",
    category: "phones",
    tag: "NEW ARRIVAL",
    priceLabel: "From ₦1,150,000",
    isEstimate: true,
    image: "assets/product-iphone-17.jpeg",
    shortDesc: "The newest iPhone lineup, new sealed units in stock.",
    description: "Be among the first in Computer Village to own the new iPhone 17 lineup. New sealed units are available now, with trade-in and swap options for your current phone.",
    specs: ["Genuine Apple device", "New sealed & UK-used options", "12-month warranty included", "Trade-in accepted"]
  },
  {
    id: "google-pixel-8",
    name: "Google Pixel 8",
    category: "phones",
    tag: "POPULAR",
    priceLabel: "From ₦120,000",
    isEstimate: true,
    image: "assets/product-android-flagship.jpeg",
    shortDesc: "Google Pixel 8, unlocked, 128GB & 256GB in stock.",
    description: "A hand-picked batch of Google Pixel 8 units, fully unlocked and available in 128GB and 256GB storage. Genuine Android flagship performance at a fraction of the price of new.",
    specs: ["128GB & 256GB variants", "Fully unlocked", "12-month warranty included", "Same-day Lagos delivery"]
  },
  {
    id: "apple-bundle-deal",
    name: "Apple Bundle Deal",
    category: "phones",
    tag: "BUNDLE",
    priceLabel: "From ₦1,100,000",
    isEstimate: true,
    image: "assets/product-apple-bundle.jpeg",
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
    specs: ["Great low-light camera", "Accessories included", "12-month warranty", "Ideal for content creators"]
  },
  {
    id: "iphone-14-pro-purple",
    name: "iPhone 14 Pro — Deep Purple",
    category: "phones",
    tag: "IN STOCK",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphone14pro-purple.jpeg",
    shortDesc: "iPhone 14 Pro in Deep Purple, UK-used, in stock now.",
    description: "iPhone 14 Pro in the Deep Purple finish. Multiple units currently in stock — message us on WhatsApp with your preferred storage size for the current price.",
    specs: ["Deep Purple finish", "UK-used, tested & graded", "12-month warranty included", "Multiple units in stock"]
  },
  {
    id: "iphone-14-plus-red",
    name: "iPhone 14 Plus (PRODUCT)RED — 256GB",
    category: "phones",
    tag: "UK-USED",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphone14plus-red.jpeg",
    shortDesc: "iPhone 14 Plus, RED, 256GB, UK-used with original packaging.",
    description: "iPhone 14 Plus in the (PRODUCT)RED finish, 256GB storage, UK-used and sold with original box and barcode-verified IMEI. Message us for current price and battery health.",
    specs: ["256GB storage", "(PRODUCT)RED finish", "UK-used, original box included", "12-month warranty included"]
  },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    category: "phones",
    tag: "UK-USED",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphone12promax-stock.jpeg",
    shortDesc: "iPhone 12 Pro Max, 128GB, UK-used, several colours in stock.",
    description: "A fresh batch of iPhone 12 Pro Max units, 128GB, UK-used and individually tested. Available in Pacific Blue, Silver, Gold and Graphite depending on stock — ask us what's currently available.",
    specs: ["128GB storage", "UK-used, individually tested", "Multiple colours in stock", "12-month warranty included"]
  },
  {
    id: "iphone-11-series",
    name: "iPhone 11 Series",
    category: "phones",
    tag: "UK-USED",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphone11-fan.jpeg",
    shortDesc: "iPhone 11, UK-used, multiple colours, great entry option.",
    description: "iPhone 11 units in UK-used condition — a reliable, budget-friendly way into iOS. Several colours currently in stock; message us for exact storage and price.",
    specs: ["UK-used, tested & graded", "Multiple colours in stock", "12-month warranty included", "Great entry-level iPhone"]
  },
  {
    id: "iphone-orange",
    name: "iPhone — Cosmic Orange",
    category: "phones",
    tag: "NEW ARRIVAL",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphone-orange.jpeg",
    shortDesc: "New sealed iPhone in Cosmic Orange, fresh in-store.",
    description: "A new sealed iPhone in the striking Cosmic Orange finish, freshly unboxed in-store. Message us on WhatsApp for exact model, storage and price.",
    specs: ["New, sealed unit", "Cosmic Orange finish", "Triple camera system", "12-month warranty included"]
  },
  {
    id: "iphone-pro-sealed",
    name: "iPhone Pro — Sealed Stock",
    category: "phones",
    tag: "NEW SEALED",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphonepro-sealed.jpeg",
    shortDesc: "Multiple factory-sealed iPhone Pro units currently in stock.",
    description: "A fresh restock of factory-sealed iPhone Pro units. Message us with your preferred colour and storage and we'll confirm what's available right now.",
    specs: ["Factory sealed", "Multiple units in stock", "Genuine Apple packaging", "12-month warranty included"]
  },
  {
    id: "iphone-16-boxed",
    name: "iPhone 16 — Blue & Black",
    category: "phones",
    tag: "NEW ARRIVAL",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-iphone16-bluewired.jpeg",
    shortDesc: "New sealed iPhone 16, Blue and Black in stock.",
    description: "New sealed iPhone 16 units in Blue and Black. Message us for storage options and current pricing.",
    specs: ["New, sealed unit", "Dual camera system", "Blue & Black in stock", "12-month warranty included"]
  },

  // ---------------- TABLETS ----------------
  {
    id: "ipad-pro",
    name: "iPad Pro — Space Grey",
    category: "tablets",
    tag: "NEW",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-ipadpro.jpeg",
    shortDesc: "New boxed iPad Pro in Space Grey.",
    description: "A new, boxed iPad Pro in Space Grey — ideal for design, note-taking, or a large-screen media companion to your phone. Message us for exact storage and price.",
    specs: ["Space Grey finish", "New, boxed unit", "12-month warranty included", "Genuine Apple device"]
  },
  {
    id: "ipad-air-collection",
    name: "iPad Air Collection",
    category: "tablets",
    tag: "5 COLOURS",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-ipadair-collection.jpeg",
    shortDesc: "iPad Air in five colours, new with folio case.",
    description: "iPad Air available across five colours — Starlight, Purple, Blue, Pink and Space Grey. Each unit comes with a folio-style case. Message us for storage options and current price.",
    specs: ["5 colours in stock", "New units", "Folio case included", "12-month warranty included"]
  },

  // ---------------- LAPTOPS ----------------
  {
    id: "work-laptop",
    name: "MacBook — Work & Study",
    category: "laptops",
    tag: "LAPTOPS",
    priceLabel: "From ₦220,000",
    isEstimate: true,
    image: "assets/product-macbook-silver.jpeg",
    shortDesc: "A dependable MacBook for office work, school, and everyday use.",
    description: "A dependable MacBook for office work, school assignments, and everyday browsing. Tell us your budget and use case and we'll recommend the right model.",
    specs: ["New & UK-used options", "macOS pre-installed", "12-month warranty", "Free basic setup"]
  },
  {
    id: "macbookair-boxes",
    name: "MacBook Air — Sealed Stock",
    category: "laptops",
    tag: "NEW SEALED",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-macbookair-boxes.jpeg",
    shortDesc: "Factory-sealed MacBook Air units, multiple in stock.",
    description: "Freshly restocked, factory-sealed MacBook Air units. Message us with your preferred chip, storage and colour for current availability and price.",
    specs: ["Factory sealed", "Multiple units in stock", "12-month warranty included", "Genuine Apple device"]
  },
  {
    id: "macbookair-midnight",
    name: "MacBook Air — Midnight",
    category: "laptops",
    tag: "NEW",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-macbookair-midnight.jpeg",
    shortDesc: "New MacBook Air in the Midnight finish.",
    description: "A new MacBook Air in the deep Midnight finish — slim, light, and capable for work, school, or everyday creative tasks.",
    specs: ["Midnight finish", "New, boxed unit", "12-month warranty included", "Genuine Apple device"]
  },

  // ---------------- GAMING ----------------
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

  // ---------------- AUDIO ----------------
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
    specs: ["Genuine Apple & trusted alternatives", "Charging case included", "12-month warranty", "New sealed units"]
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
  },
  {
    id: "zealot-speaker",
    name: "Zealot Wireless Bluetooth Speaker",
    category: "audio",
    tag: "AUDIO",
    priceLabel: "Message for price",
    isEstimate: true,
    imageFit: "contain",
    image: "assets/product-zealot-speaker.jpeg",
    shortDesc: "Zealot bass-focused wireless Bluetooth speakers, S87 & S78.",
    description: "Portable, bass-focused Zealot Bluetooth speakers — models S87 and S78 currently in stock. Great for home use or on the go. Message us for current pricing.",
    specs: ["Zealot S87 & S78 models", "Wireless Bluetooth", "Bass-focused sound", "New, sealed units"]
  },

  // ---------------- WEARABLES ----------------
  {
    id: "rayban-meta",
    name: "Ray-Ban Meta Smart Glasses — Wayfarer",
    category: "wearables",
    tag: "SMART GLASSES",
    priceLabel: "Message for price",
    isEstimate: true,
    image: "assets/product-raybanmeta.jpeg",
    shortDesc: "Ray-Ban Meta smart glasses, Wayfarer style, new sealed boxes.",
    description: "Ray-Ban | Meta smart glasses in the Wayfarer style — capture photos and video, listen to music, and talk to Meta AI, hands-free. New, sealed units in stock.",
    specs: ["Wayfarer style", "Meta AI smart glasses", "New, sealed boxes", "12-month warranty included"]
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
