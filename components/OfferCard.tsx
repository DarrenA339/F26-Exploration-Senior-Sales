import Link from "next/link";
import type { ReactNode } from "react";
import { formatLongDate, formatPrice } from "@/lib/format";
import type { Listing, Offer, OfferStatus } from "@/lib/types";
import ListingImage from "./ListingImage";

const badgeStyles: Record<OfferStatus, string> = {
  pending: "bg-amber-100 text-amber-900",
  accepted: "bg-green-100 text-green-900",
  declined: "bg-red-100 text-red-900",
  withdrawn: "bg-black/10 text-black/70",
};

type Props = {
  offer: Offer;
  listing: Listing;
  /** e.g. "Seller: Maya Patel" or "Buyer: Priya Shah" */
  counterpart: string;
  /** Buttons shown on the right (withdraw, accept, ...) */
  actions?: ReactNode;
};

export default function OfferCard({ offer, listing, counterpart, actions }: Props) {
  return (
    <li className="flex flex-col gap-4 border border-black/20 p-4 sm:flex-row sm:items-center">
      <ListingImage
        src={listing.images[0]}
        alt={listing.title}
        emoji={listing.emoji}
        className="h-24 w-full shrink-0 sm:w-32"
      />

      <div className="min-w-0 flex-1">
        <Link
          href={`/item/${listing.id}`}
          className="font-bold underline-offset-4 hover:underline"
        >
          {listing.title}
        </Link>
        <p className="text-sm">{counterpart}</p>
        <p className="text-sm">
          Offer: <span className="font-semibold">{formatPrice(offer.amount)}</span>{" "}
          <span className="text-black/60">
            (listed at {formatPrice(listing.price)})
          </span>
        </p>
        {offer.meetup && (
          <p className="text-sm">
            Meet-up: {formatLongDate(offer.meetup.date)} at {offer.meetup.time},{" "}
            {offer.meetup.location}
          </p>
        )}
        <span
          className={`mt-2 inline-block px-2 py-0.5 text-xs font-bold capitalize ${badgeStyles[offer.status]}`}
        >
          {offer.status}
        </span>
      </div>

      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </li>
  );
}
