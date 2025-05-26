import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-700 hover:text-blue-900"
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
          <Link href="/cart" className="flex items-center hover:text-blue-600">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-1">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
