import React from 'react'

import Hero from '../components/Hero'
import Booking from '../components/Booking'
import Process from '../components/Process'
import PickMotor from '../components/PickMotor'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Booking />
      <Process />
      <PickMotor />
      <Banner />
      <ChooseUs />
      <Faq />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </>
  )
}

export default Home