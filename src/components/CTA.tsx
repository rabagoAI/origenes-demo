import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hls from 'hls.js'

const HLS_URL = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay },
  }
}

export default function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(HLS_URL)
      hls.attachMedia(video)
      return () => hls.destroy()
    } else {
      video.src = HLS_URL
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-32 md:py-44 border-t border-white/10">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <div className="relative w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
          <div className="absolute w-5 h-5 border border-white/60 rounded-full" />
        </div>

        <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-medium text-white mt-8">
          Reserva tu{' '}
          <span className="font-['Instrument_Serif'] italic">mesa</span>
          {' '}hoy
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-white/50 text-lg mt-4 max-w-md">
          Una experiencia gastronómica que merece vivirse. Te esperamos.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black rounded-lg px-8 py-3.5 font-semibold text-sm"
          >
            Reservar mesa
          </motion.button>
          <button className="liquid-glass text-white rounded-lg px-8 py-3.5 text-sm">
            Ver carta completa
          </button>
        </motion.div>
      </div>
    </section>
  )
}
