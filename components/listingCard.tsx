import Image from "next/image";

type ListingCardProps = {
  name: string;
  imageSrc: string;
  price: number;
  location: string;
};

export default function ListingCard({
  name,
  imageSrc,
  price,
  location,
}: ListingCardProps) {
  return (
    <div>
      {/* TOP: Item image */}
      <div>
        {/* Display item image here */}

        {/* Save (heart) button in the top right corner of the image */}
      </div>

      {/* BOTTOM: Item information */}
      <div>
        {/* Price */}

        {/* Name */}

        {/* Location */}
      </div>
    </div>
  );
}
