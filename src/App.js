import React from 'react'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Join from './components/join/Join'
import Plans from './components/plans/Plans'
import Program from './components/program/Program'
import Reasons from './components/reasons/Reasons'
import Testimonials from './components/testimonials/Testimonials'

export default function App() {
  return (
    <>
      <div className='App'>
          <Hero />
          <Program />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
      </div>
    </>
  )
}
