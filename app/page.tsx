import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Carousel } from "@/components/generals/carousel";

const Home = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to EasyCommerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={products.data[0].images[0]}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
      <section className="rounded bg-neutral-100 py-8 sm:py-12 mt-8">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-black">
              Why Shop With Us?
            </h2>
            <p className="text-neutral-600">
              Enjoy fast shipping, secure checkout, and a curated selection of
              quality products. Experience a seamless shopping journey from start
              to finish.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white hover:bg-zinc-800"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Start Shopping
              </Link>
            </Button>
          </div>
          <Image
            alt="Shopping Experience"
            src={
              products.data[products.data.length - 1]?.images[0] ||
              products.data[0].images[0]
            }
            className="rounded shadow-lg"
            width={450}
            height={450}
          />
        </div>
      </section>
      <footer className="mt-16 bg-zinc-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tight">EasyCommerce</span>
            <span className="text-sm text-zinc-400 mt-1">Your one-stop shop for everything</span>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-zinc-300 text-base">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/products" className="hover:text-white transition">Products</Link>
            <Link href="/checkout" className="hover:text-white transition">Checkout</Link>
          </nav>
          <div className="text-zinc-400 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} EasyCommerce. All rights reserved!
            <br />
            Ritesh Balu
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
