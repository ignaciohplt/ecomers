import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-14">
      {/* HERO compacto con imagen + overlay */}
      <section className="relative container mt-6">
        <div className="overflow-hidden rounded-3xl shadow">
          {/* imagen con altura fija (responsive) */}
          <img
            src="/images/hero.jpg"
            alt="Himetal hero"
            className="w-full h-[180px] sm:h-[220px] md:h-[280px] object-cover"
          />
          {/* overlay sutil + fade inferior */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/50 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-neutral-50/90" />

          {/* tarjeta CTA minimal encima */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <div className="max-w-xl rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 text-white shadow-lg">
                <h1 className="text-2xl md:text-3xl font-bold">Himetal · Metalúrgica</h1>
                <p className="mt-2 text-sm md:text-base text-white/90">
                  Chapas, caños y servicios de corte/plegado con entrega rápida.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/products/chapas"
                    className="px-5 py-2 rounded-xl bg-himetal-blue hover:bg-himetal-light text-white font-medium transition"
                  >
                    Ver productos
                  </Link>
                  <Link
                    href="/services"
                    className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 font-medium transition"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/cart"
                    className="px-5 py-2 rounded-xl bg-white text-black/90 hover:bg-neutral-100 font-medium transition"
                  >
                    Carrito
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destacados con fondo corporativo */}
      <section className="bg-himetal-gray py-10">
        <div className="container">
          <h2 className="text-xl md:text-2xl font-semibold text-himetal-blue mb-5">
            Destacados
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              img="/images/chapa.jpg"
              title="Chapas LAF / LAC"
              desc="Espesores y anchos comerciales. Entrega inmediata."
              href="/products/chapas"
            />
            <Card
              img="/images/cano.jpg"
              title="Caños estructurales"
              desc="Medidas estándar y corte a medida."
              href="/products/canos"
            />
            <Card
              img="/images/laser.jpg"
              title="Corte láser & plegado"
              desc="Piezas a medida, tolerancias industriales."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* Banda de confianza */}
      <section className="container">
        <div className="rounded-2xl bg-gradient-to-r from-himetal-blue/10 to-himetal-celeste/10 p-6 border">
          <p className="text-center text-sm text-neutral-700">
            +500 pedidos entregados · Lead time 24–72h · Envíos a todo el país
          </p>
        </div>
      </section>
    </div>
  );
}

function Card({
  img,
  title,
  desc,
  href,
}: {
  img: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border bg-white shadow hover:shadow-lg transition block"
    >
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{desc}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-himetal-blue group-hover:gap-3 transition">
          Ver más →
        </span>
      </div>
    </Link>
  );
}
