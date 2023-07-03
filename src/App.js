import React from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import ModelsPage from './pages/ModelsPage'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/testimonials" element={<TestimonialsPage />} />
        <Route index path="/team" element={<OurTeam />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/models" element={<ModelsPage />} />
      </Routes>
    </>
  )
}

export default App