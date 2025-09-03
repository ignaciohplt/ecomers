import { getProducts } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
