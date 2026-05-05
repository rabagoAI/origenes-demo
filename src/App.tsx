import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Changed from './components/Changed'
import Philosophy from './components/Philosophy'
import Menu from './components/Menu'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Changed />
      <Philosophy />
      <Menu />
      <CTA />
      <Footer />
    </div>
  )
}
