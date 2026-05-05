import { motion } from 'framer-motion'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay },
  }
}

const items = [
  {
    title: 'Menú del día',
    desc: 'Producto de temporada a precio justo. Cambia cada semana.',
  },
  {
    title: 'Carta de autor',
    desc: 'Platos propios con técnica contemporánea y raíces locales.',
  },
  {
    title: 'Vinos de autor',
    desc: 'Selección de bodegas pequeñas con historia detrás de cada botella.',
  },
  {
    title: 'Eventos privados',
    desc: 'Celebraciones, cenas de empresa o noches exclusivas para grupos.',
  },
]

export default function Menu() {
  return (
    <section className="bg-black py-32 md:py-44 px-8 border-t border-white/10">
      <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-white/30 text-center mb-4">
        NUESTRA PROPUESTA
      </motion.p>

      <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-medium text-white text-center mb-6">
        La carta para una{' '}
        <span className="font-['Instrument_Serif'] italic">experiencia</span>
        {' '}completa
      </motion.h2>

      <motion.p {...fadeUp(0.2)} className="text-white/40 text-center max-w-xl mx-auto mb-16">
        Menús de temporada, carta de vinos con selección propia y opciones para cada momento del día.
      </motion.p>

      <motion.video
        {...fadeUp(0.3)}
        className="w-full rounded-2xl object-cover aspect-[21/9] mb-16"
        src="/videos/menu.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <motion.div {...fadeUp(0.4)} className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {items.map(({ title, desc }) => (
          <div key={title} className="border-t border-white/10 pt-6">
            <p className="font-semibold text-white text-sm mb-2">{title}</p>
            <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
