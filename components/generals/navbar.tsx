"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

const Navbar = () => {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-black hover:text-blue-900"
        >
          EasyCommerce
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>

        {/* Cart Link */}
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="flex items-center hover:text-blue-600">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-1">
              Cart{" "}
              <span className="text-blue-600 font-semibold text-sm">
                {cartCount}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
