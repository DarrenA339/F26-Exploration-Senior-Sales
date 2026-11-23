import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Listing } from "@/lib/types";
import ListingImage from "./ListingImage";

export default function ProfileListingCard({ listing }: { listing: Listing }) {
  const sold = listing.status === "sold";

  return (
    <Link href={`/item/${listing.id}`} className="group block text-center">
      <ListingImage
        src={listing.images[0]}
        alt={listing.title}
        emoji={listing.emoji}
        className={`aspect-[4/3] w-full transition-opacity group-hover:opacity-80 ${
          sold ? "opacity-50" : ""
        }`}
      />
      <p className="mt-2 text-sm">{listing.title}</p>
      <p className="text-sm font-semibold">
        {sold ? "Sold" : formatPrice(listing.price)}
      </p>
    </Link>
  );
}
