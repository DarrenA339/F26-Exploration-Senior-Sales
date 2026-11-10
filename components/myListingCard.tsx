import Image from "next/image";

type Offer = {
  buyerName: string;
  amount: number;
};

type MyListingCardProps = {
  name: string;
  imageSrc: string;
  price: number;
  status: string;
  location: string;
  offers: Offer[];
};

export default function MyListingCard({
  name,
  imageSrc,
  price,
  status,
  location,
  offers,
}: MyListingCardProps) {
  return (
    <div>
      {/* TOP: Listing information */}
      <div>
        {/* LEFT: Item image */}

        {/* RIGHT: Item details */}
        <div>
          {/* Name */}

          {/* Price, status, and location */}

          {/* Buttons: Mark As Sold (red), Mark As Pending, Share */}
        </div>
      </div>

      {/* Divider line */}

      {/* BOTTOM: Offers section */}
      <div>
        {/* "Offers" heading */}

        {/* Use .map() on offers to display a row for each offer */}
        {/* Each row: buyer name, offer amount, Accept button (red), Decline button (white) */}
      </div>
    </div>
  );
}
