import React from 'react'
import { Link } from 'react-router-dom'

const HeroPages = ({ name }) => {
  return (
    <section className='hero-pages'>
      <div className='hero-pages__overlay'></div>
      <div className='hero-pages__text'>
        <h3>{name}</h3>
        <p>
          <Link to="/">Home</Link> / {name}
        </p>
      </div>
    </section>
  )
}

export default HeroPages