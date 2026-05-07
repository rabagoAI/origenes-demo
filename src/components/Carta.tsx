import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Category = 'todos' | 'entradas' | 'hamburguesas' | 'tradicionales' | 'postres'

interface Dish {
  id: string
  name: string
  desc: string
  price: string
  category: Exclude<Category, 'todos'>
  image: string
  badge?: string
}

const dishes: Dish[] = [
  // Entradas
  {
    id: 'croquetas',
    name: 'Croquetas de Jamón Ibérico',
    desc: 'Bechamel cremosa con jamón de bellota, rebozado artesanal. Servidas con alioli de trufa.',
    price: '9,50 €',
    category: 'entradas',
    image: '/images/croquetas.jpeg',
    badge: 'Clásico',
  },
  {
    id: 'tataki',
    name: 'Tataki de Atún Rojo',
    desc: 'Lomo de atún rojo marcado con sésamo, aguacate en crema, ponzu cítrico y microgreens.',
    price: '16,00 €',
    category: 'entradas',
    image: '/images/tataki.jpeg',
    badge: 'Signature',
  },
  {
    id: 'ensalada',
    name: 'Ensalada de Temporada',
    desc: 'Brotes tiernos, queso de cabra gratinado, nueces caramelizadas y vinagreta de miel y mostaza.',
    price: '11,00 €',
    category: 'entradas',
    image: '/images/ensalada.jpeg',
  },
  {
    id: 'pulpo',
    name: 'Pulpo a la Brasa',
    desc: 'Tentáculo de pulpo gallego braseado, crema de patata ahumada, pimentón de la Vera y aceite de oliva virgen.',
    price: '19,00 €',
    category: 'entradas',
    image: '/images/pulpo.jpeg',
    badge: 'Temporada',
  },

  // Hamburguesas
  {
    id: 'burger-clasica',
    name: 'Burger Clásica',
    desc: 'Ternera de 180 g, queso cheddar madurado, lechuga, tomate, pepinillo y nuestra salsa secreta. Con patatas fritas.',
    price: '14,50 €',
    category: 'hamburguesas',
    image: '/images/burger-clasica.jpeg',
  },
  {
    id: 'burger-casa',
    name: 'Burger de la Casa',
    desc: 'Doble ternera 120 g, bacon crujiente, cebolla caramelizada al vino tinto, queso gouda ahumado y mayonesa de ajo negro.',
    price: '17,50 €',
    category: 'hamburguesas',
    image: '/images/burger-casa.jpeg',
    badge: 'Best seller',
  },
  {
    id: 'burger-iberico',
    name: 'Burger Ibérica',
    desc: 'Presa ibérica picada, queso manchego semicurado, piquillos asados, alioli de romero y pan de cristal tostado.',
    price: '18,00 €',
    category: 'hamburguesas',
    image: '/images/burger-iberica.jpeg',
    badge: 'Signature',
  },
  {
    id: 'burger-veggie',
    name: 'Burger Vegana',
    desc: 'Medallón de lentejas y remolacha, guacamole fresco, tomate heirloom, espinacas baby y salsa sriracha. Pan sin gluten disponible.',
    price: '13,50 €',
    category: 'hamburguesas',
    image: '/images/burger-veggie.jpeg',
  },

  // Platos Tradicionales
  {
    id: 'cocido',
    name: 'Cocido Madrileño',
    desc: 'Elaboración de 8 horas con garbanzos castellanos, morcillo, chorizo, morcilla y verduras de huerta. Solo jueves.',
    price: '22,00 €',
    category: 'tradicionales',
    image: '/images/cocido.jpeg',
    badge: 'Jueves',
  },
  {
    id: 'arroz-bogavante',
    name: 'Arroz con Bogavante',
    desc: 'Arroz meloso con bogavante fresco del Cantábrico, sofrito de tomate y ñora, y toque de azafrán. Para 2 personas.',
    price: '38,00 €',
    category: 'tradicionales',
    image: '/images/arroz-bogavante.jpeg',
    badge: 'Para 2',
  },
  {
    id: 'rabo-toro',
    name: 'Rabo de Toro Estofado',
    desc: 'Guiso lento de 12 horas con vino tinto Ribera del Duero, zanahoria, cebolla y hierbas aromáticas. Puré de patata trufado.',
    price: '24,00 €',
    category: 'tradicionales',
    image: '/images/rabo-toro.jpeg',
  },
  {
    id: 'secreto-iberico',
    name: 'Secreto Ibérico a la Brasa',
    desc: 'Corte de cerdo ibérico de bellota braseado al punto, pimientos de padrón salteados y patatas revolconas.',
    price: '21,00 €',
    category: 'tradicionales',
    image: '/images/secreto-iberico.jpeg',
    badge: 'Clásico',
  },

  // Postres
  {
    id: 'tarta-queso',
    name: 'Tarta de Queso Vasca',
    desc: 'Textura cremosa y quemada al horno, coulis de frutos rojos de temporada y helado de vainilla bourbon.',
    price: '8,00 €',
    category: 'postres',
    image: '/images/tarta-queso.jpeg',
    badge: 'Best seller',
  },
  {
    id: 'coulant',
    name: 'Coulant de Chocolate 70%',
    desc: 'Bizcocho de chocolate negro con corazón fundente, helado de sal Maldon y pralinè de avellanas.',
    price: '8,50 €',
    category: 'postres',
    image: '/images/coulant.jpeg',
  },
  {
    id: 'crema-catalana',
    name: 'Crema Catalana',
    desc: 'Receta tradicional con canela y limón, caramelizada al momento con azúcar moreno. Galleta de mantequilla casera.',
    price: '7,00 €',
    category: 'postres',
    image: '/images/crema-catalana.jpeg',
    badge: 'Clásico',
  },
  {
    id: 'helado',
    name: 'Selección de Helados',
    desc: 'Tres bolas de elaboración propia: vainilla de Madagascar, chocolate belga y sabor de temporada. Con barquillo artesanal.',
    price: '6,50 €',
    category: 'postres',
    image: '/images/helados.jpeg',
  },
]

