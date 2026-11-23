import type { Listing } from "@/lib/types";
import ListingImage from "./ListingImage";

/** 2x2 photo grid like the Figma item page. Missing photos show placeholders. */
export default function ImageGallery({ listing }: { listing: Listing }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[0, 1, 2, 3].map((i) => (
        <ListingImage
          key={i}
          src={listing.images[i]}
          alt={`${listing.title}, photo ${i + 1}`}
          emoji={listing.emoji}
          className="aspect-[4/3] w-full"
        />
      ))}
    </div>
  );
}
