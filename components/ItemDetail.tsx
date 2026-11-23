"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useOffers } from "@/context/OffersContext";
import { CURRENT_BUYER } from "@/lib/data";
import { formatLongDate, formatPrice } from "@/lib/format";
import type { Listing, Seller } from "@/lib/types";
import AvailabilityCalendar from "./AvailabilityCalendar";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import MeetupPicker from "./MeetupPicker";
import StarRating from "./StarRating";

type Step = "details" | "date" | "meetup";

export default function ItemDetail({
  listing,
  seller,
}: {
  listing: Listing;
  seller: Seller;
}) {
  const { items, addItem } = useCart();
  const { addOffer } = useOffers();

  const [step, setStep] = useState<Step>("details");
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [offerText, setOfferText] = useState(String(listing.price));
  const [offerSent, setOfferSent] = useState(false);

  const cartEntry = items.find((i) => i.listingId === listing.id);
  const sold = listing.status === "sold";
  const offerAmount = Number(offerText);
  const offerValid = Number.isFinite(offerAmount) && offerAmount > 0;

  function handleAddToCart() {
    addItem({ listingId: listing.id });
  }

  function handleAddBookingToCart() {
    if (!date || !time || !location) return;
    addItem({ listingId: listing.id, meetup: { date, time, location } });
    setStep("details");
  }

  function handleSendOffer() {
    if (!offerValid) return;
    addOffer({
      listingId: listing.id,
      buyerId: CURRENT_BUYER.id,
      buyerName: CURRENT_BUYER.name,
      amount: offerAmount,
      meetup: date && time && location ? { date, time, location } : undefined,
    });
    setOfferSent(true);
  }

  // Step 2: pick a day from the seller's availability
  if (step === "date") {
    return (
      <div className="mx-auto max-w-2xl">
        <AvailabilityCalendar
          seller={seller}
          selected={date}
          onSelect={(iso) => {
            setDate(iso);
            setStep("meetup");
          }}
        />
        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={() => setStep("details")}>
            Back to item
          </Button>
        </div>
      </div>
    );
  }

  // Step 3: pick a time and a place
  if (step === "meetup" && date) {
    return (
      <MeetupPicker
        seller={seller}
        date={date}
        time={time}
        location={location}
        onTimeChange={setTime}
        onLocationChange={setLocation}
        onChangeDate={() => setStep("date")}
        onAddToCart={handleAddBookingToCart}
      />
    );
  }

  // Step 1: item details
  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      <div>
        <ImageGallery listing={listing} />
        <p className="mt-4 text-center font-extrabold">
          Seller:{" "}
          <Link
            href={`/seller/${seller.id}`}
            className="underline-offset-4 hover:underline"
          >
            {seller.name}
          </Link>{" "}
          <StarRating rating={seller.rating} count={seller.reviewCount} />
        </p>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-extrabold">{listing.title}</h1>
        <p className="mt-1 text-xl font-semibold">{formatPrice(listing.price)}</p>
        <p className="text-sm text-black/70">Condition: {listing.condition}</p>
        <p className="mx-auto mt-4 max-w-sm text-base">{listing.description}</p>

        {sold ? (
          <p className="mt-6 font-extrabold">This item has been sold.</p>
        ) : (
          <>
            <div className="mt-6 flex flex-col items-center gap-3">
              <Button onClick={handleAddToCart} disabled={Boolean(cartEntry)}>
                {cartEntry ? "In your cart" : "Add to cart"}
              </Button>
              <Button onClick={() => setStep("date")}>Book now</Button>
            </div>

            {cartEntry && (
              <p role="status" className="mt-4 text-sm">
                Added to your cart
                {cartEntry.meetup &&
                  ` with a meet-up on ${formatLongDate(cartEntry.meetup.date)} at ${cartEntry.meetup.time}, ${cartEntry.meetup.location}`}
                .{" "}
                <Link href="/cart" className="font-bold underline">
                  View cart
                </Link>
              </p>
            )}

            <div className="mt-8 border-t border-black/20 pt-6">
              <h2 className="font-extrabold">Make an offer</h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <label htmlFor="offer-amount" className="sr-only">
                  Offer amount in dollars
                </label>
                <span aria-hidden="true">$</span>
                <input
                  id="offer-amount"
                  type="number"
                  min="1"
                  step="0.01"
                  value={offerText}
                  onChange={(e) => {
                    setOfferText(e.target.value);
                    setOfferSent(false);
                  }}
                  className="w-28 border border-black/30 px-3 py-2 text-center"
                />
                <Button
                  variant="ghost"
                  onClick={handleSendOffer}
                  disabled={!offerValid}
                >
                  Send offer
                </Button>
              </div>
              {offerSent && (
                <p role="status" className="mt-3 text-sm">
                  Offer sent. You can withdraw it any time from{" "}
                  <Link href="/buyer" className="font-bold underline">
                    My offers
                  </Link>
                  .
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
