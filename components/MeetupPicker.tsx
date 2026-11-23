import { formatLongDate } from "@/lib/format";
import type { Seller } from "@/lib/types";
import Button from "./Button";

type Props = {
  seller: Seller;
  date: string;
  time: string | null;
  location: string | null;
  onTimeChange: (time: string) => void;
  onLocationChange: (location: string) => void;
  onChangeDate: () => void;
  onAddToCart: () => void;
};

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`w-full px-4 py-2 text-sm font-bold transition-colors ${
        selected
          ? "bg-brand-dark ring-2 ring-black"
          : "bg-brand hover:bg-brand-dark"
      }`}
    >
      {label}
    </button>
  );
}

export default function MeetupPicker({
  seller,
  date,
  time,
  location,
  onTimeChange,
  onLocationChange,
  onChangeDate,
  onAddToCart,
}: Props) {
  const ready = time !== null && location !== null;

  return (
    <section className="mx-auto max-w-2xl">
      <div className="grid grid-cols-2 gap-6 text-center">
        <div>
          <h2 className="mb-4 text-lg font-extrabold">
            {seller.name}&rsquo;s meet-up times
            <span className="block text-sm font-semibold">
              {formatLongDate(date)}
            </span>
          </h2>
          <div className="space-y-3">
            {seller.meetupTimes.map((t) => (
              <OptionButton
                key={t}
                label={t}
                selected={t === time}
                onClick={() => onTimeChange(t)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-extrabold">
            {seller.name}&rsquo;s meet-up options
          </h2>
          <div className="space-y-3">
            {seller.meetupLocations.map((l) => (
              <OptionButton
                key={l}
                label={l}
                selected={l === location}
                onClick={() => onLocationChange(l)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <Button onClick={onAddToCart} disabled={!ready}>
          Add to cart
        </Button>
        {!ready && (
          <p className="text-sm">Choose a time and a location to continue.</p>
        )}
        <Button variant="ghost" onClick={onChangeDate}>
          Change date
        </Button>
      </div>
    </section>
  );
}
