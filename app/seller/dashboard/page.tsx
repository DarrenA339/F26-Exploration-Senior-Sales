"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import ListingImage from "@/components/ListingImage";
import OfferCard from "@/components/OfferCard";
import { useOffers } from "@/context/OffersContext";
import {
  CURRENT_SELLER_ID,
  getListing,
  getListingsBySeller,
  getSeller,
} from "@/lib/data";
import { formatPrice } from "@/lib/format";
import type { Listing } from "@/lib/types";

type Tab = "listings" | "offers";

export default function SellerDashboardPage() {
  const seller = getSeller(CURRENT_SELLER_ID);
  const { offers, setStatus } = useOffers();

  const [tab, setTab] = useState<Tab>("listings");
  const [listings, setListings] = useState<Listing[]>(() =>
    getListingsBySeller(CURRENT_SELLER_ID),
  );

  const myOffers = offers.filter(
    (o) => getListing(o.listingId)?.sellerId === CURRENT_SELLER_ID,
  );
  const pendingCount = myOffers.filter((o) => o.status === "pending").length;

  function markSold(id: string) {
    setListings((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: "sold" } : l)),
    );
  }

  function removeListing(id: string) {
    setListings((prev) => prev.filter((l) => l.id !== id));
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "listings", label: `Current listings (${listings.length})` },
    { id: "offers", label: `Offers (${pendingCount} new)` },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <header className="text-center">
        <h1 className="text-2xl font-extrabold">Seller home</h1>
        {seller && (
          <p className="mt-1 text-sm">
            Signed in as {seller.name}.{" "}
            <Link
              href={`/seller/${seller.id}`}
              className="font-bold underline underline-offset-4"
            >
              View my public profile
            </Link>
          </p>
        )}
      </header>

      <div role="tablist" className="mt-6 flex justify-center border-b border-black/30">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px border-b-4 px-4 py-2 text-sm font-bold ${
              tab === t.id
                ? "border-brand"
                : "border-transparent text-black/60 hover:text-black"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-6">
        {tab === "listings" &&
          (listings.length === 0 ? (
            <p className="text-center">
              You have no listings right now. Create one to start selling.
            </p>
          ) : (
            <ul className="space-y-3">
              {listings.map((listing) => (
                <li
                  key={listing.id}
                  className="flex flex-col gap-4 border border-black/20 p-4 sm:flex-row sm:items-center"
                >
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
                    <p className="text-sm">{formatPrice(listing.price)}</p>
                    <span
                      className={`mt-2 inline-block px-2 py-0.5 text-xs font-bold ${
                        listing.status === "sold"
                          ? "bg-black/10 text-black/70"
                          : "bg-green-100 text-green-900"
                      }`}
                    >
                      {listing.status === "sold" ? "Sold" : "Active"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {listing.status === "active" && (
                      <Button variant="ghost" onClick={() => markSold(listing.id)}>
                        Mark as sold
                      </Button>
                    )}
                    <Button variant="danger" onClick={() => removeListing(listing.id)}>
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ))}

        {tab === "offers" &&
          (myOffers.length === 0 ? (
            <p className="text-center">No offers yet. Share your listings to get some.</p>
          ) : (
            <ul className="space-y-3">
              {myOffers.map((offer) => {
                const listing = getListing(offer.listingId);
                if (!listing) return null;
                return (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    listing={listing}
                    counterpart={`Buyer: ${offer.buyerName}`}
                    actions={
                      offer.status === "pending" && (
                        <>
                          <Button onClick={() => setStatus(offer.id, "accepted")}>
                            Accept
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => setStatus(offer.id, "declined")}
                          >
                            Decline
                          </Button>
                        </>
                      )
                    }
                  />
                );
              })}
            </ul>
          ))}
      </div>
    </main>
  );
}
