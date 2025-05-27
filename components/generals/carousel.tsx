"use client";

import Stripe from "stripe";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  // Always render the first product on the server, only start auto-advance on the client
  const [current, setCurrent] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !products || products.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isClient, products, products.length]);

  if (!products || products.length === 0) {
    return null;
  }

  const safeCurrent = Math.min(current, products.length - 1);
  const product = products[safeCurrent];
  const price = product.default_price as Stripe.Price;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Card className="relative overflow-hidden rounded-2xl border-0 shadow-2xl bg-zinc-900">
        {product.images?.[0] ? (
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-700 ease-in-out rounded-2xl"
              style={{ opacity: 0.96 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-2xl" />
          </div>
        ) : null}
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-transparent text-center text-white px-4">
          <CardTitle className="text-3xl font-bold mb-2 drop-shadow-lg">
            {product.name}
          </CardTitle>
          {price?.unit_amount && (
            <p className="text-xl font-semibold drop-shadow-md">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
        </CardContent>
      </Card>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 w-6 rounded-full transition-all duration-300 border border-white/40 ${
              safeCurrent === idx ? "bg-white/90 shadow" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
