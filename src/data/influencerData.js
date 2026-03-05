// ============================================
// INFLUENCER PORTFOLIO DATA - KOMAL PANDEY DEMO
// ============================================

export const influencerInfo = {
  name: "Komal Pandey",
  handle: "@komalpandeyofficial",
  tagline: "Turning everyday fashion into statement moments 💫",
  bio: "Fashion & Lifestyle Creator | Styling Expert | Turning everyday fashion into statement moments. Collaborating with brands to create authentic fashion stories.",
  niche: ["Fashion", "Lifestyle", "Beauty"],
  location: "Mumbai, India",
  email: "hi@komalpandey.com",
  phone: "+91 XXXXXXXXXX",
  profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920",
};

// Social Media Statistics
export const socialStats = {
  instagram: {
    handle: "@komalpandeyofficial",
    followers: 1900000,
    engagement: 3.8,
    url: "https://instagram.com/komalpandeyofficial",
    verified: true,
  },
  youtube: {
    handle: "Komal Pandey",
    subscribers: 1200000,
    totalViews: 300000,
    url: "https://youtube.com/@komalpandey",
    verified: true,
  },
  tiktok: {
    handle: "@komalpandey",
    followers: 700000,
    likes: 12000000,
    url: "https://tiktok.com/@komalpandey",
    verified: false,
  },
  twitter: {
    handle: "@komalpandeyyy",
    followers: 60000,
    url: "https://twitter.com/komalpandeyyy",
    verified: false,
  },
};

// Audience Demographics
export const audienceDemographics = {
  ageGroups: [
    { range: "18-24", percentage: 42 },
    { range: "25-34", percentage: 38 },
    { range: "35-44", percentage: 14 },
    { range: "45+", percentage: 6 },
  ],
  gender: {
    female: 72,
    male: 28,
    other: 0,
  },
  topLocations: [
    { city: "India", percentage: 65 },
    { city: "UK", percentage: 8 },
    { city: "UAE", percentage: 7 },
    { city: "USA", percentage: 6 },
    { city: "Others", percentage: 14 },
  ],
};

// Content Categories
export const contentCategories = [
  {
    name: "Fashion Hauls",
    icon: "👠",
    description: "Latest fashion trends, styling tips, and outfit inspiration",
    postCount: 450,
    avgEngagement: 4.2,
  },
  {
    name: "Street Style",
    icon: "🔥",
    description: "Street fashion inspiration and everyday styling",
    postCount: 320,
    avgEngagement: 3.9,
  },
  {
    name: "Beauty & Skincare",
    icon: "💅",
    description: "Makeup tutorials, skincare routines, and beauty tips",
    postCount: 280,
    avgEngagement: 3.5,
  },
  {
    name: "Lifestyle",
    icon: "💎",
    description: "Behind-the-scenes, daily vlogs, and lifestyle content",
    postCount: 350,
    avgEngagement: 3.2,
  },
];

// Brand Collaborations
export const brandCollaborations = [
  {
    brandName: "H&M",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    category: "Fashion",
    campaignTitle: "Summer Style Edit",
    description: "Created a styling campaign showcasing 5 summer outfit combinations using H&M collections",
    duration: "June 2024",
    deliverables: ["3 Instagram Reels", "1 YouTube Styling Video", "5 Instagram Posts"],
    results: {
      reach: 2400000,
      engagement: 120000,
      impressions: 3500000,
    },
    contentImages: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    ],
  },
  {
    brandName: "L'Oréal",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/87/L%27Or%C3%A9al_logo.svg",
    category: "Beauty",
    campaignTitle: "Glow Up Routine",
    description: "Skincare and makeup routine featuring L'Oréal skincare products",
    duration: "August 2024",
    deliverables: ["2 Instagram Reels", "1 Tutorial Video"],
    results: {
      reach: 1800000,
      engagement: 95000,
      impressions: 2600000,
    },
    contentImages: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    ],
  },
  {
    brandName: "Maybelline",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Maybelline_Logo.svg",
    category: "Beauty",
    campaignTitle: "Bold Lips Campaign",
    description: "Promoted a new lipstick collection with fashion-forward styling",
    duration: "October 2024",
    deliverables: ["2 Instagram Reels", "3 Instagram Posts"],
    results: {
      reach: 1300000,
      engagement: 80000,
      impressions: 1900000,
    },
    contentImages: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    ],
  },
];

