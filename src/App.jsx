import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Problem = lazy(() => import('./components/Problem'))
const Community = lazy(() => import('./components/Community'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Problem />
        <Community />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </Suspense>
    </div>
  )
}
