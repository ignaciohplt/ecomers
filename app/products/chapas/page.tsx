import ProductCard from "../../../components/ProductCard";
import { getProducts } from "../../../lib/products";

export default async function ChapasPage() {
  const products = await getProducts();
  const chapas = products.filter(
    (p: any) => (p.category || "").toLowerCase().trim() === "chapas"
  );

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Catálogo de Chapas</h1>
      <div className="mx-auto max-w-7xl px-3">
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {chapas.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
