'use client';
import { useState } from "react";
import useCart from "../lib/cartStore";

export default function ProductCard({ product }: { product: any }) {
  const { addItem } = useCart();
  const [src, setSrc] = useState(product.image || "/images/placeholder.jpg");

  return (
    <div className="rounded-2xl border bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
      <img
        src={src}
        alt={product.name}
        className="w-full h-44 object-cover"
        onError={() => setSrc("/images/placeholder.jpg")} // fallback si falta la imagen
        loading="lazy"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-neutral-600 mt-1">{product.description}</p>

        <div className="mt-auto pt-3 flex items-center justify-end">
          <button
            onClick={() => addItem({ ...product, quantity: 1 })}
            className="px-4 py-2 rounded-xl bg-himetal-blue text-white text-sm hover:bg-himetal-celeste transition"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
