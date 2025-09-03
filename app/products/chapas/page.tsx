import { getProducts } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";

export default async function ChapasPage() {
  const products = await getProducts();

  // ✅ solo productos con category "chapas"
  const chapas = products.filter((p: any) => p.category === "chapas");

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
