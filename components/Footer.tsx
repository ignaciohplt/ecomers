export default function Footer() {
  return (
    <footer className="bg-himetal-blue text-white mt-10">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <img src="/images/logo-himetal.jpg" alt="Himetal" className="h-10 w-auto" />
          <span className="font-semibold">HIMETAL · Metalúrgica</span>
        </div>

        {/* Info */}
        <div className="text-sm text-white/80 text-center md:text-right">
          © {new Date().getFullYear()} HIMETAL — Rosario, Argentina <br />
          CUIT 30-12345678-9 · Lunes a Viernes 8:00–17:00 hs
        </div>
      </div>
    </footer>
  );
}
