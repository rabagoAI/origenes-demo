import { Instagram, MapPin, Phone } from 'lucide-react'

const navLinks = ['Inicio', 'Carta', 'Historia', 'Reservas']

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent px-8 md:px-24 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-7 h-7 border-2 border-white/60 rounded-full flex items-center justify-center">
          <div className="absolute w-3 h-3 border border-white/60 rounded-full" />
        </div>
        <span className="font-bold tracking-widest text-sm text-white">ORÍGENES</span>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link, i) => (
          <span key={link} className="flex items-center gap-4">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
              {link}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-white/20 select-none">·</span>
            )}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {[Instagram, MapPin, Phone].map((Icon, i) => (
          <button
            key={i}
            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Icon className="w-4 h-4 text-white/70" />
          </button>
        ))}
      </div>
    </nav>
  )
}
