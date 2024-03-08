import React from 'react'
import homeImage from '../image/home-img.png';

export const OurProducts = () => {
  return (
    <section className="home" id="home">
        <h3>Nuestros productos</h3>

        <a href="#divisiones"><img src={homeImage} alt="" /></a>

        <a href="#divisiones" class="btn"> Ver Productos</a>
    </section>
  )
}
