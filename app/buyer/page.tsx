"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import OfferCard from "@/components/OfferCard";
import { useOffers } from "@/context/OffersContext";
import { CURRENT_BUYER, getListing, getSeller } from "@/lib/data";
import type { Offer } from "@/lib/types";

export default function BuyerHomePage() {
  const { offers, setStatus } = useOffers();
  // Which offer is waiting for "are you sure?" confirmation
  const [confirmingId, setConfirmingId] = useState<string | null>(null);

  const mine = offers.filter((o) => o.buyerId === CURRENT_BUYER.id);
  const current = mine.filter(
    (o) => o.status === "pending" || o.status === "accepted",
  );
  const past = mine.filter(
    (o) => o.status === "declined" || o.status === "withdrawn",
  );

  function renderOffer(offer: Offer, withActions: boolean) {
    const listing = getListing(offer.listingId);
    if (!listing) return null;
    const seller = getSeller(listing.sellerId);

    const confirming = confirmingId === offer.id;

    return (
      <OfferCard
        key={offer.id}
        offer={offer}
        listing={listing}
        counterpart={`Seller: ${seller?.name ?? "Unknown"}`}
        actions={
          withActions &&
          (confirming ? (
            <>
              <Button
                variant="danger"
                onClick={() => {
                  setStatus(offer.id, "withdrawn");
                  setConfirmingId(null);
                }}
              >
                Yes, withdraw
              </Button>
              <Button variant="ghost" onClick={() => setConfirmingId(null)}>
                Keep offer
              </Button>
            </>
          ) : (
            <Button variant="ghost" onClick={() => setConfirmingId(offer.id)}>
              Withdraw
            </Button>
          ))
        }
      />
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 className="text-center text-2xl font-extrabold">My offers</h1>

      <section className="mt-8" aria-labelledby="current-offers">
        <h2 id="current-offers" className="mb-3 text-lg font-extrabold">
          Current offers ({current.length})
        </h2>
        {current.length === 0 ? (
          <p>
            You have no open offers. Find something you like and make an offer from
            its item page.
          </p>
        ) : (
          <ul className="space-y-3">{current.map((o) => renderOffer(o, true))}</ul>
        )}
      </section>

      {past.length > 0 && (
        <section className="mt-10" aria-labelledby="past-offers">
          <h2 id="past-offers" className="mb-3 text-lg font-extrabold">
            Past offers ({past.length})
          </h2>
          <ul className="space-y-3">{past.map((o) => renderOffer(o, false))}</ul>
        </section>
      )}

      <p className="mt-10 text-center text-sm">
        <Link href="/" className="font-bold underline underline-offset-4">
          Keep browsing
        </Link>
      </p>
    </main>
  );
}
