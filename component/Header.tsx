"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openCustomer, setOpenCustomer] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white/80 px-8 shadow-md backdrop-blur-md">

      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-blue-600"
      >
        My ERP
      </Link>

      {/* Menu */}
      <nav className="flex items-center gap-6 text-sm font-medium">

        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600"
        >
          HOME
        </Link>

        <Link
          href="/products"
          className="text-gray-700 hover:text-blue-600"
        >
          PRODUCT
        </Link>

        <Link
          href="/about"
          className="text-gray-700 hover:text-blue-600"
        >
          ABOUT
        </Link>

        <Link
          href="/contact"
          className="text-gray-700 hover:text-blue-600"
        >
          CONTACT
        </Link>

      </nav>

    </header>
  );
}