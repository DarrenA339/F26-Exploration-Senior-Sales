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
    <div className="flex w-70 flex-col rounded-3xl bg-gray-300 p-7 relative left-90 top-50" >
      <div className="relative h-60 w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="288px"
          className="rounded-2xl object-cover"
        />

        <button className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-4xl cursor-pointer">
          <Image
          src="/saved.png"
          alt="Save"
          width={90}
          height={90}
        />
        </button>
      </div>

      <div className="flex flex-col pt-2">
        <p className="text-3xl font-bold">${price}</p>
        <p className="text-xl">{name}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}