const categories: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'entradas', label: 'Entradas' },
  { key: 'hamburguesas', label: 'Hamburguesas' },
  { key: 'tradicionales', label: 'Tradición' },
  { key: 'postres', label: 'Postres' },
]

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, delay },
  }
}

export default function Carta() {
  const [active, setActive] = useState<Category>('todos')

  const filtered = active === 'todos' ? dishes : dishes.filter((d) => d.category === active)

  return (
    <section id="carta" className="bg-[#0a0a0a] py-32 md:py-44 px-6 md:px-12 border-t border-white/10">
      {/* Header */}
      <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-white/30 text-center mb-4">
        NUESTRA CARTA
      </motion.p>

      <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-medium text-white text-center mb-5">
        Platos con{' '}
        <span className="font-['Instrument_Serif'] italic">historia</span>
      </motion.h2>

      <motion.p {...fadeUp(0.2)} className="text-white/40 text-center max-w-lg mx-auto mb-14 text-sm leading-relaxed">
        Desde recetas que honran la tradición hasta creaciones propias. Producto fresco, de proximidad y con nombre propio.
      </motion.p>

      {/* Category tabs */}
      <motion.div {...fadeUp(0.25)} className="flex justify-center gap-2 mb-14 flex-wrap">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === key
                ? 'bg-white text-black'
                : 'border border-white/20 text-white/50 hover:border-white/50 hover:text-white/80'
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* Dish grid */}
      <motion.div layout className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((dish, i) => (
            <motion.div
              key={dish.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const placeholder = t.nextElementSibling as HTMLElement
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
                {/* Placeholder while images are not ready */}
                <div className="hidden w-full h-full bg-white/5 items-center justify-center absolute inset-0">
                  <span className="text-white/20 text-xs uppercase tracking-widest">Imagen próximamente</span>
                </div>
                {dish.badge && (
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white/80 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/15">
                    {dish.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-medium text-sm leading-snug">{dish.name}</h3>
                  <span className="text-white/70 text-sm font-semibold whitespace-nowrap">{dish.price}</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer note */}
      <motion.p {...fadeUp(0.3)} className="text-center text-white/25 text-xs mt-14 tracking-wide">
        Todos los platos están elaborados con producto fresco. Consulta alérgenos con nuestro equipo.
      </motion.p>
    </section>
  )
}
