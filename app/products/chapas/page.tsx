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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapas.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
