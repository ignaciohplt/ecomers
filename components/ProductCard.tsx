'use client';

import useCart from "../lib/cartStore";

export default function ProductCard({ product }: { product: any }) {
  const { add } = useCart();

  return (
    <div className="group overflow-hidden rounded-md border bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div
        className="h-32 sm:h-36 md:h-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
        aria-label={product.name}
      />
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-sm sm:text-base leading-snug">{product.name}</h3>
        <p className="mt-1 text-xs sm:text-sm text-neutral-600">{product.description}</p>

        <button
          onClick={() => add({ id: product.id, name: product.name, image: product.image })}
          className="mt-3 px-3 py-1.5 bg-himetal-blue text-white rounded-lg text-xs sm:text-sm hover:bg-himetal-celeste transition"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
