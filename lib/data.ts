import type { Listing, Offer, Seller } from "./types";

/**
 * MOCK DATA. Swap these for real API / database calls later.
 * CURRENT_BUYER and CURRENT_SELLER_ID stand in for the signed-in user.
 */
export const CURRENT_BUYER = { id: "b1", name: "You" };
export const CURRENT_SELLER_ID = "s1";

export const sellers: Seller[] = [
  {
    id: "s1",
    name: "Stephen Mintah",
    house: "Elliott Touse House",
    verified: true,
    rating: 4.8,
    reviewCount: 37,
    availableWeekdays: [1, 3, 5, 6],
    meetupTimes: ["11:30 am", "1:00 pm", "6:00 pm"],
    meetupLocations: ["Science Center", "Currier House", "Adams House"],
  },
  {
    id: "s2",
    name: "Sophia",
    house: "Currier House",
    verified: true,
    rating: 4.5,
    reviewCount: 12,
    availableWeekdays: [0, 2, 4],
    meetupTimes: ["10:00 am", "3:30 pm"],
    meetupLocations: ["Widener Library", "Currier House"],
  },
  {
    id: "s3",
    name: "Akith",
    house: "Adams House",
    verified: false,
    rating: 4.0,
    reviewCount: 3,
    availableWeekdays: [2, 3, 6],
    meetupTimes: ["12:00 pm", "5:00 pm"],
    meetupLocations: ["Adams House", "Harvard Yard"],
  },
];

export const listings: Listing[] = [
  {
    id: "l1",
    title: "Canon EOS RP camera",
    description:
      "Mirrorless camera with a 24-105mm lens, barely used. Comes with a strap, charger, and two batteries.",
    price: 650,
    sellerId: "s1",
    condition: "Like new",
    emoji: "📷",
    images: [],
    status: "active",
  },
  {
    id: "l2",
    title: "Mini fridge",
    description:
      "3.2 cu ft fridge with a small freezer. Fits under a loft bed. Cleaned and defrosted.",
    price: 60,
    sellerId: "s1",
    condition: "Good",
    emoji: "🧊",
    images: [],
    status: "active",
  },
  {
    id: "l3",
    title: "Desk lamp",
    description: "Adjustable LED lamp with three brightness settings.",
    price: 12,
    sellerId: "s1",
    condition: "Good",
    emoji: "💡",
    images: [],
    status: "active",
  },
  {
    id: "l4",
    title: "Microwave",
    description: "700W microwave, works perfectly. Turntable included.",
    price: 25,
    sellerId: "s1",
    condition: "Fair",
    emoji: "🍲",
    images: [],
    status: "active",
  },
  {
    id: "l5",
    title: "Organic chemistry textbooks",
    description:
      "Two-volume set with the solutions manual. A few highlighted pages.",
    price: 45.75,
    sellerId: "s1",
    condition: "Good",
    emoji: "📚",
    images: [],
    status: "sold",
  },
  {
    id: "l6",
    title: "Road bike",
    description:
      "54cm aluminum frame, recently tuned. Lock and helmet available separately.",
    price: 140,
    sellerId: "s2",
    condition: "Good",
    emoji: "🚲",
    images: [],
    status: "active",
  },
  {
    id: "l7",
    title: "Futon",
    description:
      "Full-size futon frame with mattress. Folds flat. You haul it, I help carry.",
    price: 70,
    sellerId: "s2",
    condition: "Fair",
    emoji: "🛋️",
    images: [],
    status: "active",
  },
  {
    id: "l8",
    title: "Area rug (5x7)",
    description: "Gray wool-blend rug, vacuumed and ready to go.",
    price: 30,
    sellerId: "s2",
    condition: "Good",
    emoji: "🧶",
    images: [],
    status: "active",
  },
  {
    id: "l9",
    title: "27-inch monitor",
    description: "1440p IPS display with HDMI and DisplayPort cables.",
    price: 110,
    sellerId: "s3",
    condition: "Like new",
    emoji: "🖥️",
    images: [],
    status: "active",
  },
  {
    id: "l10",
    title: "Bookshelf",
    description: "Five-shelf bookcase, assembles in ten minutes.",
    price: 35,
    sellerId: "s3",
    condition: "Good",
    emoji: "🗄️",
    images: [],
    status: "active",
  },
];

export const initialOffers: Offer[] = [
  // Offers made BY the current buyer
  {
    id: "o1",
    listingId: "l6",
    buyerId: "b1",
    buyerName: "You",
    amount: 120,
    status: "pending",
    createdAt: "2026-11-20T15:00:00Z",
  },
  {
    id: "o2",
    listingId: "l9",
    buyerId: "b1",
    buyerName: "You",
    amount: 95,
    status: "accepted",
    meetup: { date: "2026-12-05", time: "5:00 pm", location: "Harvard Yard" },
    createdAt: "2026-11-18T12:00:00Z",
  },
  {
    id: "o3",
    listingId: "l7",
    buyerId: "b1",
    buyerName: "You",
    amount: 55,
    status: "pending",
    createdAt: "2026-11-21T09:30:00Z",
  },
  // Offers made TO the current seller (s1)
  {
    id: "o4",
    listingId: "l1",
    buyerId: "b2",
    buyerName: "Priya Shah",
    amount: 580,
    status: "pending",
    createdAt: "2026-11-21T18:00:00Z",
  },
  {
    id: "o5",
    listingId: "l2",
    buyerId: "b3",
    buyerName: "Alex Kim",
    amount: 50,
    status: "pending",
    createdAt: "2026-11-22T08:15:00Z",
  },
  {
    id: "o6",
    listingId: "l3",
    buyerId: "b4",
    buyerName: "Chris Wu",
    amount: 10,
    status: "accepted",
    meetup: { date: "2026-12-02", time: "1:00 pm", location: "Science Center" },
    createdAt: "2026-11-19T14:00:00Z",
  },
];

export const getSeller = (id: string) => sellers.find((s) => s.id === id);
export const getListing = (id: string) => listings.find((l) => l.id === id);
export const getListingsBySeller = (sellerId: string) =>
  listings.filter((l) => l.sellerId === sellerId);
