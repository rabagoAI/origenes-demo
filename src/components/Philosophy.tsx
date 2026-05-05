import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const P1 =
  'Cocinamos con lo que la tierra nos da, con el tiempo que cada receta merece y con la honestidad de quien no necesita esconderse detrás de la técnica.'
const P2 =
  'Un espacio donde el producto es el protagonista, el equipo es la voz y tú, el invitado que queremos que vuelva.'

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = (index / total) * 0.5
  const end = start + 0.08
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
  return <motion.span style={{ opacity }}>{word} </motion.span>
}

function WordReveal({
  text,
  scrollYProgress,
  className,
}: {
  text: string
  scrollYProgress: MotionValue<number>
  className?: string
}) {
  const words = text.split(' ')
  return (
    <p className={className}>
      {words.map((word, i) => (
        <Word key={i} word={word} index={i} total={words.length} scrollYProgress={scrollYProgress} />
      ))}
    </p>
  )
}

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={ref} className="bg-black py-32 md:py-44 px-8">
      <video
        className="w-full max-w-2xl mx-auto rounded-2xl object-cover aspect-video mb-24"
        src="/videos/chef.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <WordReveal
        text={P1}
        scrollYProgress={scrollYProgress}
        className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white max-w-3xl mx-auto"
      />

      <WordReveal
        text={P2}
        scrollYProgress={scrollYProgress}
        className="text-xl md:text-2xl font-medium mt-12 text-white max-w-3xl mx-auto"
      />
    </section>
  )
}
