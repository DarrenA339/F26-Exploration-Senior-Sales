import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProfileListingCard from "@/components/ProfileListingCard";
import StarRating from "@/components/StarRating";
import { CURRENT_SELLER_ID, getListingsBySeller, getSeller } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export default function SellerProfilePage({ params }: Props) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <Suspense fallback={<p className="text-center">Loading profile…</p>}>
        <SellerProfile params={params} />
      </Suspense>
    </main>
  );
}

async function SellerProfile({ params }: Props) {
  const { id } = await params;

  const seller = getSeller(id);
  if (!seller) notFound();

  const listings = getListingsBySeller(id);
  const isOwnProfile = id === CURRENT_SELLER_ID;

  return (
    <>
      <header className="text-center">
        <h1 className="text-2xl font-extrabold">{seller.name}</h1>
        <p className="mt-1">
          {seller.house}
          {seller.verified && (
            <span className="ml-3 bg-green-100 px-2 py-0.5 text-xs font-bold text-green-900">
              Verified
            </span>
          )}
        </p>
        <div className="mt-1">
          <StarRating rating={seller.rating} count={seller.reviewCount} />
        </div>
        {isOwnProfile && (
          <Link
            href="/seller/dashboard"
            className="mt-3 inline-block text-sm font-bold underline underline-offset-4"
          >
            Manage my listings and offers
          </Link>
        )}
      </header>

      <hr className="my-6 border-black/30" />

      {listings.length === 0 ? (
        <p className="text-center">{seller.name} has no items for sale yet.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {listings.map((listing) => (
            <li key={listing.id}>
              <ProfileListingCard listing={listing} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
