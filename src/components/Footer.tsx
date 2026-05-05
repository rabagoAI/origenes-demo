const links = ['Privacidad', 'Aviso legal', 'Contacto']

export default function Footer() {
  return (
    <div className="bg-black border-t border-white/10 py-10 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-white/30 text-sm">© 2026 ORÍGENES. Todos los derechos reservados.</p>

      <p className="text-white/20 text-xs italic">
        Una demo diseñada para mostrarte lo que tu restaurante podría tener.
      </p>

      <div className="flex items-center gap-3">
        {links.map((link, i) => (
          <span key={link} className="flex items-center gap-3">
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              {link}
            </a>
            {i < links.length - 1 && <span className="text-white/20">·</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
