import React from 'react'
import HeroPages from '../components/HeroPages'
import Testimonials from '../components/Testimonials'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const TestimonialsPage = () => {
  return (
    <>
      <HeroPages name="Testimonials" />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  )
}

export default TestimonialsPage