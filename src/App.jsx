import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Community from './components/Community'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)' }} />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#141414' }}>
      <Navbar />
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <Community />
      <Divider />
      <Services />
      <Divider />
      <About />
      <Divider />
      <Pricing />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
