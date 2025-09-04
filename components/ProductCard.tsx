'use client';

import useCart from "../lib/cartStore";

export default function ProductCard({ product }: { product: any }) {
  const { add } = useCart();

  return (
    <div className="group aspect-square overflow-hidden rounded-md border bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
        aria-label={product.name}
      />
      <div className="p-2">
        <h3 className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-0.5 text-[11px] sm:text-xs text-neutral-600 line-clamp-2">
          {product.description}
        </p>
        <button
          onClick={() => add({ id: product.id, name: product.name, image: product.image })}
          className="mt-2 px-2 py-1 bg-himetal-blue text-white rounded-md text-xs hover:bg-himetal-celeste transition"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
