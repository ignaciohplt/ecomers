export default function ProductCard({ product, onAdd }: any) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition flex flex-col">
      {/* Imagen más baja */}
      <div
        className="h-32 sm:h-36 md:h-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
      />

      {/* Contenido */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-sm sm:text-base leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-neutral-600">
          {product.description}
        </p>

        <button
          onClick={() => onAdd(product)}
          className="mt-3 px-3 py-1.5 bg-himetal-blue text-white rounded-lg text-xs sm:text-sm hover:bg-himetal-celeste transition"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
