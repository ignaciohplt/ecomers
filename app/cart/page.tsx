'use client';
import useCart from "../../lib/cartStore";

export default function CartPage() {
  const { items, clear } = useCart();

  if (items.length === 0) {
    return <section className="space-y-4"><h1 className="text-2xl font-semibold">Carrito</h1><p>Tu carrito está vacío.</p></section>;
  }

  // Armo el mensaje
const lineas = items.map(i => `• ${i.quantity}u – ${i.name}`).join("\n");

const texto = `Hola! 👋 Quiero solicitar un presupuesto:\n\n${lineas}\n\n¿Me pasan precio y disponibilidad?\nGracias 🙏`;
const encoded = encodeURIComponent(texto);

  // ⚠️ WhatsApp: para Argentina suele usarse 54 + 9 + área + número móvil (sin 15).
  // Si tu número es móvil de Rosario y funciona con WhatsApp, esta versión debería andar:
  const whatsappNumber = "5493415481010"; // +54 9 341 5481010

  const waHref = `https://wa.me/${whatsappNumber}?text=${encoded}`;

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Carrito</h1>

      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.id} className="p-4 border rounded-xl flex items-center gap-3 bg-white">
            <img
              src={it.image || "/images/placeholder.jpg"}
              alt={it.name}
              className="w-14 h-14 object-cover rounded-lg border"
              onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.jpg"; }}
            />
            <div className="flex-1">
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-neutral-600">Cantidad: {it.quantity}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {/* BOTÓN DE PRESUPUESTO POR WHATSAPP */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Solicitar presupuesto por WhatsApp
        </a>

        {/* Opcional: por email (abre cliente de correo) */}
        <a
          href={`mailto:ventas@himetal.com?subject=${encodeURIComponent("Pedido de presupuesto")}&body=${encoded}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Enviar por Email
        </a>

        <button onClick={clear} className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
          Vaciar carrito
        </button>
      </div>

      <p className="text-xs text-neutral-500">
        * Este carrito no muestra precios. Te respondemos por WhatsApp o email con el presupuesto final.
      </p>
    </section>
  );
}
