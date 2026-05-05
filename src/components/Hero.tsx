import { motion } from 'framer-motion'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay },
  }
}

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div {...fadeUp(0)} className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black bg-zinc-700"
              />
            ))}
          </div>
          <p className="text-sm text-white/50 ml-3">
            Más de 300 mesas reservadas este mes
          </p>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-tight mt-6"
        >
          Una cocina con
          <br />
          <span className="font-['Instrument_Serif'] italic font-normal">alma</span>
          , hecha para ti.
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="text-lg mt-5 max-w-xl"
          style={{ color: 'hsl(var(--hero-subtitle))' }}
        >
          Producto de temporada, técnica honesta y una experiencia pensada para que vuelvas.
        </motion.p>

        <motion.form
          {...fadeUp(0.35)}
          className="liquid-glass rounded-full p-2 mt-10 max-w-md w-full flex items-center gap-2"
        >
          <input
            type="date"
            className="bg-transparent text-white/60 text-sm px-4 outline-none flex-1 cursor-pointer"
            onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker?.()}
          />
          <div className="w-px h-5 bg-white/20 shrink-0" />
          <input
            type="text"
            placeholder="Nº de personas"
            className="bg-transparent text-white/60 text-sm px-4 outline-none flex-1 placeholder:text-white/40"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black rounded-full px-7 py-2.5 text-sm font-semibold shrink-0"
          >
            RESERVAR
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
