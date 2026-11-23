import { notFound } from "next/navigation";
import { Suspense } from "react";
import ItemDetail from "@/components/ItemDetail";
import { getListing, getSeller } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export default function ItemPage({ params }: Props) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <Suspense fallback={<p className="text-center">Loading item…</p>}>
        <Item params={params} />
      </Suspense>
    </main>
  );
}

async function Item({ params }: Props) {
  const { id } = await params;

  const listing = getListing(id);
  if (!listing) notFound();

  const seller = getSeller(listing.sellerId);
  if (!seller) notFound();

  return <ItemDetail listing={listing} seller={seller} />;
}
