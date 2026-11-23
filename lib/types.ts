export type Seller = {
  id: string;
  name: string;
  house: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  /** 0 = Sunday ... 6 = Saturday */
  availableWeekdays: number[];
  meetupTimes: string[];
  meetupLocations: string[];
};

export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  sellerId: string;
  condition: "New" | "Like new" | "Good" | "Fair";
  /** Shown when there is no photo yet. */
  emoji: string;
  /** Paths inside /public, e.g. "/items/camera-1.jpg" */
  images: string[];
  status: "active" | "sold";
};

export type Meetup = {
  /** yyyy-mm-dd */
  date: string;
  time: string;
  location: string;
};

export type OfferStatus = "pending" | "accepted" | "declined" | "withdrawn";

export type Offer = {
  id: string;
  listingId: string;
  buyerId: string;
  buyerName: string;
  amount: number;
  status: OfferStatus;
  meetup?: Meetup;
  createdAt: string;
};

export type CartItem = {
  listingId: string;
  meetup?: Meetup;
};