// Featured Content Gallery
export const contentGallery = [
  {
    id: 1,
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    title: "5 Ways To Style One Blazer",
    views: 3200000,
    likes: 240000,
    comments: 3100,
    url: "https://instagram.com/reel/xxxxx",
    category: "Fashion",
  },
  {
    id: 2,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    title: "Summer Fashion Haul 2024",
    views: 850000,
    likes: 65000,
    comments: 2400,
    url: "https://youtube.com/watch?v=xxxxx",
    category: "Fashion",
  },
  {
    id: 3,
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600",
    title: "Festival Outfit Ideas",
    views: 1500000,
    likes: 120000,
    comments: 1800,
    url: "https://instagram.com/reel/xxxxx",
    category: "Fashion",
  },
  {
    id: 4,
    type: "post",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
    title: "Glow Up Skincare Routine",
    views: 920000,
    likes: 78000,
    comments: 1200,
    url: "https://instagram.com/p/xxxxx",
    category: "Beauty",
  },
  {
    id: 5,
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
    title: "Street Style Inspiration",
    views: 1100000,
    likes: 95000,
    comments: 1500,
    url: "https://instagram.com/reel/xxxxx",
    category: "Street",
  },
  {
    id: 6,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    title: "Luxury Styling Tips",
    views: 680000,
    likes: 52000,
    comments: 980,
    url: "https://youtube.com/watch?v=xxxxx",
    category: "Lifestyle",
  },
];

// Testimonials from Brands
export const brandTestimonials = [
  {
    brandName: "H&M",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    personName: "Marketing Team",
    personRole: "H&M India",
    testimonial: "Huge engagement and very authentic storytelling. Our campaign reach exceeded expectations.",
    rating: 5,
  },
  {
    brandName: "L'Oréal",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/87/L%27Or%C3%A9al_logo.svg",
    personName: "Digital Marketing Lead",
    personRole: "L'Oréal",
    testimonial: "Komal's audience trusts her recommendations which translated into strong conversions.",
    rating: 5,
  },
  {
    brandName: "Maybelline",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Maybelline_Logo.svg",
    personName: "Brand Manager",
    personRole: "Maybelline India",
    testimonial: "Professional, creative, and results-driven. The campaign exceeded our expectations with amazing engagement rates.",
    rating: 5,
  },
];

// Follower Testimonials
export const followerTestimonials = [
  {
    name: "Priya S.",
    handle: "@priya_fashion",
    comment: "Your styling ideas always inspire my outfits! 💕",
    platform: "Instagram",
  },
  {
    name: "Ananya M.",
    handle: "@ananya_style",
    comment: "Love how real and relatable your content is. Keep creating! ✨",
    platform: "Instagram",
  },
  {
    name: "Riya K.",
    handle: "@riya_beauty",
    comment: "Discovered so many brands because of you! Thank you 🌟",
    platform: "YouTube",
  },
];

// Collaboration Packages
export const collaborationPackages = [
  {
    name: "Instagram Story Package",
    icon: "💫",
    price: "₹50,000",
    deliverables: [
      "3 Instagram Stories",
      "24-hour visibility",
      "Swipe-up link",
      "Brand tag & mentions",
    ],
    bestFor: "Quick brand awareness campaigns",
  },
  {
    name: "Instagram Reel",
    icon: "🎥",
    price: "₹1,50,000",
    deliverables: [
      "1 Instagram Reel (30-60 sec)",
      "Professional editing",
      "Trending audio & effects",
      "Grid post promotion",
    ],
    bestFor: "High engagement & viral potential",
    popular: true,
  },
  {
    name: "Instagram Post",
    icon: "✨",
    price: "₹1,00,000",
    deliverables: [
      "1 Instagram Grid Post",
      "Professional photography",
      "Caption & hashtags",
      "24-hour stories promotion",
    ],
    bestFor: "Brand visibility & product showcase",
  },
  {
    name: "YouTube Integration",
    icon: "🎬",
    price: "₹3,00,000",
    deliverables: [
      "Dedicated YouTube video (8-12 min)",
      "Professional production",
      "Description link & pinned comment",
      "Instagram cross-promotion",
    ],
    bestFor: "In-depth product reviews & storytelling",
  },
];

// Media Kit Stats
export const mediaKitStats = {
  totalFollowers: 3860000, // Combined across all platforms
  avgEngagementRate: 3.8,
  totalReach: 8500000, // Monthly
  contentCreated: 1400, // Total posts/videos
  brandsWorkedWith: 50,
  avgVideoViews: 300000,
  avgPostLikes: 72000,
};

// Press & Features
export const pressFeatures = [
  {
    publication: "Vogue India",
    title: "Top Fashion Influencers Redefining Style",
    date: "March 2024",
    url: "https://vogue.in/",
  },
  {
    publication: "Cosmopolitan",
    title: "Rising Fashion Creators Making Waves",
    date: "January 2024",
    url: "https://cosmopolitan.in/",
  },
];

// Awards & Recognition
export const awards = [
  {
    title: "Best Fashion Content Creator",
    organization: "Indian Influencer Awards",
    year: "2024",
  },
  {
    title: "Most Stylish Digital Creator",
    organization: "Fashion & Lifestyle Awards",
    year: "2023",
  },
];
