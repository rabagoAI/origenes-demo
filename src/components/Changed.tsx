import { motion } from 'framer-motion'
import { Leaf, Flame, Star } from 'lucide-react'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay },
  }
}

const cards = [
  {
    Icon: Leaf,
    name: 'Producto local',
    desc: 'De temporada, cercano y con nombre propio. Sabemos de dónde viene cada ingrediente.',
  },
  {
    Icon: Flame,
    name: 'Técnica y honestidad',
    desc: 'Elaboraciones propias sin artificios. La cocina como lenguaje directo entre el productor y la mesa.',
  },
  {
    Icon: Star,
    name: 'Una experiencia',
    desc: 'Cada detalle está pensado para que la visita sea un recuerdo, no solo una comida.',
  },
]

export default function Changed() {
  return (
    <section className="bg-black pt-48 pb-16 text-center px-8">
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-tight"
      >
        La gastronomía ha{' '}
        <span className="font-['Instrument_Serif'] italic">cambiado.</span>
        <br />
        ¿Tu restaurante también?
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="text-lg text-white/50 max-w-2xl mx-auto mt-6 mb-24"
      >
        Los clientes ya no buscan solo comer. Buscan una historia, un producto y un momento que merezca la pena contar.
      </motion.p>

      <motion.div
        {...fadeUp(0.2)}
        className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16"
      >
        {cards.map(({ Icon, name, desc }) => (
          <div key={name} className="flex flex-col items-center gap-4 text-center">
            <Icon className="w-12 h-12 text-white/15 mb-2" />
            <p className="font-semibold text-white text-base">{name}</p>
            <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </motion.div>

      <motion.p
        {...fadeUp(0.3)}
        className="text-white/20 text-sm mt-6 italic"
      >
        "Si no defines tu historia, otro lo hará por ti."
      </motion.p>
    </section>
  )
}
