"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { OffersProvider } from "@/context/OffersContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <OffersProvider>{children}</OffersProvider>
    </CartProvider>
  );
}
