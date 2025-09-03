export default function ServicesPage() {
  return (
    <section className="container space-y-10 py-6">
      {/* Carta de presentación */}
      <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div
          className="h-44 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/laser.jpg')" }}
        />
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-himetal-blue">
            HIMETAL · Metalúrgica
          </h1>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Somos una metalúrgica de Rosario. Proveemos <b>chapas y caños</b> y prestamos servicios
            de <b>corte láser</b> y <b>plegado CNC</b>, con respuesta rápida, estándares industriales
            y logística a todo el país.
          </p>

          {/* Qué hacemos */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <CardLine title="Corte láser" desc="Fibra hasta 3.000 W. Acero al carbono, inoxidable y galvanizado." />
            <CardLine title="Plegado CNC" desc="Precisión hasta 3.200 mm. Series cortas/medianas." />
            <CardLine title="Venta de chapas" desc="LAF / LAC / Antideslizante / F24. Anchos y espesores comerciales." />
            <CardLine title="Venta de caños" desc="Estructurales. Medidas estándar. Corte a medida." />
            <CardLine title="Desarrollo a medida" desc="Planos, prototipos, optimización y armado." />
            <CardLine title="Logística" desc="Retiro en planta o envíos coordinados." />
          </div>

          {/* Por qué elegirnos */}
          <div className="mt-8 rounded-2xl border p-5 bg-neutral-50">
            <h2 className="text-lg font-semibold">¿Por qué elegir HIMETAL?</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-neutral-700">
              <li>• Stock para entrega rápida</li>
              <li>• Lead time típico: 24–72 h</li>
              <li>• Tolerancias de corte/plegado industriales</li>
              <li>• Acompañamiento técnico</li>
            </ul>
          </div>

          {/* Sectores */}
          <div className="mt-6">
            <h3 className="text-base font-semibold">Sectores que atendemos</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Estructuras, herrería, máquinas y equipos, carpintería metálica, mobiliario,
              cartelería, arquitectura, automotriz y agro.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5493415481010?text=${encodeURIComponent("Hola! Quiero consultar por servicios de corte/plegado y materiales.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
            >
              Consultar por WhatsApp
            </a>
            <a
              href={`mailto:ventas@himetal.com?subject=${encodeURIComponent("Consulta Servicios HIMETAL")}&body=${encodeURIComponent("Hola, necesito asesoramiento sobre corte/plegado y provisión de materiales.")}`}
              className="px-5 py-2 rounded-xl bg-himetal-blue text-white hover:opacity-90 transition"
            >
              Escribir por Email
            </a>
          </div>
        </div>
      </div>

      {/* Galería de trabajos */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Trabajos recientes</h2>
        <p className="text-sm text-neutral-600 mb-4">
          Algunas piezas y proyectos que realizamos en corte y plegado.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard img="/images/trabajo-1.jpg" title="Placas cortadas a láser" />
          <GalleryCard img="/images/trabajo-2.jpg" title="Plegados en serie" />
          <GalleryCard img="/images/trabajo-3.jpg" title="Protecciones y tapas" />
          <GalleryCard img="/images/trabajo-4.jpg" title="Cartelería metálica" />
          <GalleryCard img="/images/trabajo-5.jpg" title="Estructuras livianas" />
          <GalleryCard img="/images/trabajo-6.jpg" title="Piezas a medida" />
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          * Podés enviarnos fotos/referencias y planos para cotizar.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
        <div className="divide-y rounded-2xl border bg-white">
          <FAQ q="¿Qué materiales cortan?"
               a="Acero al carbono (negro), galvanizado e inoxidable. Consultar por otros materiales o espesores especiales." />
          <FAQ q="¿Qué formatos de archivo aceptan?"
               a="DXF, DWG, STEP, PDF con medidas o un croquis con dimensiones. Si hace falta, nosotros lo vectorizamos." />
          <FAQ q="¿Cuánto tarda un trabajo?"
               a="Generalmente 24–72 h según complejidad y cantidad. Urgencias: consultar disponibilidad." />
          <FAQ q="¿Hacen entrega a domicilio?"
               a="Sí. Hacemos envíos coordinados o podés retirar en planta." />
          <FAQ q="¿Puedo comprar solo material?"
               a="Sí. Vendemos chapas (LAF/LAC/Antideslizante/F24) y caños estructurales por unidad o a medida." />
        </div>
      </section>
    </section>
  );
}

/* Subcomponentes */
function CardLine({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 hover:shadow-sm transition">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-neutral-600 mt-1">{desc}</div>
    </div>
  );
}

function GalleryCard({ img, title }: { img: string; title: string }) {
  return (
    <figure className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <figcaption className="p-3 text-sm text-neutral-700">{title}</figcaption>
    </figure>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="p-4">
      <summary className="cursor-pointer select-none font-medium text-neutral-900">
        {q}
      </summary>
      <div className="mt-2 text-sm text-neutral-700 leading-relaxed">{a}</div>
    </details>
  );
}
