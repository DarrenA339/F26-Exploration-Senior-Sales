"use client";

import { useMemo } from "react";
import { toISODate } from "@/lib/format";
import type { Seller } from "@/lib/types";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "TH", "F", "SAT"];
const WEEKS_SHOWN = 5;

type Props = {
  seller: Seller;
  selected: string | null;
  onSelect: (isoDate: string) => void;
};

export default function AvailabilityCalendar({ seller, selected, onSelect }: Props) {
  const days = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Start the grid on the Sunday of the current week.
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay());

    return Array.from({ length: WEEKS_SHOWN * 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return {
        iso: toISODate(d),
        label: d.getDate(),
        month: d.toLocaleDateString("en-US", { month: "short" }),
        showMonth: i === 0 || d.getDate() === 1,
        // Meet-ups need at least a day's notice.
        available: d > today && seller.availableWeekdays.includes(d.getDay()),
      };
    });
  }, [seller]);

  return (
    <section aria-labelledby="availability-heading">
      <h2
        id="availability-heading"
        className="mb-4 text-center text-lg font-extrabold"
      >
        {seller.name}&rsquo;s availability
      </h2>

      <div className="bg-panel p-3 sm:p-5">
        <div className="mb-2 grid grid-cols-7 text-center text-sm font-extrabold">
          {WEEKDAY_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-x-1 gap-y-2 sm:gap-x-3">
          {days.map((day) => {
            const isSelected = day.iso === selected;
            return (
              <button
                key={day.iso}
                type="button"
                disabled={!day.available}
                aria-pressed={isSelected}
                aria-label={`${day.month} ${day.label}${
                  day.available ? "" : ", unavailable"
                }`}
                onClick={() => onSelect(day.iso)}
                className={`flex h-12 flex-col items-center justify-center rounded-full text-sm font-semibold leading-tight transition-colors ${
                  isSelected
                    ? "bg-brand-dark ring-2 ring-black"
                    : day.available
                      ? "bg-brand hover:bg-brand-dark"
                      : "cursor-not-allowed bg-white/50 text-black/30"
                }`}
              >
                {day.showMonth && (
                  <span className="text-[10px] font-normal uppercase">
                    {day.month}
                  </span>
                )}
                {day.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-center text-sm">
        Pick one of the pink days to choose a meet-up time.
      </p>
    </section>
  );
}
