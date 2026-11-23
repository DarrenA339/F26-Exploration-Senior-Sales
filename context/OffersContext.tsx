"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { initialOffers } from "@/lib/data";
import type { Offer, OfferStatus } from "@/lib/types";

type NewOffer = Omit<Offer, "id" | "status" | "createdAt">;

type OffersContextValue = {
  offers: Offer[];
  addOffer: (offer: NewOffer) => void;
  setStatus: (offerId: string, status: OfferStatus) => void;
};

const OffersContext = createContext<OffersContextValue | null>(null);

export function OffersProvider({ children }: { children: ReactNode }) {
  const [offers, setOffers] = useState<Offer[]>(initialOffers);

  const addOffer = useCallback((offer: NewOffer) => {
    setOffers((prev) => [
      {
        ...offer,
        id: `o${Date.now()}`,
        status: "pending",
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  }, []);

  const setStatus = useCallback((offerId: string, status: OfferStatus) => {
    setOffers((prev) =>
      prev.map((o) => (o.id === offerId ? { ...o, status } : o)),
    );
  }, []);

  const value = useMemo(
    () => ({ offers, addOffer, setStatus }),
    [offers, addOffer, setStatus],
  );

  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
}

export function useOffers() {
  const ctx = useContext(OffersContext);
  if (!ctx) throw new Error("useOffers must be used inside <OffersProvider>");
  return ctx;
}
