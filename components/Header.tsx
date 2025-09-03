'use client';
import Link from "next/link";
import Image from "next/image";
import useCart from "../lib/cartStore";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((a, b) => a + b.quantity, 0);

  return (
    <header className="sticky top-0 bg-white border-b z-50 shadow-sm">
      <div className="container h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-himetal.jpg" // asegurate que el logo esté en /public/images/
            alt="HIMETAL logo"
            width={150}
            height={45}
            priority
          />
        </Link>

        {/* Navegación */}
        <nav className="flex gap-6 text-base md:text-lg">
          <Link href="/products/chapas" className="hover:text-himetal-blue transition">
            Chapas
          </Link>
          <Link href="/products/canos" className="hover:text-himetal-blue transition">
            Caños
          </Link>
          <Link href="/services" className="hover:text-himetal-blue transition">
            Servicios
          </Link>
          <Link href="/cart" className="hover:text-himetal-blue transition">
            Carrito ({count})
          </Link>
        </nav>
      </div>
    </header>
  );
}
